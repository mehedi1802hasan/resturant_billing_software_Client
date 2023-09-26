// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB-W-RsMNQ8hWlM475XEoCoEINI_Hfgmqw",
  authDomain: "billingresturant.firebaseapp.com",
  projectId: "billingresturant",
  storageBucket: "billingresturant.appspot.com",
  messagingSenderId: "582388360581",
  appId: "1:582388360581:web:97e87e13053405e94c10ec"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;