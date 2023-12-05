import { initializeApp } from "firebase/app"
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyAFm-r1NAnjNyK11rUXSIMIKXP0YOdNFUU",
    authDomain: "fb-restaurante.firebaseapp.com",
    projectId: "fb-restaurante",
    storageBucket: "fb-restaurante.appspot.com",
    messagingSenderId: "316255572839",
    appId: "1:316255572839:web:42340b74493cc8fb7095c2"
}

initializeApp(firebaseConfig)

export const db = getFirestore()