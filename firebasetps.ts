import firebase = require( "firebase" );

// Import the other firebase modules for their SIDE-EFFECTS! These imports will augment
// the App module and provide the type-definition for the .database() method.
import "firebase";

// ----------------------------------------------------------------------------------- //
// ----------------------------------------------------------------------------------- //

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

// Try to write to Firebase.
(async function addEntry(usrName, rlName, inptAge, inptAdress) {

    try {

        var milbatDB: firebase.database.Reference = db.ref( "testing/ben-nadel" );

        await milbatDB.set({
            username: usrName,
            rlname: rlName,
            age: inptAge,
            adress: inptAdress
        });

    } catch ( error ) {

        console.log( "Error!" );
        console.log( error );

    }

})();
// Read from Firebase.
(async function getEntry(value) {

    try {
        var milbatDB: firebase.database.Reference = db.ref( "testing/ben-nadel" );
        var milbatSnapshot: firebase.database.DataSnapshot = await milbatDB.once(value);

        console.log( "Firebase Ref Value:" );
        console.dir( milbatSnapshot.val() );

    } catch ( error ) {

        console.log( "Error!" );
        console.log( error );

    }

})();
