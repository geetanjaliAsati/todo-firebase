// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBpMh0w2yRexn8qfsGl0DlT4575IzgOLJw",
  authDomain: "todo-app-fb-90656.firebaseapp.com",
  projectId: "todo-app-fb-90656",
  storageBucket: "todo-app-fb-90656.appspot.com",
  messagingSenderId: "1005575988367",
  appId: "1:1005575988367:web:9d0c781e42582dcc9dbcfa",
  measurementId: "G-WTCH1TLZKE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);