// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAxQ20Bwk4vdvG7T9xLUQd7G_PxHq04Pe0",
  authDomain: "block-bets.firebaseapp.com",
  projectId: "block-bets",
  storageBucket: "block-bets.appspot.com",
  messagingSenderId: "266388707044",
  appId: "1:266388707044:web:1e09248f10af1b649f7ef1",
  measurementId: "G-0MLJBSCMKW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default app;