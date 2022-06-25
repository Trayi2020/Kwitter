firebaseConfig = {
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
  function send()
  {
    msg = document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
        name:user_name,
        message: msg,
        like: 0
    });
    document.getElementById("msg").value = "";
  }

  function getData() { firebase.database().ref("/").on('value', function(snapshot) { document.getElementsById("output").innerHTML = "";
  snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;
 Room_usernam = childKey;
 console.log("Room Name - " + Room_names);
 row= "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#" + Room_names +"</div><hr>";
 });
});
};

function updateLike(message_id)
{
    console.log("clicked on the like button -" + message_id);
    button_id = message_id;
    likes = document.getElementById(button_id).value;
    updated_likes = Number(like) + 1;
    console.log(updated_likes);

    firebase.database().ref(room_name).child(message_id).update({
        like : updated_likes
    });
}

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
