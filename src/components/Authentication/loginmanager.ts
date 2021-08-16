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

// Local Storage management
export const saveToLS = (tokenName: string, data: any) => {
  localStorage.setItem(tokenName, JSON.stringify(data));
}

export const getDataFromLS = (tokenName: string) => {
  let data = localStorage.getItem(tokenName);
  if (data) {
    let userData = JSON.parse(data);
    return userData
  }
}

export const removeDataFromLS = (tokenName: string) => {
  localStorage.removeItem(tokenName);
}

// ! company data
export const getCompanyInfo = (companyId: string) => {
  db.collection('companies').doc(companyId).get().then((info) => {
    console.log(info.data());

  })
    .catch((error) => {
      console.log(error);

    })
}

// company data
export const getUserInfo = (userId: string) => {
  return db.collection('users').doc(userId).get().then((info) => {
    return info.data()
  })
    .catch((error) => {
      console.log(error);

    })
}

// For company registration
export const registerCompany = ({ company_name, email, phone, website, co_description, password, re_password }: any) => {
  return firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Signed in
      var user = userCredential.user;

      const newObj = {
        company_name,
        email,
        phone,
        website,
        co_description,
        created_at: "",
        updated_at: ""
      }

      // Sending to database 
      return db.collection('companies').add(newObj).then((data: any) => {
        console.log(data._delegate.id);
        const userData = {
          id: user?.uid,
          address: "",
          created_at: "",
          created_by: "",
          co_id: data._delegate.id,
          email,
          name: company_name,
          phone,
          photoURL: "",
          role: "company-admin",
          updated_at: ""
        }
        return db.collection('users').doc(user?.uid).set(userData).then(info => {
          return { isError: false, message: "Your company registration completed. You can login now" }
        })

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


      return { message: '', id: user?.uid };
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;

      return { message: error.message };
    });
}

// For activating user account
export const userRegistration = (email: any, password: string, userData: any) => {
  return firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Signed in
      var user = userCredential.user;

      const newObj = {
        id: user?.uid,
        role: "user",
        created_at: "",
        updated_at: "",
        ...userData
      }

      // Sending to database 
      return db.collection('users').doc(user?.uid).set(newObj).then(data => {
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
