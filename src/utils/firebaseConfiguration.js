// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDxK_0wa_EnR3vgJgZZ78Wsxil95APB1wY",
  authDomain: "netflixgpt-acde2.firebaseapp.com",
  projectId: "netflixgpt-acde2",
  storageBucket: "netflixgpt-acde2.appspot.com",
  messagingSenderId: "1027591810708",
  appId: "1:1027591810708:web:da0d563bf384dbe0524e81",
  measurementId: "G-2YBNP4NG5H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


export const auth = getAuth();
// These apiKey,authDomain,projectID ...etc are used to connect our app with firebase