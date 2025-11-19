// src/firebase.js

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBE65Wob_G89rAZeU_XJky9twyYVrsTQMU",
  authDomain: "weddingvitation-449f8.firebaseapp.com",
  projectId: "weddingvitation-449f8",
  storageBucket: "weddingvitation-449f8.firebasestorage.app",
  messagingSenderId: "967080403800",
  appId: "1:967080403800:web:87b66b573451dd6ea2bb2d",
  measurementId: "G-4B75R3XS38",
};

const app = initializeApp(firebaseConfig);

// Exporta lo que tu app va a usar
export const auth = getAuth(app);
export const db = getFirestore(app);
