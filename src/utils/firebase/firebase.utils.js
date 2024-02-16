// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  collection,
  writeBatch,
  query,
  getDocs,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBa4otkDF4N9MFZRVs_4u5fh6SS6gHs7Ig",
  authDomain: "react-ecom-e293e.firebaseapp.com",
  projectId: "react-ecom-e293e",
  storageBucket: "react-ecom-e293e.appspot.com",
  messagingSenderId: "644164422966",
  appId: "1:644164422966:web:b66e59ecc0b7a2e5d5f797",
  measurementId: "G-GLWC5KS8YH",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const firebaseAnalytics = getAnalytics(firebaseApp);

//Providers

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});
//Firestore/DATABASE
export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
export const signInWithGoogleRedirect = () =>
  signInWithRedirect(auth, provider);

export const db = getFirestore();

export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  const batch = writeBatch(db);
  const collectionRef = collection(db, collectionKey);

  objectsToAdd.forEach((object) => {
    const docRef = doc(collectionRef, object.title.toLowerCase());
    batch.set(docRef, object);
  });

  await batch.commit();
  console.log("done");
};

export const getCategoriesAndDocuments = async () => {
  const collectionRef = collection(db, "collections");
  const q = query(collectionRef);

  const querySnapshot = await getDocs(q);
  return querySnapshot.docs.map((docSnapshot) => docSnapshot.data());
};

export const createUserDocumentFromAuth = async (
  userAuth,
  additionalInfomation = {}
) => {
  if (!userAuth) return;
  const userDocRef = doc(db, "users", userAuth.uid);
  const userSnapshot = await getDoc(userDocRef);

  // If user data does not exist, create user
  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInfomation,
      });
    } catch (error) {
      console.log("Error creating User", error);
    }
  }
  // If user exists, return user
  return userSnapshot;
};

// Create user with email and password
export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (email && password) {
    return await createUserWithEmailAndPassword(auth, email, password);
  } else {
    return;
  }
};

// Sign In User
export const signInUserWithEmailAndPassword = async (email, password) => {
  if (email && password) {
    return await signInWithEmailAndPassword(auth, email, password);
  } else {
    return;
  }
};

export const signOutUser = async () => {
  await signOut(auth);
};

export const onAuthStateChangedListener = (callback) => {
  onAuthStateChanged(auth, callback);
};

export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = onAuthStateChanged(
      auth,
      (userAuth) => {
        unsubscribe();
        resolve(userAuth);
      },
      reject
    );
  });
};
