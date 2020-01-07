// Import the core node modules.
import firebase = require( "firebase/app" );

// Import the other firebase modules for their SIDE-EFFECTS! These imports will augment
// the App module and provide the type-definition for the .database() method.
import "firebase/database";

// ----------------------------------------------------------------------------------- //
// ----------------------------------------------------------------------------------- //

// Initialize the Firebase application.
// --
// NOTE: Obviously, I'm obfuscating my app credentials here.
// Initialize the Firebase application.
// --
// NOTE: Obviously, I'm obfuscating my app credentials here.
var app: firebase.app.App = firebase.initializeApp({
    apiKey: "AIzaSyDbbdIrDk1D0hVFbFIDYzXIZUZ8NGoAU4U",
    authDomain: "milbathome-34d07.firebaseapp.com",
    databaseURL: "https://milbathome-34d07.firebaseio.com",
    projectId: "milbathome-34d07",
    storageBucket: "milbathome-34d07.appspot.com",
    messagingSenderId: "542426490524",
    appId: "1:542426490524:web:cca42cb722a0796c5eef59",
    measurementId: "G-7LC2Q0VX5E"
});

// Access the real-time database in the initialized application.
var db: firebase.database.Database = app.database();

// ----------------------------------------------------------------------------------- //
// ----------------------------------------------------------------------------------- //

// Try to write to and read back from Firebase.


function writeUserData(userId, inptName, inptAge, inptAdress) {
    firebase.database().ref('users/' + userId).set({
      name: inptName,
      age: inptAge,
      adress : inptAdress
    });
  }

  function readUserData(userId){
    return firebase.database().ref('/users/' + userId).once('value').then(function(snapshot) {
      var username = (snapshot.val() && snapshot.val().username) || 'Anonymous';
      console.log(username)
    });
    
  }

  function writeNewPost(uid, inptName, inptAge, inptAdress) {
    // A post entry.
    var postData = {
        name: inptName,
        age: inptAge,
        adress : inptAdress
    };
  
    // Get a key for a new Post.
    var newPostKey = firebase.database().ref().child('posts').push().key;
  
    // Write the new post's data simultaneously in the posts list and the user's post list.
    var updates = {};
    updates['/posts/' + newPostKey] = postData;
    updates['/user-posts/' + uid + '/' + newPostKey] = postData;
  
    return firebase.database().ref().update(updates);
  }

  function deleteUser(uid){
    firebase.database().ref('users/' + uid).remove()
  }
  

  //writeUserData("testing","roger cordou","100","3 rue de la boustifaille")
  //readUserData("testing")