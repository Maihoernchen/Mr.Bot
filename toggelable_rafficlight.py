import RPi.GPIO as GPIO
import time

GPIO.setmode(GPIO.BCM)
GPIO.setwarnings(False)

pin_A = 18
pin_B = 12
pin_C = 13

GPIO.setup(pin_A,GPIO.OUT)
GPIO.setup(pin_B,GPIO.OUT)
GPIO.setup(pin_C,GPIO.OUT)

def ein_A():
   GPIO.output(pin_A,GPIO.HIGH)
   input("Press Enter For Red")
   GPIO.output(pin_A,GPIO.LOW)

def ein_B(zeit):
   GPIO.output(pin_B,GPIO.HIGH)
   time.sleep(zeit)
   GPIO.output(pin_B,GPIO.LOW)

def ein_C():
   GPIO.output(pin_C,GPIO.HIGH)
   input("Press Enter For Green")
   GPIO.output(pin_C,GPIO.LOW)

while True:

	ein_A()
	ein_B(3)
	ein_C()
	ein_B(3)
