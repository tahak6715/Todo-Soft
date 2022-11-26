// Import the functions you need from the SDKs you need

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";

import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-analytics.js";

import {getDatabase,ref,get, set, push, onChildAdded,remove } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-database.js";

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


// const analytics = getAnalytics(app);

const database = getDatabase();

// const dbRef = ref(getDatabase());


var inp=document.getElementById("inp")
console.log(inp.value)
var main = document.getElementById("tasklist")
var list = document.getElementById("list1")
var editid;
  var name=localStorage.getItem("name")
  console.log(name)
  var arr = [];
  
  
  
  
  window.loginup=function(){
window.location.replace('login.html')
localStorage.removeItem("name")

}







window.add=function(){
  var obj;
  let taskreference;
if(editid){
obj ={
task: inp.value,
undatetime:JSON.stringify(new Date()),
dateTime: JSON.stringify(new Date()),
id:editid
};
console.log(obj)
taskreference = ref(database, `taska/${name}/${editid}`)
editid="";

}else{


 obj = {
      task:inp.value,
      dateTime: JSON.stringify(new Date())
    }; 

    const keyref = ref(database,`taska/${name}/`)
    obj.id=push(keyref).key
  
      console.log(obj)
 
taskreference = ref(database, `taska/${name}/${obj.id}`)
  }
set(taskreference,obj);
    inp.value = ""
    takedata();
}


window.renderData = function(){

  main.innerHTML = "" ;
  for(var i=0 ; i < arr.length ; i++){
    main.innerHTML += `<li id="option ">${arr[i].task} ${arr[i].dateTime} <span>
    <button class="btn" id="btn1" onclick="dele('${arr[i].id}')">DELETE</button>
    <button class="btn" id="btn1" onclick="edit('${arr[i].task}','${arr[i].id}')">EDIT</button>
</span></li>`
  }
  }
  
  
  window.takedata=function(){
arr = []  
  const taskreference = ref(database, `taska/${name}/`)

  onChildAdded(taskreference,function(data){
      // console.log(data.val())
      arr.push(data.val())
    renderData()
    })            

      

 
}



window.dele=function(id){
  console.log(id)
  const taskreference = ref(database,`taska/${name}/${id}`)
  remove(taskreference)
  .then(function(e){
    console.log(e)
    takedata()
  })
.catch(function(er){
  console.log(er)
})
}

// window.Deleteall=function(){
//   const taskreference = ref(database,`taska/${name}/`)
//   remove(taskreference)
//   .then(function(e){
//     console.log(e)
//     add();
//   })
// .catch(function(er){
//   console.log(er)
// })

// }

window.edit=function(task,id){
console.log(task)
console.log(id)
inp.value = task;
editid = id;

}