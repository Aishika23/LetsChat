firebaseConfig = {
    apiKey: "AIzaSyBSJzQCruNZ4Gq6qzwK-eQ4ySMhlfF6NSY",
    authDomain: "letschat-b1a2b.firebaseapp.com",
    databaseURL: "https://letschat-b1a2b-default-rtdb.firebaseio.com",
    projectId: "letschat-b1a2b",
    storageBucket: "letschat-b1a2b.appspot.com",
    messagingSenderId: "475055371294",
    appId: "1:475055371294:web:41b30f9c5ea4998f18ea0f",
    measurementId: "G-N29Q7QE57C"
  };

  user_name = localStorage.getItem("user_name");
  document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!"

  function addUser() {
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
      purpose:"adding user"
})
  }
  function addRoom() {
    room_name = document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({
      purpose:"adding room name"
})
    localStorage.setItem("room_name", room_name);

    window.location = "message.html";
  }
  firebase.initializeApp(firebaseConfig)
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code
    console.log("room Name - " + Room_names);
    row = "<div class='room_name' id="+Room_names+"onclick='redirectToRoomName(this.id) >#"+Room_names+"</div><hr>";
    document.getElementById("output").innerHTML += row;
    //End code
    });});}
getData();

function redirectToRoomName(name) {
    console.log(name);
    localStorage.setItem("room_name", name);
    window.location = "message.html";
}