import cv2

face_cascade = cv2.CascadeClassifier("C:\\Users\\Valentim\\Anaconda3\\Lib\\site-packages\\cv2\\data\\haarcascade_frontalface_default.xml")

img = cv2.imread("C:\\Users\\Valentim\\PycharmProjects\\imgR\\data\\opencv_frame_0.jpg", 1)

gray_img = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)

resized = cv2.resize(gray_img, (int(gray_img.shape[1]/2), int(gray_img.shape[0]/2)))

faces = face_cascade.detectMultiScale(img, 1.15, 2)

for (x, y, w, h) in faces:
    img = cv2.rectangle(img, (x, y), (x+w, y+h), (0, 255, 0), 2)

resized = cv2.resize(img, (int(img.shape[1]/2), int(img.shape[0]/2)))

print(type(faces))
print(faces)
# print(img)

cv2.imshow("Face Detection", resized)

cv2.waitKey(0)
cv2.destroyAllWindows()