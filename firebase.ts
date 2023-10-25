// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB5SGZTtQTFSTPjwbJ2fgQnvy_PUWLOtqw",
  authDomain: "alamiphotography-b75a1.firebaseapp.com",
  projectId: "alamiphotography-b75a1",
  storageBucket: "alamiphotography-b75a1.appspot.com",
  messagingSenderId: "697319696621",
  appId: "1:697319696621:web:0e9f5f988d2c669bd044e4",
  measurementId: "G-G68VX5JSM1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);