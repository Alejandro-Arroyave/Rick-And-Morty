import app from "firebase/app";
import "firebase/auth";
import "firebase/database";

var firebaseConfig = {
  apiKey: "AIzaSyCmW0jabJQTxdFr857r-icIP9Fs9bXBYRk",
  authDomain: "rickandmorty-595ab.firebaseapp.com",
  databaseURL: "https://rickandmorty-595ab.firebaseio.com",
  projectId: "rickandmorty-595ab",
  storageBucket: "rickandmorty-595ab.appspot.com",
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

  getFavoriteCharacters = () =>
    this.db
      .ref("/users/" + this.auth.currentUser.uid + "/favoriteCharacters/")
      .once("value");

  setNewCharacter = characterId =>
    this.db.ref("/users/" + this.auth.currentUser.uid + "/favoriteCharacters/").set([characterId])
    

  setNewComment = (characterId, commentText) => {
    var newCommentKey = this.db
      .ref()
      .child("/comments/" + characterId)
      .push().key;
    var updates = {};
    updates["/comments/" + characterId + "/" + newCommentKey] = commentText;
    return this.db.ref().update(updates);
  };

  getComments = characterId => this.db.ref("/comments/" + characterId);
}

export default Firebase;
