
import{FacebookAuthProvider, GoogleAuthProvider} from 'firebase/auth';
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyDP6Snsgv5jc_oh6ZfWefvHfwzURjDbB3c",
  authDomain: "weather-app-9727f.firebaseapp.com",
  projectId: "weather-app-9727f",
  storageBucket: "weather-app-9727f.appspot.com",
  messagingSenderId: "234171661642",
  appId: "1:234171661642:web:58a292be3741be045e55b3"
};



const app = initializeApp(firebaseConfig);
const google = new GoogleAuthProvider();
const Facebook = new FacebookAuthProvider();
const db = getFirestore();

export{
    app,
    google,
    Facebook,
    db
}
