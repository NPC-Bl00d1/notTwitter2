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



  function adduser(){

    unsername = document.getElementById("unsername_input").value;
    console.log("unsername is: " + unsername)

    localStorage.setItem("username",unsername);
    
    firebase.database().ref("/").child(unsername).update({
    
    maggothoney:"this is actually maggot honey",
    notMaggotHoney:"this is not maggot honey",



  });


  window.location="notTwitter_room.html";

}