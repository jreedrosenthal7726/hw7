const firebase = require("firebase/app")
require("firebase/firestore")

const firebaseConfig = {
  apiKey: "AIzaSyDHM4h-8w_2UBQQjZ_lg6istyMz8UfKcaM",
  authDomain: "kiei-451-ac8c8.firebaseapp.com",
  projectId: "kiei-451-ac8c8",
  storageBucket: "kiei-451-ac8c8.appspot.com",
  messagingSenderId: "523480377034",
  appId: "1:523480377034:web:4040a103b0f53edeceb633"
}

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
}

module.exports = firebase