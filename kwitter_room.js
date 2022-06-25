const firebaseConfig = {
    apiKey: "AIzaSyAnTfCXiXhYLFmq70cGA9Rb4F8m_CAdsmU",
    authDomain: "kwitter-4c704.firebaseapp.com",
    databaseURL: "https://kwitter-4c704-default-rtdb.firebaseio.com",
    projectId: "kwitter-4c704",
    storageBucket: "kwitter-4c704.appspot.com",
    messagingSenderId: "310347250089",
    appId: "1:310347250089:web:a9273dec1711305ab3acb8",
    measurementId: "G-8TM32VDCHP"
  };
  firebaseConfig.intializeApp(firebaseConfig);

  user_name = localStorage.getItem("user_name");
  document.getElementsById("user_name").innerHTML = "Welcome" + user_name + "!";

  function addRoom()
  {
    room_name = document.getElementsById("room_name").value;
    firebase.database().ref("/").child(room_name).update({
    });
    localStorage.setItem("room_name", room_name);
    window.location = "kwitter_page.html";
  }
  function getData() { firebase.database().ref("/").on('value', function(snapshot) { document.getElementsById("output").innerHTML = "";
   snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;
  Room_usernam = childKey;
  console.log("Room Name - " + Room_names);
  row= "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#" + Room_names +"</div><hr>";
  });
 });
};
   getData();
   function redirectToRoomName(name)
   {
    console.log(name);
    localStorage.setItem("room_names", name);
    window.location="kwiiter_page.html";
   }
   function logout() {
    localStorage.removeItem("username");
    localStorage.removeItem("room_name");
    window.location = "index.html";
   }