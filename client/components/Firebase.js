import firebase from "firebase";

// Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDEXsuNMKL6retgLOHO_K_E8EjUawDYoaY",
  authDomain: "track-19-ae4d5.firebaseapp.com",
  projectId: "track-19-ae4d5",
  storageBucket: "track-19-ae4d5.appspot.com",
  messagingSenderId: "703806945805",
  appId: "1:703806945805:web:dacbeec4c7bb5166147344",
  measurementId: "G-3RX3NJN5LF",
};

// Initialize Firebase
try {
  firebase.initializeApp(firebaseConfig);
} catch (err) {
  if (!/already exists/.test(err.message)) {
    console.error("Firebase initialization error", err.stack);
  }
}

export const auth = firebase.auth();
export default firebase;
