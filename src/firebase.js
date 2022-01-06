import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBPN1ilfrzqhfQtb8Z5qxvb74lioCxWJ-M",
  authDomain: "fir-react-tutorial-38f07.firebaseapp.com",
  projectId: "fir-react-tutorial-38f07",
  storageBucket: "fir-react-tutorial-38f07.appspot.com",
  messagingSenderId: "549189214477",
  appId: "1:549189214477:web:caef4d6ebbec2d68c71044",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
