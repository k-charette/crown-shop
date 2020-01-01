import firebase from "firebase/app"

import "firebase/firestore"
import "firebase/auth"

const config = {
    apiKey: "AIzaSyD4chhkn2_br9oxiLK3TZs_eAO0XkqAAXY",
    authDomain: "crown-db-5d7e2.firebaseapp.com",
    databaseURL: "https://crown-db-5d7e2.firebaseio.com",
    projectId: "crown-db-5d7e2",
    storageBucket: "crown-db-5d7e2.appspot.com",
    messagingSenderId: "183804602927",
    appId: "1:183804602927:web:a0155d906b47217a76f4da",
    measurementId: "G-6YKC3CWKNZ"
  }

  export const createUserProfileDocument = async (userAuth, additionalData) => {
      if(!userAuth) return;

      const userRef = firestore.doc(`users/${userAuth.uid}`)

      const snapShot = await userRef.get()
      
      if (!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date()

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console.log('Error creating user', error.message) 
        }
      }
      return userRef;
  }

  firebase.initializeApp(config)

  export const auth = firebase.auth()
  export const firestore = firebase.firestore()

  //setting up google auth
  const provider = new firebase.auth.GoogleAuthProvider()

  provider.setCustomParameters({ prompt: 'select_account' })
  export const signInWithGoogle = () => auth.signInWithPopup(provider)

  export default firebase