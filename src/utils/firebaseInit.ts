import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDDxwOc-q0gkgHAjicT6ozfhJJZik1TaUM",
  authDomain: "hallrent-8c73a.firebaseapp.com",
  projectId: "hallrent-8c73a",
  storageBucket: "hallrent-8c73a.firebasestorage.app",
  messagingSenderId: "1028925081682",
  appId: "1:1028925081682:web:75838803fb8126318ff78b",
  measurementId: "G-QRW1FJKS7K"
};

export const firebaseApp = initializeApp(firebaseConfig);