// config.js - Boujee Sports Firebase Core Module
import { initializeApp } from 'https://www.gstatic.com/firebasejs/12.18.0/firebase-app.js';
import { 
  getAuth, 
  signInWithEmailAndPassword, 
  createUserWithEmailAndPassword, 
  onAuthStateChanged 
} from 'https://www.gstatic.com/firebasejs/12.18.0/firebase-auth.js';

// Firebase Project Credentials
const firebaseConfig = {
  apiKey: "AIzaSyDtzlIfae9EjRZyaZZfndKTBFMuM8AJJcw",
  authDomain: "boujee-sports.firebaseapp.com",
  projectId: "boujee-sports",
  storageBucket: "boujee-sports.firebasestorage.app",
  messagingSenderId: "346736321644",
  appId: "1:346736321644:web:342d0bb713657bb2886449"
};

// Initialize Firebase App
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Explicitly assign properties to global window scope so non-module inline scripts can access them
window.app = app;
window.auth = auth;
window.signInWithEmailAndPassword = signInWithEmailAndPassword;
window.createUserWithEmailAndPassword = createUserWithEmailAndPassword;
window.onAuthStateChanged = onAuthStateChanged;

// Export for ES Module usage
export { app, auth, signInWithEmailAndPassword, createUserWithEmailAndPassword, onAuthStateChanged };
