import firebase from "firebase"

const firebaseConfig = {
    apiKey: "AIzaSyAAKyDHPbD2linsgZl3YMErAGdD09IFGeA",
    authDomain: "bt3103-week-6-8120b.firebaseapp.com",
    projectId: "bt3103-week-6-8120b",
    storageBucket: "bt3103-week-6-8120b.appspot.com",
    messagingSenderId: "276587921684",
    appId: "1:276587921684:web:64a1f5ebb1b556803fc201",
    measurementId: "G-2920K4J02X"
};
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);
var database = firebase.firestore();
export default database;
