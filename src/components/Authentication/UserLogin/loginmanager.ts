import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
// Firebase Configaration
import { firebaseConfig } from "./config.firebase";

// initializing if firebase app not initialized yat.
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
}

export const db = firebase.firestore();


// For company registration
export const registerCompany = ({ company_name, email, phone, website, co_description, password, re_password }: any) => {
  return firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Signed in
      var user = userCredential.user;

      const newObj = {
        co_id: user?.uid,
        company_name,
        email,
        phone,
        website,
        co_description,
        role: { role_name: "New Company", role_id: 101 },
        created_at: "",
        updated_at: ""
      }

      // Sending to database 
      return db.collection('companies').add(newObj).then(data => {
        return { isError: false, message: "Your company registration completed. After approve your company account, we will a email. Please wait for confirmation email." }
      })
        .catch((error) => {
          var errorCode = error.code;
          var errorMessage = error.message;

          return { message: error.message };
        });
    })
}

export const loginComapny = (email: string, password: string) => {
  return firebase.auth().signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Signed in
      var user = userCredential.user;


      return { message:'', co_id: user?.uid };
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;

      return { message: error.message };
    });
}

const signin = (email: string, password: string): any => {
  return firebase.auth().signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Signed in
      var user = userCredential.user;

      const newObj = {
        isSignIn: true,
        name: user?.displayName,
        email: user?.email,
        photo: user?.photoURL,
        uid: user?.uid,
        errMessage: ''
      }

      return newObj;
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;

      return { message: error.message };
    });
}

export default signin;

