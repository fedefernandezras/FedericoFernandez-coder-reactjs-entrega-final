
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mascotaplus-a6d97.firebaseapp.com",
  projectId: "mascotaplus-a6d97",
  storageBucket: "mascotaplus-a6d97.appspot.com",
  messagingSenderId: "919501273179",
  appId: "1:919501273179:web:795f25e4224a47cd9de77e"
};


const app = initializeApp(firebaseConfig);

export const db= getFirestore(app)





