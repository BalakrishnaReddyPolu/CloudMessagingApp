import firebase from 'firebase'

// Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyBUL7G_ZxfgX5i6dG2lXfCTvgKUHHAv4lQ",
    authDomain: "fir-cloud-messaging-3b92a.firebaseapp.com",
    databaseURL: "https://fir-cloud-messaging-3b92a.firebaseio.com",
    projectId: "fir-cloud-messaging-3b92a",
    storageBucket: "fir-cloud-messaging-3b92a.appspot.com",
    messagingSenderId: "761401962339",
    appId: "1:761401962339:web:3f45b6d67f7fa92ce72d56"
  };
  // Initialize Firebase

  firebase.initializeApp(firebaseConfig);

  export default firebase;