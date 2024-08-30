// Import the functions you need from the SDKs you need
// import { auth } from "firebase";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// import { auth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBJK8iCkIpJ1Lxj7o8BdEmLLvXKvBKWTcU",
  authDomain: "netflixchatgpt-623ec.firebaseapp.com",
  projectId: "netflixchatgpt-623ec",
  storageBucket: "netflixchatgpt-623ec.appspot.com",
  messagingSenderId: "576048152952",
  appId: "1:576048152952:web:494b66c9fd8ae14f66888d",
  measurementId: "G-G575W3F73X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();