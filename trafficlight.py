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

def ein_A(zeit):
   GPIO.output(pin_A,GPIO.HIGH)
   time.sleep(zeit)
   GPIO.output(pin_A,GPIO.LOW)

def ein_B(zeit_2):
   GPIO.output(pin_B,GPIO.HIGH)
   time.sleep(zeit_2)
   GPIO.output(pin_B,GPIO.LOW)

def ein_C(zeit_3):
   GPIO.output(pin_C,GPIO.HIGH)
   time.sleep(zeit_3)
   GPIO.output(pin_C,GPIO.LOW)

while True:

	ein_A(10)
	ein_B(3)
	ein_C(10)
	ein_B(3)
