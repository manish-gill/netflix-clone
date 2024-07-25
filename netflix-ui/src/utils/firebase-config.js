import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCSCWopi7QZWMzi97lrdQ_wMQyrSi-4gEs",
  authDomain: "react-netflix-clone-434da.firebaseapp.com",
  projectId: "react-netflix-clone-434da",
  storageBucket: "react-netflix-clone-434da.appspot.com",
  messagingSenderId: "253516502320",
  appId: "1:253516502320:web:8f92c3676641ed360224f5",
  measurementId: "G-B9VJX3XXPV"
};

const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
