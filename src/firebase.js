import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

// Placeholder configuration - should be replaced with actual Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyD-PLACEHOLDER",
  authDomain: "shiny-media-placeholder.firebaseapp.com",
  projectId: "shiny-media-placeholder",
  storageBucket: "shiny-media-placeholder.appspot.com",
  messagingSenderId: "1234567890",
  appId: "1:1234567890:web:abcdef123456"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
