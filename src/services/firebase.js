import firebase from 'firebase/app';
import 'firebase/auth';
export const firebaseConfig = {
    apiKey: "AIzaSyAz4cecT3HvDHlcLz-wCNyOOClhjC_6Jio",
    authDomain: "tunt-16c2b.firebaseapp.com",
    databaseURL: "https://tunt-16c2b.firebaseio.com",
    projectId: "tunt-16c2b",
    storageBucket: "tunt-16c2b.appspot.com",
    messagingSenderId: "1038660838040",
    appId: "1:1038660838040:web:1afe957768c354c19ba6ed",
    measurementId: "G-GS6LJMLP6R"
}

export function initFirebase() {
    if (!firebase.apps.length) {
      // Initialize Firebase
      firebase.initializeApp(firebaseConfig);
    }
  }