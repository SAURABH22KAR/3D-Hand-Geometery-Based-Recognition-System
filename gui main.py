# -*- coding: utf-8 -*-ss
"""
Created on Tue May  4 17:28:41 2021

@author: user
"""

from tkinter import *
import tkinter as tk


from PIL import Image ,ImageTk

from tkinter.ttk import *
from pymsgbox import *


root=tk.Tk()

root.title("3D Hand Geometry Using Machine Learning")

#, relwidth=1, relheight=1)

w = tk.Label(root, text="3D Hand Geometry Using Machine Learning",width=70,background="gray51", foreground="orange",height=2,font=("Times new roman",35,"bold"))
w.place(x=5,y=-8)



w,h = root.winfo_screenwidth(),root.winfo_screenheight()
root.geometry("%dx%d+0+0"%(w,h))
root.configure(background="gray51")

from tkinter import messagebox as ms


def Login():
    from subprocess import call
    call(["python","login1.py"])


def Register():
    from subprocess import call
    call(["python","registration.py"])







bg = Image.open(r"h4.jpg")
bg.resize((1500,200),Image.ANTIALIAS)
print(w,h)
bg_img = ImageTk.PhotoImage(bg)
bg_lbl = tk.Label(root,image=bg_img)
bg_lbl.place(x=0,y=93)

wlcm=tk.Label(root,text="......Welcome to 3D Hand Geometry System ......",width=100,height=2,background="gray51",foreground="#710F62",font=("Times new roman",22,"bold"))
wlcm.place(x=0,y=775)




Disease2=tk.Button(root,text="Login",command=Login,width=15,height=2, bd="8",bg="#E8A317",foreground="white",font=("times new roman",14,"bold"))
Disease2.place(x=25,y=15)


Disease3=tk.Button(root,text="Register",command=Register,width=15, bd="8", height=2, bg="#AF8989",foreground="white",  font=("times new roman",14,"bold"))
Disease3.place(x=225,y=15)


root.mainloop()
