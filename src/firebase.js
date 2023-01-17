import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_API_AUTHDOMAIN,
  projectId: process.env.REACT_APP_API_PROJECTOD,
  storageBucket: process.env.REACT_APP_API_STORAGEBUCKET,
  messagingSenderId: process.env.REACT_APP_API_MESSAGINGSENDERID,
  appId: process.env.REACT_APP_API_APPID,
  measurementId: process.env.REACT_APP_API_MEASUREMENTID
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);

export default app;