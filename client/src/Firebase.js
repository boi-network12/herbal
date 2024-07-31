// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { collection, getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD7--2OnwGSv9i8RMP9uqFnJmB_hflYSc0",
  authDomain: "herbs-80e44.firebaseapp.com",
  projectId: "herbs-80e44",
  storageBucket: "herbs-80e44.appspot.com",
  messagingSenderId: "923989236032",
  appId: "1:923989236032:web:563e5fc35238e427b702a5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export const userCollectionRef = collection(db, 'users');

export const newsCollectionRef = collection(db, 'news');
export const productsCollectionRef = collection(db, 'products');
export const reportCollectionRef = collection(db, 'reports');


export {auth, db, storage, app};

