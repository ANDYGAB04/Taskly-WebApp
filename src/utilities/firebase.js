// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_APP_FIREBASE_API_KEY,
  authDomain: "taskly-a5714.firebaseapp.com",
  projectId: "taskly-a5714",
  storageBucket: "taskly-a5714.firebasestorage.app",
  messagingSenderId: "137149482831",
  appId: "1:137149482831:web:c383f7083ba125d671a73a",
  measurementId: "G-M9MFFL883P"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
