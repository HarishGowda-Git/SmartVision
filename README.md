Aid for Visually Impaired Persons

Project Overview

   This project aims to empower visually impaired individuals by leveraging cutting-edge technologies like YOLO (You Only Look Once), Machine Learning, and IoT devices. The system provides a   compact, efficient, and reliable solution to assist users in their daily activities through the following features:
        Audio Response for Currency Detection: Identifies currency denominations and provides audio feedback to assist in monetary  transactions.
  
        Weather Analysis: Analyzes the weather conditions and alerts the user to unfavorable weather scenarios.

        Live Video Streaming: Facilitates live video transmission to a family member or friend for real-time support.

        Object Detection: Detects objects in the user's vicinity and communicates their presence via audio alerts.

Key Features

    1. Audio Response for Currency Detection

        Detects currency denominations using YOLO-based object detection models.

        Supports multiple currencies with an option for expansion.

        Converts the detected denomination into speech using a text-to-speech module.

    2. Weather Analysis

        Integrates with weather APIs or on-device sensors to assess environmental conditions.

        Provides real-time alerts for rain, fog, or other adverse weather.

        Displays weather insights on a companion mobile or web app.

    3. Live Video Streaming

        Streams live video from the device's camera to a pre-configured recipient via a secure web app.

        Supports low-latency streaming and resolution adjustments for optimal bandwidth usage.

        Includes the capability to add real-time annotations by the recipient for additional support.

    4. Object Detection

        Uses YOLO models to detect everyday objects and provide audio alerts to the user.

        Can prioritize detection based on user preferences (e.g., identifying nearby obstacles first).

        Offers expandable detection categories based on training data.

System Components

Hardware

    Core Processing Unit: Raspberry Pi 4 with Coral Mini PCIe Accelerator.

    Camera Module: Sony IMX219 (4K) camera.

    SIM and GPS Modules:

        SIM7600 Series for internet and GPS tracking.

        Quectel EC25 Series for enhanced connectivity.

    Audio Output: Lightweight, wearable earphones or speakers.

    Power Supply: Portable battery pack for extended usage.

Software

    Object Detection: YOLOv5/YOLOv8 models for real-time detection.

    Currency Detection: Custom-trained YOLO models for identifying currency notes.

    Weather Analysis: Python-based integration with OpenWeather API or sensors.

    Live Video Streaming: Django-based web app for remote video monitoring.

    Speech Processing: Google Text-to-Speech (TTS) or an offline alternative like pyttsx3.

Installation Guide

Prerequisites

    Raspberry Pi 4 with Raspbian OS.

    Python 3.9 or later.

    Internet connectivity.

Steps

    Clone this repository:

        git clone https://github.com/your-username/aid-for-visually-impaired.git

    Install required Python dependencies:

        pip install -r requirements.txt

    Configure the web app for live video streaming:

    Navigate to the web_app directory.

        Modify settings.py with your server details.

    Run the server:

    python manage.py runserver

    Train YOLO models (optional):

    Prepare your dataset.

    Use the provided training script.

    Deploy the system on the IoT device:

    Flash the application to the Raspberry Pi.

    Connect the SIM module and camera.

Usage Instructions

    Power on the device and ensure all modules are connected.

    Follow voice instructions for initial setup.

    Use physical buttons or voice commands to activate features like:

    Currency detection.

    Weather update.

    Live video streaming.

    Object detection.

Future Enhancements

    Multi-language support for audio responses.

    Integration of AI-powered navigation assistance.

    Offline mode for weather analysis.

    Extended battery life.

Contributors

    - Harish Gowda B
    - Nitish Nagappa Gouda
    - Prajwal Gowda R
    - Venugopal Hegde

License

This project is licensed under the MIT License. See the LICENSE file for details.

We aim to make the world more accessible for visually impaired individuals through this innovative project. Feel free to contribute or suggest improvements!
