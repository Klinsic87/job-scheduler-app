// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDbPmWgq7N3ZBn15dU6KMfsxrEmfKA0-G8",
  authDomain: "job-scheduler-app.firebaseapp.com",
  projectId: "job-scheduler-app",
  storageBucket: "job-scheduler-app.appspot.com", // fixed here
  messagingSenderId: "728278845121",
  appId: "1:728278845121:web:a6f9187f7755bd334db640",
  measurementId: "G-19Z18D3PV0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Only initialize analytics if running in browser
let analytics;
if (typeof window !== "undefined") {
  analytics = getAnalytics(app);
}

export { app, analytics };
