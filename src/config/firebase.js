import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyB7iHD2Zy1wxaTIJuH_zfDNB2ajgdAgDcI",
  authDomain: "tech-support-f8c27.firebaseapp.com",
  projectId: "tech-support-f8c27",
  storageBucket: "tech-support-f8c27.appspot.com",
  messagingSenderId: "731775679123",
  appId: "1:731775679123:web:YOUR_APP_ID_HERE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Get Firebase services
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);

export default app; 