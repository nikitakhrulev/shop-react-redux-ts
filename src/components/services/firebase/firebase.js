// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDRz5VIls5jtF8H-pZAEP2A31Dv4sd8B0c",
  authDomain: "shop-react-redux-ts.firebaseapp.com",
  databaseURL: "https://shop-react-redux-ts-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "shop-react-redux-ts",
  storageBucket: "shop-react-redux-ts.appspot.com",
  messagingSenderId: "670513338350",
  appId: "1:670513338350:web:ca59508a3511966ceea0ff"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth }