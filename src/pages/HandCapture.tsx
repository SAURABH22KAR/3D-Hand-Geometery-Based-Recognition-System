import React, { useRef, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Camera, Hand, CheckCircle, AlertCircle, ArrowLeft } from 'lucide-react'

const HandCapture = () => {
  const videoRef = useRef<HTMLVideoElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [isCapturing, setIsCapturing] = useState(false)
  const [captureStatus, setCaptureStatus] = useState<'idle' | 'detecting' | 'captured' | 'error'>('idle')
  const [handDetected, setHandDetected] = useState(false)
  const [stream, setStream] = useState<MediaStream | null>(null)
  const navigate = useNavigate()

  useEffect(() => {
    startCamera()
    return () => {
      if (stream) {
        stream.getTracks().forEach(track => track.stop())
      }
    }
  }, [])

  const startCamera = async () => {
    try {
      const mediaStream = await navigator.mediaDevices.getUserMedia({
        video: { width: 640, height: 480 }
      })
      setStream(mediaStream)
      if (videoRef.current) {
        videoRef.current.srcObject = mediaStream
      }
    } catch (error) {
      console.error('Error accessing camera:', error)
      setCaptureStatus('error')
    }
  }

  const simulateHandDetection = () => {
    // Simulate hand detection process
    setIsCapturing(true)
    setCaptureStatus('detecting')
    
    setTimeout(() => {
      setHandDetected(true)
      setCaptureStatus('captured')
      setIsCapturing(false)
      
      // Simulate successful capture
      setTimeout(() => {
        alert('Hand geometry captured successfully! Redirecting to dashboard...')
        navigate('/dashboard')
      }, 2000)
    }, 3000)
  }

  const getStatusMessage = () => {
    switch (captureStatus) {
      case 'idle':
        return 'Position your hand in front of the camera'
      case 'detecting':
        return 'Analyzing hand geometry... Please hold still'
      case 'captured':
        return 'Hand geometry captured successfully!'
      case 'error':
        return 'Error accessing camera. Please check permissions.'
      default:
        return ''
    }
  }

  const getStatusIcon = () => {
    switch (captureStatus) {
      case 'captured':
        return <CheckCircle className="w-6 h-6 text-green-600" />
      case 'error':
        return <AlertCircle className="w-6 h-6 text-red-600" />
      default:
        return <Hand className="w-6 h-6 text-secondary" />
    }
  }

  return (
    <div className="min-h-screen gradient-bg">
      {/* Header */}
      <header className="bg-gray-800 bg-opacity-90 text-orange-400 py-4 shadow-2xl">
        <div className="container mx-auto px-4 flex items-center gap-4">
          <Link to="/dashboard" className="text-white hover:text-orange-400 transition-colors">
            <ArrowLeft className="w-6 h-6" />
          </Link>
          <h1 className="text-3xl font-bold font-times">
            Hand Geometry Capture
          </h1>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Instructions */}
          <div className="card mb-8">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">Capture Instructions</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-bold text-lg mb-2 text-secondary">Before You Start:</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Ensure good lighting conditions</li>
                  <li>• Remove any jewelry from your hand</li>
                  <li>• Keep your hand steady during capture</li>
                  <li>• Position hand 12-18 inches from camera</li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2 text-secondary">During Capture:</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Spread your fingers naturally</li>
                  <li>• Keep palm facing the camera</li>
                  <li>• Hold position until capture completes</li>
                  <li>• Follow the on-screen guidance</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Camera Section */}
          <div className="card">
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-2">Live Camera Feed</h2>
              <div className="flex items-center justify-center gap-2 mb-4">
                {getStatusIcon()}
                <p className="text-lg text-gray-600">{getStatusMessage()}</p>
              </div>
            </div>

            {/* Camera Display */}
            <div className="relative bg-black rounded-lg overflow-hidden mb-6">
              <video
                ref={videoRef}
                autoPlay
                playsInline
                muted
                className="w-full h-96 object-cover hand-tracking-canvas"
              />
              <canvas
                ref={canvasRef}
                className="absolute top-0 left-0 w-full h-full"
              />
              
              {/* Overlay Guide */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="border-4 border-white border-dashed rounded-lg w-80 h-80 flex items-center justify-center">
                  <Hand className="w-16 h-16 text-white opacity-50" />
                </div>
              </div>

              {/* Status Overlay */}
              {captureStatus === 'detecting' && (
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-white mx-auto mb-4"></div>
                    <p className="text-xl font-bold">Analyzing Hand Geometry...</p>
                  </div>
                </div>
              )}
            </div>

            {/* Controls */}
            <div className="flex justify-center gap-4">
              <button
                onClick={simulateHandDetection}
                disabled={isCapturing || captureStatus === 'error'}
                className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
              >
                <Camera className="w-5 h-5" />
                {isCapturing ? 'Capturing...' : 'Start Capture'}
              </button>
              
              {captureStatus === 'captured' && (
                <Link to="/dashboard" className="btn-secondary flex items-center gap-2">
                  <CheckCircle className="w-5 h-5" />
                  Continue to Dashboard
                </Link>
              )}
            </div>

            {/* Progress Indicator */}
            {captureStatus === 'detecting' && (
              <div className="mt-6">
                <div className="bg-gray-200 rounded-full h-2">
                  <div className="bg-secondary h-2 rounded-full animate-pulse" style={{ width: '60%' }}></div>
                </div>
                <p className="text-center text-sm text-gray-600 mt-2">Processing hand landmarks...</p>
              </div>
            )}
          </div>

          {/* Technical Info */}
          <div className="card mt-8">
            <h3 className="text-xl font-bold mb-4 text-gray-800">Technical Information</h3>
            <div className="grid md:grid-cols-3 gap-6 text-sm">
              <div>
                <h4 className="font-bold text-secondary mb-2">Detection Method</h4>
                <p className="text-gray-600">MediaPipe Hand Landmarks</p>
              </div>
              <div>
                <h4 className="font-bold text-secondary mb-2">Feature Points</h4>
                <p className="text-gray-600">21 Hand Landmarks</p>
              </div>
              <div>
                <h4 className="font-bold text-secondary mb-2">Classification</h4>
                <p className="text-gray-600">Random Forest Algorithm</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HandCapture