import os
import cv2
import numpy as np

photo_dir = r"c:\Users\Rocket\OneDrive\Desktop\portfolio\Photos"
out_dir = r"c:\Users\Rocket\OneDrive\Desktop\portfolio\fares-portfolio\public\images"

for file in os.listdir(photo_dir):
    if not file.endswith(".jpeg"): continue
    
    path = os.path.join(photo_dir, file)
    img = cv2.imread(path, cv2.IMREAD_GRAYSCALE)
    if img is None: continue
    
    # check if it's a signature (mostly white)
    mean_val = np.mean(img)
    if mean_val > 200: # mostly white
        print("Found signature:", file)
        
        # Convert to BGRA
        img_color = cv2.cvtColor(img, cv2.COLOR_GRAY2BGRA)
        
        # Make white transparent, and black -> white
        # We want the ink to be white, and background transparent
        # Threshold: anything below 150 is ink
        _, mask = cv2.threshold(img, 150, 255, cv2.THRESH_BINARY_INV)
        
        # Set all pixels to white
        img_color[:, :, 0] = 255
        img_color[:, :, 1] = 255
        img_color[:, :, 2] = 255
        # Set alpha channel to the mask (ink becomes opaque white, rest is transparent)
        img_color[:, :, 3] = mask
        
        out_path = os.path.join(out_dir, "signature.png")
        cv2.imwrite(out_path, img_color)
        print("Saved to", out_path)
        break
