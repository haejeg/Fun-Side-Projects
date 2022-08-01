# Detects the color white (255, 255, 255) with a tolerance of 25 for all RGB values

# Imports
from pydoc import doc
import pyautogui

# Return mouse position
def returnMousePosition():
    x, y = pyautogui.position()
    return x, y

# Return color of pixel at mouse position
def returnColor():
    x, y = returnMousePosition()
    color = pyautogui.screenshot().getpixel((x, y))
    return color

# Check if color matches color we're looking for
def detectColor(color, tolerance, matchingcolor):
    if abs(color[0] - matchingcolor[0]) <= tolerance and abs(color[1] - matchingcolor[1]) <= tolerance and abs(color[2] - matchingcolor[2]) <= tolerance:
        return True
    else:
        return False

while True:
    print(detectColor(returnColor(), 25, (255, 255, 255)))
