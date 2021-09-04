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