// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyA2j2POgYcjugzcZyGWHCHmFOk5saF7r-s",
  authDomain: "weeat-ce620.firebaseapp.com",
  projectId: "weeat-ce620",
  storageBucket: "weeat-ce620.appspot.com",
  messagingSenderId: "580595703671",
  appId: "1:580595703671:web:9beb27a7309b3e9f190b72",
  measurementId: "G-ZQ4BCP2EZV",
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);