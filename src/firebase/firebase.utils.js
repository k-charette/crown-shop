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

  firebase.initializeApp(config)

  export const auth = firebase.auth()
  export const firestore = firebase.firestore()

  //setting up google auth
  const provider = new firebase.auth.GoogleAuthProvider()

  provider.setCustomParameters({ prompt: 'select_account' })
  export const signInWithGoogle = () => auth.signInWithPopup(provider)

  export default firebase