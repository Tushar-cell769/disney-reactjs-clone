import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDEwaNVLr9J2yBMW6YRE41cgXmj5gyIgSs",
  authDomain: "disneyplus-clone-8e43c.firebaseapp.com",
  projectId: "disneyplus-clone-8e43c",
  storageBucket: "disneyplus-clone-8e43c.appspot.com",
  messagingSenderId: "229068660006",
  appId: "1:229068660006:web:d3041efea0ff03e292f5e7",
  measurementId: "G-E5EWQHLGFT",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
