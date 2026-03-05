// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyB7ChDMDx9tNdHYwukqLFniepHDOouwuGE",
    authDomain: "netflix-gpt-app-d6bc8.firebaseapp.com",
    projectId: "netflix-gpt-app-d6bc8",
    storageBucket: "netflix-gpt-app-d6bc8.firebasestorage.app",
    messagingSenderId: "790629406948",
    appId: "1:790629406948:web:13039c71634ec9bc8e74f1",
    measurementId: "G-D4SP6BNL3R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


export const auth = getAuth();