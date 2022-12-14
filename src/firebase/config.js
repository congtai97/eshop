import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD8-FO7x2yzx3",
  authDomain: "eshop-fcfc7.firebaseap",
  projectId: "eshop-fcfc7",
  storageBucket: "eshop-fcfc7.appspot",
  messagingSenderId: "7984770451",
  appId: "1:798477045134:web:c1f10ec1f9d3f449a8a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;