# 🌭 Hot Dog or Not a Hot Dog

Inspired by the hilarious scene in the comedy movie **"Sillycon Valley"**, where an AI app could detect whether something is a **hot dog** or **not a hot dog**, this project brings that concept to life using **TensorFlow.js**!

## 📖 Overview
This is a web-based AI application that uses object detection to classify whether the object in your webcam feed is a **hot dog** or **not a hot dog**. It’s a fun and practical way to explore computer vision and web technologies!

### 🎥 Movie Inspiration
In "Sillycon Valley," an Asian developer showcased his app, which used AI to hilariously detect **only hot dogs** with great precision. This project pays homage to that comedic genius while showcasing the power of modern machine learning libraries.
![image](https://github.com/user-attachments/assets/6d5e02d7-8519-4d07-ab75-a7e0ee3da595)

---

## 🚀 Features
- **Real-Time Object Detection**: Uses your webcam to detect objects in real-time.
- **Hot Dog Classification**: Specifically identifies **hot dogs** and displays "Hot Dog."
- **Not a Hot Dog**: If the detected object isn’t a hot dog, it displays "Not a Hot Dog."
- **Interactive UI**: A fun and intuitive interface with bounding boxes and labels.

---

## 🛠️ Technologies Used
- **TensorFlow.js**: For running machine learning models directly in the browser.
- **COCO-SSD**: A pre-trained object detection model capable of recognizing 80 object classes, including **hot dogs**.
- **HTML/CSS/JavaScript**: For building the web interface.

---

## 📂 File Structure
hot-dog-or-not/ ├── index.html # Main HTML file ├── styles.css # CSS file for styling ├── script.js # JavaScript logic for object detection └── README.md # This file!


---

## 🌟 How It Works
1. The app loads the **COCO-SSD model**.
2. Your **webcam feed** is processed in real-time.
3. If a **hot dog** is detected:
   - A green bounding box is drawn, and it displays "🌭 Hot Dog!"
4. If no **hot dog** is detected:
   - A red bounding box is drawn around the object, and it displays "Not a Hot Dog."

---

## 📸 Screenshots!
### Hot Dog Detected
![not hotdog1](https://github.com/user-attachments/assets/dc38b96c-c5b8-4427-b830-25399412dccb)
![nothotdog2](https://github.com/user-attachments/assets/d3a70d08-9640-4153-9391-0cff8b1cc20c)


### Not a Hot Dog
[HotDogs](https://github.com/user-attachments/assets/bf42fcd2-5d35-4405-a497-bf9dccd03e61)


---
