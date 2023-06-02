import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDWeXVhjZyzztKeAWnOd2D20HueZTt1z7M",
  authDomain: "blog-auth-app-2d67f.firebaseapp.com",
  projectId: "blog-auth-app-2d67f",
  storageBucket: "blog-auth-app-2d67f.appspot.com",
  messagingSenderId: "275709863788",
  appId: "1:275709863788:web:70d18bbe87dba98d0e7549",
};

initializeApp(firebaseConfig);

const auth = getAuth();

export { auth };
