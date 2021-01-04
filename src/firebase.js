import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDBFivVt1CoC4t4BFI3SA9Ky7MkQKcA48M",
  authDomain: "linkedin-ae.firebaseapp.com",
  projectId: "linkedin-ae",
  storageBucket: "linkedin-ae.appspot.com",
  messagingSenderId: "1084970656412",
  appId: "1:1084970656412:web:5cb6a7b25d22e816df8359",
};

const firebaseApp = firebase.initializeApp(firebaseConfig); //! connecting the app to the firebase
const db = firebaseApp.firestore(); //! connetcting to the database, getting access to our variable
const auth = firebase.auth(); //! getting login support

export { db, auth };
