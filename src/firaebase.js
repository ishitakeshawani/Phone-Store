import firebase from "firebase/app";
import "firebase/auth";

const app = firebase.initializeApp({
    apiKey: "AIzaSyC6TXgEU69czCKddOZ2DMkT98WWjm7XDkQ",
    authDomain: "authentication-test-da382.firebaseapp.com",
    projectId: "authentication-test-da382",
    storageBucket: "authentication-test-da382.appspot.com",
    messagingSenderId: "810667155836",
    appId: "1:810667155836:web:0ee24c078c851ad6cbc4f9",
    measurementId: "G-HL0V22ZHXW"
})

export const auth = app.auth();
export default app;