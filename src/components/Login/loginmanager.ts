import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
// Firebase Configaration
import { firebaseConfig } from "./config.firebase";

// initializing if firebase app not initialized yat.
if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig)
}

export const db = firebase.firestore();


// For company registration
const registerCompany = (companyData:any):any=>{
  const {email,password} = companyData;
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

    return {message:error.message};
  });
}



const signin = (email:string,password:string):any=>{
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

      return {message:error.message};
    });
}

export default signin;

