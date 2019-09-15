import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyA8fZrNonpb41d0R8p0DGX3QxD797_sS70",
  authDomain: "catch-of-the-day-taliaa.firebaseapp.com",
  databaseURL: "https://catch-of-the-day-taliaa.firebaseio.com"
});

const base = Rebase.createClass(firebaseApp.database());

// This is a named export
export { firebaseApp };

// This is a default export
export default base;
