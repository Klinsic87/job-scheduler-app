
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


const app = initializeApp({
    apiKey: "AIzaSyDbPmWgq7N3ZBn15dU6KMfsxrEmfKA0-G8",
    authDomain: "job-scheduler-app.firebaseapp.com",
    projectId: "job-scheduler-app",
    storageBucket: "job-scheduler-app.firebasestorage.app",
    messagingSenderId: "728278845121",
    appId: "1:728278845121:web:a6f9187f7755bd334db640",
    measurementId: "G-19Z18D3PV0"
  });
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
