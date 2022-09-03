import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCPVExP4QGdisSQAwO89gpR3uLl2euIZUc",
  authDomain: "full-stack-project-2.firebaseapp.com",
  projectId: "full-stack-project-2",
  storageBucket: "full-stack-project-2.appspot.com",
  messagingSenderId: "2585077636",
  appId: "1:2585077636:web:79929f882991a46a159fd1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth ;