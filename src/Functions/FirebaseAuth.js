import * as firebase from "firebase/app";
import "firebase/auth";

var firebaseConfig = {
  apiKey: "AIzaSyCmW0jabJQTxdFr857r-icIP9Fs9bXBYRk",
  authDomain: "rickandmorty-595ab.firebaseapp.com",
  databaseURL: "https://rickandmorty-595ab.firebaseio.com",
  projectId: "rickandmorty-595ab",
  storageBucket: "",
  messagingSenderId: "957630051317",
  appId: "1:957630051317:web:a869158ec5c7b334"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

function Error(code, message) {
  this.code = code;
  this.message = message;
}

function verifyPassword(password, password2) {
  return password === password2;
}

export function Signin(email, password, password2) {
  if (verifyPassword(password, password2)) {
    
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .catch(function(error) {
        console.log("catch de signin");
        throw new Error(error.code, error.message);
      });
  } else {
    throw new Error(
      "The passwords doesn't match",
      "The passwords must be the same to be able confirm te register form"
    );
  }
}

export function Login(email, password) {
  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorCode);
      console.log(errorMessage);
      throw new Error(error.code, error.message);
      // ...
    });
}

export function Logout() {
  firebase
    .auth()
    .signOut()
    .then(function() {
      //return error = null;
    })
    .catch(function(error) {
      // An error happened.
      //return error;
    });
}
