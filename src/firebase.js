import firebase from "firebase";

const firebaseApp = firebase.initializeApp({

    apiKey: "AIzaSyBhwZvKSVX23CKMvOrgYI39xm9zS3_XI94",
    authDomain: "instagram-clone-react-7fea6.firebaseapp.com",
    databaseURL: "https://instagram-clone-react-7fea6.firebaseio.com",
    projectId: "instagram-clone-react-7fea6",
    storageBucket: "instagram-clone-react-7fea6.appspot.com",
    messagingSenderId: "10043088274",
    appId: "1:10043088274:web:797dc645c494bec93e754b",
    measurementId: "G-2V5D9C7SF8"
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export {db, auth, storage};
