import firebase from "firebase";

const firebasApp = firebase.initializeApp({
    apiKey: "AIzaSyDEFG1ehWJVUp9_TI08RhxWWT0MrGIb1F4",
    authDomain: "complaintapp-e3286.firebaseapp.com",
    projectId: "complaintapp-e3286",
    storageBucket: "complaintapp-e3286.appspot.com",
    messagingSenderId: "390296604358",
    appId: "1:390296604358:web:454a20853e83ff412c91c7"
})

const db = firebasApp.firestore();
export const auth = firebasApp.auth();

export default db;