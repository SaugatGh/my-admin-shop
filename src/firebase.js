// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBNSYW3g4fll_zwd5rle8MGBU_QuaaGUm4",
  authDomain: "shop-afc54.firebaseapp.com",
  projectId: "shop-afc54",
  storageBucket: "shop-afc54.appspot.com",
  messagingSenderId: "952193348254",
  appId: "1:952193348254:web:dc61edeb6708b96123818f",
  measurementId: "G-VPVX6T9RDP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


export default app; 