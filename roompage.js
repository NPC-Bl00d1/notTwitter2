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

var username = localStorage.getItem("username");
var roomname = localStorage.getItem("roomname");



function send() {

    msg = document.getElementById("text").value;
    console.log(username + " said: " + msg);

    firebase.database().ref(roomname).push({

          name: username,
          message: msg,
          like: 0

    });

    document.getElementById("text").value = "";

}







function getData() {
    firebase.database().ref("/" + roomname).on('value', function (snapshot) {
          document.getElementById("output").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
                childKey = childSnapshot.key; childData = childSnapshot.val(); if (childKey != "purpose") {
                      firebase_message_id = childKey;
                      message_data = childData;

                      console.log(message_data + " and " + firebase_message_id);

                      names = message_data['name'];
                      message = message_data['message'];
                      likes = message_data['like'];

                      name_but_tag = "<h4>" + names + "<img class='user_tick' src='tick.png'> </h4>";
                      message_have_tag = "<h4 class='message_h4'>" + message + "</h4>";
                      like_no_its_not_that_weird_app = "<button class='btn btn-warning' id=" + firebase_message_id + "value=" + likes + "onclick='updatelike(this.id)'>";
                      span_but_it_has_a_tag = "<span class='glyphicon glyphicon-thumbs-up'> Likes: " + likes + "</span> </button> <hr>";

                      everything = name_but_tag + message_have_tag + like_no_its_not_that_weird_app + span_but_it_has_a_tag;
                      document.getElementById("output").innerHTML += everything;


                }
          });
    });
}
getData();


function updateLike(message_id)
{
console.log("clicked on like button - " + message_id);
  button_id = message_id;
  likes1 = document.getElementById(button_id).value;
  updated_likes = Number(likes1) + 1;
  console.log(updated_likes);

  firebase.database().ref(roomname).child(message_id).update({
      like : updated_likes  
   });

}



function logout() {
    localStorage.removeItem("user_name");
    localStorage.removeItem("roomname");
        window.location = "index.html";
    }