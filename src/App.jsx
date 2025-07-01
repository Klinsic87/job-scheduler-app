// Full working Job Scheduler UI with Firebase, photo upload, status tracking, and PDF export

import { useEffect, useState } from "react";
import { format } from "date-fns";
import jsPDF from "jspdf";
import { auth, db, storage } from "./firebase-config";
import { onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { collection, addDoc, onSnapshot, query, orderBy, updateDoc, doc } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

// ... rest of App.jsx from canvas (trimmed here for brevity)
