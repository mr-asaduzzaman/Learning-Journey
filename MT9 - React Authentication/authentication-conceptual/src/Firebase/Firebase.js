// Import the functions you need from the SDKs
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCgsF_B5BO3zYe4cFhSNLXpNA4EEGzjB8E",
  authDomain: "authentication-conceptua-a82bf.firebaseapp.com",
  projectId: "authentication-conceptua-a82bf",
  storageBucket: "authentication-conceptua-a82bf.appspot.com", // Ensure this is correct
  messagingSenderId: "440629733774",
  appId: "1:440629733774:web:b39e1bb11d06b7c0e75cdf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
