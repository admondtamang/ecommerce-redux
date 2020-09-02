import firebase from "firebase/app";

// for db
import "firebase/firestore";
// for authentication
import "firebase/auth";

const config = {
  apiKey: "AIzaSyA6ytUnHvTZzSfhBaLJea1qdHun4P68uTI",
  authDomain: "luxxe-db.firebaseapp.com",
  databaseURL: "https://luxxe-db.firebaseio.com",
  projectId: "luxxe-db",
  storageBucket: "luxxe-db.appspot.com",
  messagingSenderId: "880577251035",
  appId: "1:880577251035:web:6cd97b89fd9d13a5a86efe",
  measurementId: "G-26WR6CZ50J"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createAt,
        ...additionalData
      });
    } catch (error) {
      console.log("Error creating user", error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
