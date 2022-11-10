import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyDIhsRBB5Zo6gg4CgnvtwLaVC-xOvr2e6Q",
  authDomain: "devlinks-a3629.firebaseapp.com",
  projectId: "devlinks-a3629",
  storageBucket: "devlinks-a3629.appspot.com",
  messagingSenderId: "482725018441",
  appId: "1:482725018441:web:4c23d3486083f2beaf3898",
  measurementId: "G-EJVSBGZBQQ"
};

const firebaseApp = initializeApp(firebaseConfig)

const db = getFirestore(firebaseApp)

const auth= getAuth(firebaseApp)

export {db, auth};