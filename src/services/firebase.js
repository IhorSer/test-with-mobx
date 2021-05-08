import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAkEUODGIwRtcxwwWwSPGd5qqF5gS7Z5cY",
    authDomain: "testtasksproject-6d0ce.firebaseapp.com",
    databaseURL: "https://testtasksproject-6d0ce-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "testtasksproject-6d0ce",
    storageBucket: "testtasksproject-6d0ce.appspot.com",
    messagingSenderId: "307602445406",
    appId: "1:307602445406:web:679d9b772beb0daae310cf",
    measurementId: "G-P35SVBSV7E"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const db = firebase.firestore();