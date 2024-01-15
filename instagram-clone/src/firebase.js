import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyCmmbOaQ04faeBgtAfVUlAuVWChUVwqrkM",
  authDomain: "instagram-clone-ab944.firebaseapp.com",
  projectId: "instagram-clone-ab944",
  storageBucket: "instagram-clone-ab944.appspot.com",
  messagingSenderId: "6903270383",
  appId: "1:6903270383:web:fafbcac9bfbec9216c041a"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();