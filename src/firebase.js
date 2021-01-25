import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCor0C0K6NsRNwUghwXI7TMPkdYfLZG59I",
  authDomain: "messenger-clone-13696.firebaseapp.com",
  projectId: "messenger-clone-13696",
  storageBucket: "messenger-clone-13696.appspot.com",
  messagingSenderId: "898624654154",
  appId: "1:898624654154:web:1db17844f965729115cfb3",
  measurementId: "G-9S74KBWYWG",
};

const app = firebase.initializeApp(firebaseConfig);

const db = app.firestore();

export { db };
