import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAD_oI0Zkl8b05p7cQt1WipmxyWEuXGhxA",
  authDomain: "lifecare-94133.firebaseapp.com",
  projectId: "lifecare-94133",
  storageBucket: "lifecare-94133.appspot.com",
  messagingSenderId: "438689915589",
  appId: "1:438689915589:web:805e65e1a6d50220b1c6ac",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
