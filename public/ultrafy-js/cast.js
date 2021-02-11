const database = firebase.database();
const rootClaim = database.ref('cast/claim');
const rootClaimed = database.ref('cast/claimed');



firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.
      document.getElementById('player-name-header').innerHTML = 'Book Your Game ' + user.displayName;
      console.log(user.displayName)
    } else {
      // No user is signed in.
        window.location.assign('./cast-login');
    }
  });



  const logout_btn = document.getElementById('update-button');



  
logout_btn.addEventListener('click', e => {
    e.preventDefault();

    firebase.auth().signOut().then(() => {
        // Sign-out successful.
      }).catch((error) => {
        // An error happened.
      });

})

