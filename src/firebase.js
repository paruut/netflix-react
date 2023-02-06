// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBO8czgzxHQHSkR3SYD-Mks92fNB_cwlCI',
  authDomain: 'netflix-react-8b3b4.firebaseapp.com',
  projectId: 'netflix-react-8b3b4',
  storageBucket: 'netflix-react-8b3b4.appspot.com',
  messagingSenderId: '656680681668',
  appId: '1:656680681668:web:b5dddd87dc3efa3d7b4991',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

