
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAMOQX8xd0k50ZJcqYP2WnQO84RG7gXGbs",
  authDomain: "ecotiendaoscar.firebaseapp.com",
  projectId: "ecotiendaoscar",
  storageBucket: "ecotiendaoscar.appspot.com",
  messagingSenderId: "757988188441",
  appId: "1:757988188441:web:6499cb79760874139d6588"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db= getFirestore(app)

