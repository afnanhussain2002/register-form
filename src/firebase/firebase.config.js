// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAXvuE5gq47xsCCXJADqHLEAzxTUeZzNds",
  authDomain: "register-form-11068.firebaseapp.com",
  projectId: "register-form-11068",
  storageBucket: "register-form-11068.appspot.com",
  messagingSenderId: "84578121988",
  appId: "1:84578121988:web:3337d3f227d69b0c7d7851",
  measurementId: "G-2FG5NF1FND"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)