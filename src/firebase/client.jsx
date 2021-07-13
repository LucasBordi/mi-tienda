import firebase from "firebase/app";
import "@firebase/firestore";

const firebaseConfig = firebase.initializeApp({
    apiKey: "AIzaSyDbWy0-kagDql5SDX63i72uho3m46_mV38",
    authDomain: "e-commer-lucas.firebaseapp.com",
    projectId: "e-commer-lucas",
    storageBucket: "e-commer-lucas.appspot.com",
    messagingSenderId: "660153385468",
    appId: "1:660153385468:web:d7c5afc97fed2969dcb279"
});

export const getFirebase = () => {
    return firebaseConfig
}

// Funciones de firebase
export const getFirestore = () => {
    return firebase.firestore(firebaseConfig);
}
