# TrailBlaze App

## Introduction
TrailBlaze is a React Native mobile application that allows users to keep track of their movements, recording the trails they travel on their adventures. The app displays a user's current location on a map and marks their trail with a polyline. Users can view a list of their recorded tracks and see detailed information about each journey.

## System Requirements
To run the TrailBlaze app, your development environment must meet the following requirements:
- Node.js version 14 or later.
- Expo Go app on your mobile device (iOS or Android).
- iOS: Xcode and the iOS Simulator.
- Android: Android Studio and the Android Emulator.

## Installation and Setup

### Clone the App Repository
Clone the TrailBlaze React Native app repository to your local machine:
```bash
git clone https://github.com/hoxhaava/trailblaze-app.git
```

### Install Dependencies
Navigate to the app's directory and install the required npm packages.

### Configure the API Connection
Update the `tracker.js` file with the HTTPS URL provided by the ngrok process from the API setup:
```bash
const baseURL = 'https://<your-ngrok-url>.ngrok.io';
```

### Start the App
Launch the app with:
```bash
npm start
```
After executing the command, open the Expo Go app on your mobile device and scan the QR code displayed in the terminal to run the TrailBlaze app on your device.

---

Enjoy blazing trails and capturing your explorations with the TrailBlaze app! 🚀🌍
