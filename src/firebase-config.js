// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDbPmWgq7N3ZBn15dU6KMfsxrEmfKA0-G8",
  authDomain: "job-scheduler-app.firebaseapp.com",
  projectId: "job-scheduler-app",
  storageBucket: "job-scheduler-app.firebasestorage.app",
  messagingSenderId: "728278845121",
  appId: "1:728278845121:web:a6f9187f7755bd334db640",
  measurementId: "G-19Z18D3PV0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
