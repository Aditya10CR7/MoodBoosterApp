import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyACGo9oyh6GI4O8I7iuZpuSdOyFj4GiNb4",
  authDomain: "mood-booster-app.firebaseapp.com",
  projectId: "mood-booster-app",
  storageBucket: "mood-booster-app.firebasestorage.app",
  messagingSenderId: "893545877137",
  appId: "1:893545877137:web:12dd80337a1f926d557930",
  measurementId: "G-4HXXG80TTK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = initializeApp(firebaseConfig);
