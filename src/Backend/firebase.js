
import { initializeApp } from "firebase/app";


const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain:  process.env.REACT_APP_AUTH_DOMAIN,
  projectId: "phentai-54ded",
  storageBucket:  process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId:  process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: "1:12964111041:web:90d6736f6990d568246a40",
  measurementId:  process.env.REACT_APP_MEASUREMENT_ID
};


const app = initializeApp(firebaseConfig);

