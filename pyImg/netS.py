import requests
import numpy as np
import cv2

while True:
    # casa
    # img_res = requests.get("http://192.168.15.2:8080/shot.jpg")

    # hotspot j8
    # img_res = requests.get("http://192.168.43.1:8080/shot.jpg")

    #other
    img_res = requests.get("http://192.168.0.4:8080/shot.jpg")
    img_arr = np.array(bytearray(img_res.content), dtype = np.uint8)
    img = cv2.imdecode(img_arr, -1)

    gray_img = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)

    resized = cv2.resize(img, (int(img.shape[1] / 3), int(img.shape[0] / 4)))

    print(img_arr)

    cv2.imshow('frame', resized)

    if cv2.waitKey(1) & 0xFF == ord('q'):
        break