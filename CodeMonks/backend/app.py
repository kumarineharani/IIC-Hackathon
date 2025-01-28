from flask import Flask, request, jsonify
import os
import cv2
import numpy as np
from face_recognition_model import FaceRecognition
from pyngrok import ngrok

PORT = 4000

app = Flask(__name__)

face_recognizer = FaceRecognition()

@app.route("/")
def home():
    return f"Hello!"

@app.route('/recognize', methods=['POST'])
def recognize_faces():

    if 'image' not in request.files:
        return jsonify({'error': 'No image uploaded'}), 400

    try:
        image_file = request.files['image']
        image_array = np.fromstring(image_file.read(), np.uint8)
        image = cv2.imdecode(image_array, cv2.IMREAD_COLOR)

        detected_faces = face_recognizer.recognize_faces(image)
        recognized_names = [face['name'] for face in detected_faces]

        return jsonify({'status': 'success', 'recognized_names': recognized_names})

    except Exception as e:
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':

    ngrok.set_auth_token("2s7zHadkv5v0b9b8FVcZH0F0PTr_2Leyz7yVaajJWA4cKrtWQ")
    public_url =  ngrok.connect(PORT).public_url
    print(f"Public URL: {public_url}")
    app.run(port=PORT)