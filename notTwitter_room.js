


var unsername = localStorage.getItem("username");





function logout(){

window.location="index.html";

}

function addRoom(){

roomname = document.getElementById("roomname").value;
localStorage.setItem("room_name",roomname);
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