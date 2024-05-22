import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth/web-extension";

const firebaseConfig = {
    apiKey: "AIzaSyAj0ghGF7Q8BRJ-IlPhS0WJfMDW1lV3ruk",
    authDomain: "critique-corner.firebaseapp.com",
    projectId: "critique-corner",
    storageBucket: "critique-corner.appspot.com",
    messagingSenderId: "520499963372",
    appId: "1:520499963372:web:64e4d8405b2bf43d014cc9"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;