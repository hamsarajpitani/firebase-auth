import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDWwVGaHGRQUlFyIqqVcM8sgpNIGLp-u0Y",
    authDomain: "fir-auth-f2628.firebaseapp.com",
    projectId: "fir-auth-f2628",
    storageBucket: "fir-auth-f2628.appspot.com",
    messagingSenderId: "717482955599",
    appId: "1:717482955599:web:9d94960e5891d2d92ceb3a"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebaseApp.auth();  
const db = firebaseApp.firestore();
var provider = new firebase.auth.GoogleAuthProvider();


export {auth,db,provider};
