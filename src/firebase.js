import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBuRx4GyCnKlK01WStMlNNRS4R48vCgsGM",
    authDomain: "linkedin-clone-63260.firebaseapp.com",
    projectId: "linkedin-clone-63260",
    storageBucket: "linkedin-clone-63260.appspot.com",
    messagingSenderId: "781798338413",
    appId: "1:781798338413:web:ac590180530272816db464",
    measurementId: "G-X4JBQV535E"
};
  
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };