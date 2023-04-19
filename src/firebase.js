// import firebase from "firebase/app";
// import "firebase/auth";
// import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// import { getFirestore } from 'firebase/firestore';
// import firebase from 'firebase';

import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";


const firebaseConfig = {

    apiKey: "AIzaSyBfUDZ6IT3Cj1F9MwDgCALSzP3XBJRmVLc",
  
    authDomain: "communitybazaar-a64ba.firebaseapp.com",
  
    projectId: "communitybazaar-a64ba",
  
    storageBucket: "communitybazaar-a64ba.appspot.com",
  
    messagingSenderId: "102225481889",
  
    appId: "1:102225481889:web:24574e393262fc706920e0",
  
  };
  const app = initializeApp(firebaseConfig);
  console.log("............working")
//   const analytics = getAnalytics(app);

export const authentication = getAuth();
