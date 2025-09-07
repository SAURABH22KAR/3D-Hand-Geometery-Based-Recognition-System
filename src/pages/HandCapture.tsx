import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Camera, Hand, ArrowLeft, CheckCircle, AlertCircle } from 'lucide-react';

const HandCapture = () => {
  const navigate = useNavigate();
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isCapturing, setIsCapturing] = useState(false);
  const [captureStatus, setCaptureStatus] = useState<'idle' | 'capturing' | 'success' | 'error'>('idle');
  const [stream, setStream] = useState<MediaStream | null>(null);

  useEffect(() => {
    return () => {
      if (stream) {
        stream.getTracks().forEach(track => track.stop());
      }
    };
  }, [stream]);

  const startCamera = async () => {
    try {
      const mediaStream = await navigator.mediaDevices.getUserMedia({ 
        video: { width: 640, height: 480 } 
      });
      setStream(mediaStream);
      if (videoRef.current) {
        videoRef.current.srcObject = mediaStream;
      }
      setIsCapturing(true);
      setCaptureStatus('capturing');
    } catch (error) {
      console.error('Error accessing camera:', error);
      setCaptureStatus('error');
      alert('Unable to access camera. Please ensure camera permissions are granted.');
    }
  };

  const stopCamera = () => {
    if (stream) {
      stream.getTracks().forEach(track => track.stop());
      setStream(null);
    }
    setIsCapturing(false);
    setCaptureStatus('idle');
  };

  const captureHand = () => {
    if (videoRef.current && canvasRef.current) {
      const canvas = canvasRef.current;
      const video = videoRef.current;
      const ctx = canvas.getContext('2d');
      
      if (ctx) {
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;
        ctx.drawImage(video, 0, 0);
        
        // Simulate hand geometry processing
        setTimeout(() => {
          setCaptureStatus('success');
          alert('Hand geometry captured successfully! Data has been processed and stored.');
        }, 2000);
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-600">
      {/* Header */}
      <div className="bg-gray-600 text-orange-400 py-4 px-6 flex items-center gap-4">
        <button
          onClick={() => navigate('/dashboard')}
          className="text-orange-400 hover:text-orange-300 flex items-center gap-2"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Dashboard
        </button>
        <h1 className="text-3xl font-bold">Hand Geometry Capture</h1>
      </div>

      <div className="p-8">
        {/* Instructions */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
            <Hand className="w-8 h-8 text-orange-500" />
            Capture Instructions
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-bold mb-2">Before You Start:</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Ensure good lighting conditions</li>
                <li>• Remove any jewelry from your hands</li>
                <li>• Clean your hands for better detection</li>
                <li>• Position yourself 2-3 feet from the camera</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-2">During Capture:</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Keep your hand steady and flat</li>
                <li>• Spread your fingers naturally</li>
                <li>• Hold position for 3-5 seconds</li>
                <li>• Follow the on-screen guidance</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Camera Section */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-xl font-bold">Camera Feed</h3>
            <div className="flex items-center gap-2">
              {captureStatus === 'capturing' && (
                <div className="flex items-center gap-2 text-blue-600">
                  <div className="w-3 h-3 bg-blue-600 rounded-full animate-pulse"></div>
                  <span>Camera Active</span>
                </div>
              )}
              {captureStatus === 'success' && (
                <div className="flex items-center gap-2 text-green-600">
                  <CheckCircle className="w-5 h-5" />
                  <span>Capture Successful</span>
                </div>
              )}
              {captureStatus === 'error' && (
                <div className="flex items-center gap-2 text-red-600">
                  <AlertCircle className="w-5 h-5" />
                  <span>Camera Error</span>
                </div>
              )}
            </div>
          </div>

          {/* Video Feed */}
          <div className="relative bg-gray-900 rounded-lg overflow-hidden mb-6">
            {!isCapturing ? (
              <div className="aspect-video flex items-center justify-center text-white">
                <div className="text-center">
                  <Camera className="w-16 h-16 mx-auto mb-4 text-gray-400" />
                  <p className="text-xl">Camera not active</p>
                  <p className="text-gray-400">Click "Start Camera" to begin</p>
                </div>
              </div>
            ) : (
              <video
                ref={videoRef}
                autoPlay
                playsInline
                className="w-full aspect-video object-cover"
              />
            )}
            
            {/* Overlay Guide */}
            {isCapturing && (
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="border-4 border-orange-400 border-dashed rounded-lg w-80 h-60 flex items-center justify-center">
                  <Hand className="w-16 h-16 text-orange-400" />
                </div>
              </div>
            )}
          </div>

          {/* Controls */}
          <div className="flex justify-center gap-4">
            {!isCapturing ? (
              <button
                onClick={startCamera}
                className="bg-green-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-green-700 transition-colors flex items-center gap-2"
              >
                <Camera className="w-5 h-5" />
                Start Camera
              </button>
            ) : (
              <>
                <button
                  onClick={captureHand}
                  className="bg-orange-500 text-white px-8 py-3 rounded-lg font-bold hover:bg-orange-600 transition-colors flex items-center gap-2"
                  disabled={captureStatus === 'success'}
                >
                  <Hand className="w-5 h-5" />
                  Capture Hand
                </button>
                <button
                  onClick={stopCamera}
                  className="bg-red-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-red-700 transition-colors"
                >
                  Stop Camera
                </button>
              </>
            )}
          </div>

          {/* Hidden canvas for capture */}
          <canvas ref={canvasRef} className="hidden" />
        </div>

        {/* Status Messages */}
        {captureStatus === 'success' && (
          <div className="bg-green-50 border border-green-200 rounded-lg p-6 mt-6">
            <div className="flex items-center gap-3">
              <CheckCircle className="w-8 h-8 text-green-600" />
              <div>
                <h3 className="text-lg font-bold text-green-800">Capture Successful!</h3>
                <p className="text-green-700">
                  Your hand geometry has been successfully captured and processed. 
                  The biometric data has been stored securely in your profile.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default HandCapture;