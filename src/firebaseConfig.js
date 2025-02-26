// Import Firebase modules
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// 🔹 Your Firebase config (Get this from Firebase Console)
const firebaseConfig = {
    apiKey: "AIzaSyDMzIaf4cYMSJe-sjwLza4IZUOYpo26bSc",
    authDomain: "businesscard-ac1ff.firebaseapp.com",
    projectId: "businesscard-ac1ff",
    storageBucket: "businesscard-ac1ff.firebasestorage.app",
    messagingSenderId: "201272385402",
    appId: "1:201272385402:web:dce71d421a0a2b068780c3",
    measurementId: "G-GF1QTMQX4Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };