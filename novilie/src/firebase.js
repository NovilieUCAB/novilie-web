import firebase from 'firebase'

var config = {
   apiKey: "AIzaSyBh1ZJL14SGcjmmoufontcdn-UNgqhgXkU",
   authDomain: "novilie.firebaseapp.com",
   databaseURL: "https://novilie.firebaseio.com",
   projectId: "novilie",
   storageBucket: "novilie.appspot.com",
   messagingSenderId: "701221106259"
 };

 const firebaseApp = firebase.initializeApp(config)
 export default firebaseApp
 