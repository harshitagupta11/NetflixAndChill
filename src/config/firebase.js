import firebase from 'firebase';


const firebaseConfig = {
    apiKey: "AIzaSyDpx8X233nYIM8mp8mEKyEEYJ4KFOdobrg",
    authDomain: "neftlixandchill.firebaseapp.com",
    projectId: "neftlixandchill",
    storageBucket: "neftlixandchill.appspot.com",
    messagingSenderId: "462404913103",
    appId: "1:462404913103:web:9c796c002a09672b1934ba",
    measurementId: "G-0ZH5LT08MJ"
  };
const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore();
const auth = firebase.auth();

export {auth};
export default db;