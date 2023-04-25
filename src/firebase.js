import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDhRwywV8Z2cEcR4z-wt9nnqyFngZGyIoA",
  authDomain: "authy-14422.firebaseapp.com",
  projectId: "authy-14422",
  storageBucket: "authy-14422.appspot.com",
  messagingSenderId: "955113671401",
  appId: "1:955113671401:web:7c310e5406cf9e2a307e78"
})

const db = firebaseApp.firestore()

const auth = firebase.auth()

export { db, auth }
