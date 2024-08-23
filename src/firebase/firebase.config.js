// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBMyAqTlWeV0Jt2W_110z1Kf17Su2hVHr8",
  authDomain: "bistro-boss-resturent-4193d.firebaseapp.com",
  projectId: "bistro-boss-resturent-4193d",
  storageBucket: "bistro-boss-resturent-4193d.appspot.com",
  messagingSenderId: "668467241203",
  appId: "1:668467241203:web:4cd63d7ba11c7d68c6d786"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
