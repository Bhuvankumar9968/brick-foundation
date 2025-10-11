// Import Firebase functions
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

// Firebase configuration (your values)
const firebaseConfig = {
  apiKey: "AIzaSyCFer8rBI9eVeDzop3iUc3UNoi_Tn9HAJY",
  authDomain: "react-form-project-bbb92.firebaseapp.com",
  projectId: "react-form-project-bbb92",
  storageBucket: "react-form-project-bbb92.firebasestorage.app",
  messagingSenderId: "790728107639",
  appId: "1:790728107639:web:7a4e42ebe2f7fb0f14c872",
  measurementId: "G-Q70CWEZQEP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firestore
const db = getFirestore(app);

// Export Firestore for use in other components
export { db };
