var firebaseConfig = {
  apiKey: "AIzaSyCQtXlq0VRt01LKtIGUxEu8N2GNB0VHclk",
  authDomain: "un-nerf-albedos-hair-please.firebaseapp.com",
  databaseURL: "https://un-nerf-albedos-hair-please-default-rtdb.firebaseio.com",
  projectId: "un-nerf-albedos-hair-please",
  storageBucket: "un-nerf-albedos-hair-please.appspot.com",
  messagingSenderId: "934459020870",
  appId: "1:934459020870:web:ad86c255c10ab0fff85c47",
  measurementId: "G-279LMK325T"
};
firebase.initializeApp(firebaseConfig);


var unsername = localStorage.getItem("username");


document.getElementById("hellothere").innerHTML=username;


function logout(){

window.location="index.html";

}

function addRoom(){

roomname = document.getElementById("roomname").value;
localStorage.setItem("roomname",roomname);
window.location="roompage.html";

}


function getData() {firebase.database().ref("/").on('value',
function(snapshot) {document.getElementById("output").innerHTML =
"";snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;
Room_names = childKey;
//Start code



//End code
});});}
getData();