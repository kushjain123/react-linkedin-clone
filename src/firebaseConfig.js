// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAzBm03LGfyhELAgVGiGOy-cHxEOjV4Fjk",
  authDomain: "react-linkedin-clone-33943.firebaseapp.com",
  projectId: "react-linkedin-clone-33943",
  storageBucket: "react-linkedin-clone-33943.appspot.com",
  messagingSenderId: "162653679690",
  appId: "1:162653679690:web:48c0ed54862ed3f4eeb6b3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth, app };
