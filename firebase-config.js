// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-auth.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD_XQxq9DJ98ksheC8xo_MUoL-8lmQ_pE0",
  authDomain: "regi-bad9d.firebaseapp.com",
  projectId: "regi-bad9d",
  storageBucket: "regi-bad9d.appspot.com",
  messagingSenderId: "24632395406",
  appId: "1:24632395406:web:697b8c5c87183a52fc2bdf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

