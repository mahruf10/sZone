// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCpmQqSUWA7zAhmhgLdcI4hPUb4MAgs16E",
  authDomain: "szone-7c8ec.firebaseapp.com",
  projectId: "szone-7c8ec",
  storageBucket: "szone-7c8ec.firebasestorage.app",
  messagingSenderId: "564492569232",
  appId: "1:564492569232:web:00e22acb17a935fd836615",
  measurementId: "G-1E09KYELHX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);