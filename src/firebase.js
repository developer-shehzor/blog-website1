import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { getAuth, GoogleAuthProvider } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD8_NHJqpag6KyDOcYm4d3dqWTNSn5F5ys",
  authDomain: "blog-dcc26.firebaseapp.com",
  projectId: "blog-dcc26",
  storageBucket: "blog-dcc26.appspot.com",
  messagingSenderId: "408440321352",
  appId: "1:408440321352:web:a4f01e4a7e870acea86f7d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider()