import cv2
import time

video = cv2.VideoCapture(0)

a = 0

while True:
    check, frame = video.read()
    print(check)
    print(frame)
    a += 1


    cv2.imshow("Capture",frame)
    key = cv2.waitKey(1)
    if key == ord('q'):
        break


video.release()
cv2.destroyAllWindows()