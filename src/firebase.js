import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"


const firebaseConfig = {
  apiKey: "AIzaSyACokoZnJtqs6xH39MrnSIrlqDWtNrz1rA",
  authDomain: "my-portfoilo-793cf.firebaseapp.com",
  projectId: "my-portfoilo-793cf",
  storageBucket: "my-portfoilo-793cf.appspot.com",
  messagingSenderId: "767207943999",
  appId: "1:767207943999:web:c24eda90df75aef4566d8a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)