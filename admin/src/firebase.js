// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAGEnyV_pJvEyHgz-sIyEYrL-5rNZEsToY",
    authDomain: "college-ecommerse-app.firebaseapp.com",
    projectId: "college-ecommerse-app",
    storageBucket: "college-ecommerse-app.appspot.com",
    messagingSenderId: "878358720446",
    appId: "1:878358720446:web:3713c52323208d99d213ef",
    measurementId: "G-NTHHL4E35M"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;