import pyautogui
import time

# Take a screenshot and return an image for processing
def screenshot():
    image = pyautogui.screenshot()
    image = image.convert('RGB')
    return image

# Locate a color within an image and return x and y coordinates
def locateColor(image, color, tolerance):
    width, height = image.size
    coordinates = []
    # Loop through pixels in the image
    for x in range(width):
        for y in range(height):
            pixel = image.getpixel((x, y))
            # Check if the pixel matches the color we're looking for within our tolerance
            if abs(pixel[0] - color[0]) <= tolerance and abs(pixel[1] - color[1]) <= tolerance and abs(pixel[2] - color[2]) <= tolerance:
                # Add the x and y coordinates to the list
                coordinates.append((x, y))
    return coordinates            

while True:
    print(locateColor(screenshot(), (255, 0, 0), 5))
    time.sleep(5)