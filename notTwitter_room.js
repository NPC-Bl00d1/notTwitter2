
var firebaseConfig = {
    apiKey: "AIzaSyDSJcds4MfsJws0hUXJbF2cxV746JneZQw",
    authDomain: "inazuma-pretty.firebaseapp.com",
    databaseURL: "https://inazuma-pretty-default-rtdb.firebaseio.com",
    projectId: "inazuma-pretty",
    storageBucket: "inazuma-pretty.appspot.com",
    messagingSenderId: "196428017978",
    appId: "1:196428017978:web:986db6709393ef04b1e003",
    measurementId: "G-1FWJ0NC05F"
};
// Initialize Firebase
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