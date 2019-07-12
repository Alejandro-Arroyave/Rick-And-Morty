import app from "firebase/app";
import "firebase/auth";
import "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCmW0jabJQTxdFr857r-icIP9Fs9bXBYRk",
  authDomain: "rickandmorty-595ab.firebaseapp.com",
  databaseURL: "https://rickandmorty-595ab.firebaseio.com",
  projectId: "rickandmorty-595ab",
  storageBucket: "",
  messagingSenderId: "957630051317",
  appId: "1:957630051317:web:a869158ec5c7b334"
};

class Firebase {
  constructor() {
    app.initializeApp(firebaseConfig);
    this.auth = app.auth();
    this.db = app.database();
  }

  doCreateUserWithEmailAndPassword = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password);

  doSignInWithEmailAndPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);

  doSignOut = () => {
    this.auth.signOut();
  };

  doPasswordReset = email => this.auth.sendPasswordResetEmail(email);

  doPasswordUpdate = password => this.auth.currentUser.updatePassword(password);

  //Firebase Database

  user = uid => this.db.ref(`users/${uid}`);

  users = () => this.db.ref("users");

  writeFavoritesData = favorites => {
    this.db.ref("favorites").set(favorites);
  };

  readFavoritesData = () => {
    var favorites = null;
    var path = this.db.ref("favorites");
    path.on("value", snapshot => {
      favorites = snapshot.val();
    });
    console.log(favorites)
    return favorites;
  };
}

export default Firebase;
