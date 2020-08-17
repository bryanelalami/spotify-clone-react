import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDhpppNXK4zpZiDNcWeX2x0CG2ljHaFwXI",
  authDomain: "spotify-clone-2256a.firebaseapp.com",
  databaseURL: "https://spotify-clone-2256a.firebaseio.com",
  projectId: "spotify-clone-2256a",
  storageBucket: "spotify-clone-2256a.appspot.com",
  messagingSenderId: "610673286809",
  appId: "1:610673286809:web:2ed229065fde6a405ea208",
  measurementId: "G-3GZCPXCHP1",
});
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
