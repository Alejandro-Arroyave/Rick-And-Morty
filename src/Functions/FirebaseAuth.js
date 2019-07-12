// import React, { useState, useEffect } from "react";
// import * as firebase from "firebase/app";
// import "firebase/auth";
// import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
// import firebasee from "firebase";

// var firebaseConfig = {
//   apiKey: "AIzaSyCmW0jabJQTxdFr857r-icIP9Fs9bXBYRk",
//   authDomain: "rickandmorty-595ab.firebaseapp.com",
//   databaseURL: "https://rickandmorty-595ab.firebaseio.com",
//   projectId: "rickandmorty-595ab",
//   storageBucket: "",
//   messagingSenderId: "957630051317",
//   appId: "1:957630051317:web:a869158ec5c7b334"
// };
// // Initialize Firebase
// firebase.initializeApp(firebaseConfig);

// const uiConfig = {
//   signInFlow: "popup",
//   signInSuccessUrl: "/",
//   signInOptions: [
//     firebase.auth.EmailAuthProvider.PROVIDER_ID,
//     firebase.auth.FacebookAuthProvider.PROVIDER_ID
//   ]
// };

// export function AuthComponent() {
//   // const [isSignedIn, setIsSignedIn] = useState(false);

//   // useEffect(() => {
//   //   this.unregisterAuthObserver = firebasee.auth()
//   //     .onAuthStateChanged(user => this.setState({ isSignedIn: !!user }));

//   //   return () => {
//   //     this.unregisterAuthObserver();
//   //   };
//   // });
//   return (
//     <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebasee.auth()} />
//   );
// }

// function Error(code, message) {
//   this.code = code;
//   this.message = message;
// }

// function verifyPassword(password, password2) {
//   return password === password2;
// }

// export function Signin(email, password, password2) {
//   let err = null;
//   if (verifyPassword(password, password2)) {
//     var ss = firebase
//       .auth()
//       .createUserWithEmailAndPassword(email, password)
//       .catch(function(error) {
//         // console.log("catch de signin");
//         err = error;
//         // console.log(err)
//         alert(error.message);
//         throw new Error(error.code, error.message);
//       });
//     console.log(ss);
//   } else {
//     throw new Error(
//       "The passwords doesn't match",
//       "The passwords must be the same to be able confirm te register form"
//     );
//   }
//   console.log(err);
//   if (err != null) {
//     throw new Error(err.code, err.message);
//   }
// }

// export function Login(email, password) {
//   firebase
//     .auth()
//     .signInWithEmailAndPassword(email, password)
//     .catch(function(error) {
//       // Handle Errors here.
//       var errorCode = error.code;
//       var errorMessage = error.message;
//       console.log(errorCode);
//       console.log(errorMessage);
//       throw new Error(error.code, error.message);
//       // ...
//     });
// }

// export function Logout() {
//   firebase.auth().signOut();
// }
