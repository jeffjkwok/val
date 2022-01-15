import { initializeApp } from "firebase/app";
import { getFirestore } from " firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDeMyn2szrxuAL1gBjVmU8151ELwu8uR_s",
  authDomain: "valo-test.firebaseapp.com",
  projectId: "valo-test",
  storageBucket: "valo-test.appspot.com",
  messagingSenderId: "346806004834",
  appId: "1:346806004834:web:e214b6445679560406753b",
  measurementId: "G-69FQ0WHLP5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
