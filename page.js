// Your web app's Firebase configuration
var firebaseConfig = {
     apiKey: "AIzaSyBhqCqwFUUz_wM9uep4qfk6JJvpTBbjslI",
     authDomain: "tweet-110a6.firebaseapp.com",
     databaseURL: "https://tweet-110a6-default-rtdb.firebaseio.com",
     projectId: "tweet-110a6",
     storageBucket: "tweet-110a6.appspot.com",
     messagingSenderId: "651481533114",
     appId: "1:651481533114:web:bf162bab610aede0039083"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
//FIREBASE LINKS on top

user_name = localStorage.getItem("USERNAME");
var room_name = localStorage.getItem("Roomname");

function send() {
     msg = document.getElementById("msg").value;
     firebase.database().ref(room_name).push({
          name : user_name,
          message : msg,
          like : 0
     });
     document.getElementById("msg").value = "";

}

function logout() {
     window.location = "index.html"
     localStorage.removeItem("USERNAME");
     localStorage.removeItem("Roomname");
}