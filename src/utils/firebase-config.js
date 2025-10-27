// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
   apiKey: "AIzaSyBTO5umk5YO_COvZCXnjduJuuG5uVAvnac",
   authDomain: "shop-a1a2d.firebaseapp.com",
   projectId: "shop-a1a2d",
   storageBucket: "shop-a1a2d.firebasestorage.app",
   messagingSenderId: "67142703051",
   appId: "1:67142703051:web:e2a91e845ad52d8052084e"
};

// Initialize Firebase
const firebaseAppConfig = initializeApp(firebaseConfig);

export default firebaseAppConfig;