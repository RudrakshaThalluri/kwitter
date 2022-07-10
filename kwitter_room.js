var firebaseConfig = {
      apiKey: "AIzaSyCrXCZ-oQV0oNz7oTdNVI5dhgCJs4PYLcs",
      authDomain: "kwitter2-eadb0.firebaseapp.com",
      databaseURL: "https://kwitter2-eadb0-default-rtdb.firebaseio.com",
      projectId: "kwitter2-eadb0",
      storageBucket: "kwitter2-eadb0.appspot.com",
      messagingSenderId: "582911967315",
      appId: "1:582911967315:web:1e3267379f93474ff7c6a6",
      measurementId: "G-YCC5T99K7Q"
    };
    
    // Initialize Firebase
   firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE

user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML= "Welcom " + user_name;

function addroom()
{
      room_name = document.getElementById("room_name").value
      
      firebase.database().ref("/").child(room_name).update({
            purpose: "adding room name"
      });

      localStorage.setItem("room_name",room_name);

      window.location = "kwitter_page.html";
}

function getData() 
{firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("Room name -" + Room_names);
row = "<div class = 'room_name' id=" + Room_names + " onclick = 'redirecttoroomname(this.id)'" + Room_names + "</div> <hr>";
document.getElementById("Trending_rooms").innerHTML += row;
      //End code
      });});}
getData();
