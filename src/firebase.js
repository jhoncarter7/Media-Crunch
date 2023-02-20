
import { initializeApp } from "firebase/app";
import {getStorage} from "firebase/storage"
const firebaseConfig = {
  apiKey: "AIzaSyBNlx6A44zQ4onM499dTDHaIHK93nDAyuM",
  authDomain: "socialmedia-18d90.firebaseapp.com",
  databaseURL: "https://socialmedia-18d90-default-rtdb.firebaseio.com",
  projectId: "socialmedia-18d90",
  storageBucket: "socialmedia-18d90.appspot.com",
  messagingSenderId: "964982747909",
  appId: "1:964982747909:web:e178f2f60db9c762f8fd6c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app)