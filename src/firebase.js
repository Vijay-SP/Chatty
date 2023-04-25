import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDUQgIEBu_PhwWQn5bYWzW39rNJRO8eyK8",
    authDomain: "pizza-d9b3e.firebaseapp.com",
    projectId: "pizza-d9b3e",
    storageBucket: "pizza-d9b3e.appspot.com",
    messagingSenderId: "369038231274",
    appId: "1:369038231274:web:8b8c35fa8341e00f583993"
})

const db = firebaseApp.firestore()

const auth = firebase.auth()

export { db, auth }