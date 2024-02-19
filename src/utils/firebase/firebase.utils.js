import { initializeApp } from "firebase/app";
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
import { getStorage, ref, getDownloadURL } from "firebase/storage";
// import SHOP_DATA from "../../shop-data";
import MUSIC_DATA from "../../music_data";
const firebaseConfig = {
  apiKey: "AIzaSyBa4otkDF4N9MFZRVs_4u5fh6SS6gHs7Ig",
  authDomain: "react-ecom-e293e.firebaseapp.com",
  projectId: "react-ecom-e293e",
  storageBucket: "react-ecom-e293e.appspot.com",
  messagingSenderId: "644164422966",
  appId: "1:644164422966:web:b66e59ecc0b7a2e5d5f797",
  measurementId: "G-GLWC5KS8YH",
};

const firebaseApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () =>
  signInWithRedirect(auth, googleProvider);

export const db = getFirestore();

export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  const collectionRef = collection(db, collectionKey);
  const batch = writeBatch(db);

  objectsToAdd.forEach((object) => {
    const docRef = doc(collectionRef, object.title.toLowerCase());
    batch.set(docRef, object);
  });

  await batch.commit();
  console.log("done");
};
// addCollectionAndDocuments("music", MUSIC_DATA);
//GETS PRODUCTS from FIRESTORE
export const getCategoriesAndDocuments = async () => {
  const collectionRef = collection(db, "music");
  const q = query(collectionRef);

  const querySnapshot = await getDocs(q);
  return querySnapshot.docs.map((docSnapshot) => docSnapshot.data());
};

export const createUserDocumentFromAuth = async (
  userAuth,
  additionalInformation = {}
) => {
  if (!userAuth) return;

  const userDocRef = doc(db, "users", userAuth.uid);

  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInformation,
      });
    } catch (error) {
      console.log("error creating the user", error.message);
    }
  }

  return userDocRef;
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await signInWithEmailAndPassword(auth, email, password);
};

export const signOutUser = async () => await signOut(auth);

export const onAuthStateChangedListener = (callback) =>
  onAuthStateChanged(auth, callback);

export const downloadFromFirebase = async (fileName) => {
  const storage = getStorage();
  const gsRef = ref(storage, fileName);
  await getDownloadURL(gsRef)
    .then((url) => {
      const link = document.createElement("a");
      link.href = url;
      link.target = "_blank";
      link.download = url;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    })
    .catch((error) => {
      switch (error.code) {
        case "storage/object-not-found":
          console.log("FILE DOES NOT EXIST", error);
          break;
        case "storage/unauthorized":
          console.log("UNAUTHORIZED", error);
          break;
        case "storage/canceled":
          console.log("STORAGE CANCELLED", error);
          break;

        case "storage/unknown":
          break;
      }
    });
};
