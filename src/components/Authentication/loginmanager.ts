import { MD5 } from "crypto-js";
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import moment from "moment";
// Firebase Configaration
import { firebaseConfig } from "./UserLogin/config.firebase";

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
      return db.collection('companies').doc(user?.uid).set(newObj).then(data => {
        return { isError: false, message: "Your company registration completed. After approval, we will send you a email. Please wait for confirmation email." }
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


      return { message: '', co_id: user?.uid };
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;

      return { message: error.message };
    });
}

// For Activate System Admin
export const systemAdminRegistration = (email: any, password: string, userData: any) => {
  return firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Signed in
      var user = userCredential.user;

      const newObj = {
        id: user?.uid,
        role: "system-admin",
        created_at: "",
        updated_at: "",
        ...userData
      }

      // Sending to database 
      return db.collection('system_admins').doc(user?.uid).set(newObj).then(data => {
        return { isError: false, message: "Your account has been activated successfully. You can login now using your cridential." }
      })
        .catch((error) => {
          var errorCode = error.code;
          var errorMessage = error.message;

          return { isError: true, message: error.message }
        });
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;

      return { isError: true, message: error.message }
    });
}

export const systemAdminLogin = (email: string, password: string) => {
  return firebase.auth().signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Signed in
      var user = userCredential.user;


      return { message: '', id: user?.uid };
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;

      return { message: error.message };
    });
}
