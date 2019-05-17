import cv2, os
#import face detection algorithm
face_cascade = cv2.CascadeClassifier("C:\\Users\\Valentim\\Anaconda3\\Lib\\site-packages\\cv2\\data\\haarcascade_frontalface_default.xml")
#camera
cam = cv2.VideoCapture(0)
cv2.namedWindow("Camera")
#frame count
img_counter = 0

#create dir for frames
try:
    if not os.path.exists('data'):
        os.makedirs('data')
except OSError:
    print('Error: Creating directory of data')

#start loop
while True:
    #read content from camera
    ret, frame = cam.read()

    #face Detection
    faces = face_cascade.detectMultiScale(frame, 1.15, 5)
    for (x, y, w, h) in faces:
        frame = cv2.rectangle(frame, (x, y), (x + w, y + h), (0, 255, 0), 2)
    #video Window Display
    cv2.imshow("Camera", frame)
    if not ret:
        break
    k = cv2.waitKey(1)
    #exit video
    if k == ord('q'):
        # ESC pressed
        print("Escape hit, closing...")
        cam.release()
        break
    #take picture
    elif k%256 == 32:
        # SPACE pressed
        img_name = "./data/opencv_frame_{}.jpg".format(img_counter)
        cv2.imwrite(img_name, frame)
        print("{} written!".format(img_name))
        img_counter += 1

cv2.destroyAllWindows()