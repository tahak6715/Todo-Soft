// Import the functions you need from the SDKs you need

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";

import { getDatabase } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-database.js";

import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-auth.js";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {

  apiKey: "AIzaSyBKua95ydtA8ljxARrBYNXqRZZxVqJYuCM",

  authDomain: "todoapp-68e30.firebaseapp.com",

  databaseURL: "https://todoapp-68e30-default-rtdb.firebaseio.com",

  projectId: "todoapp-68e30",

  storageBucket: "todoapp-68e30.appspot.com",

  messagingSenderId: "908723087251",

  appId: "1:908723087251:web:53d082f29da09bf5afaa66",

  measurementId: "G-5TR371M3YY"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);




const database = getDatabase(app);
 
const auth = getAuth();



var firstName=document.getElementById("firstName");
var lastName=document.getElementById("lastName");
var email=document.getElementById("email");
var passworrd=document.getElementById("password");



window.signup=function signup(e){
    e.preventDefault();
    
    var model = {
    firstName: firstName.value,
    lastName:  lastName.value,
    email: email.value,
    password:  passworrd.value,
    };

createUserWithEmailAndPassword(auth,model.email,model.password)
  .then(function(success) {
    console.log(success.user.uid)
    window.location.replace('todo.html')})

    .const(function(err){console.log(err)

  })
}
