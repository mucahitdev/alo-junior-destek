import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyC87zE0mwST6FD7xd2JsycOLTZdB84D8fQ",
    authDomain: "alo-junior-destek.firebaseapp.com",
    projectId: "alo-junior-destek",
    storageBucket: "alo-junior-destek.appspot.com",
    messagingSenderId: "716411778332",
    appId: "1:716411778332:web:adde5756111df6030636d9",
    measurementId: "G-BQRN59BFQ8"
};


const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

export {db}