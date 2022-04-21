// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyASeuAYr1h03X0qve5c8lUIsW3n4C9KIMo",
  authDomain: "facebook-clone-ac461.firebaseapp.com",
  projectId: "facebook-clone-ac461",
  storageBucket: "facebook-clone-ac461.appspot.com",
  messagingSenderId: "974089994818",
  appId: "1:974089994818:web:ef99b40fb4e979c5dbe3db",
  measurementId: "G-SSEV64VFDQ"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };