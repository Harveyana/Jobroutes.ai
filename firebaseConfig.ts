// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore} from "firebase/firestore";// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBZ-1xJOZwi1RD50fzG7H12rav0MbLqOKI",
  authDomain: "jobroute-58c44.firebaseapp.com",
  projectId: "jobroute-58c44",
  storageBucket: "jobroute-58c44.appspot.com",
  messagingSenderId: "949712068741",
  appId: "1:949712068741:web:772807911c16c68e6989ec",
  measurementId: "G-0G1EHEEXWF"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(app);
export const FIREBASE_DB = getFirestore(app)