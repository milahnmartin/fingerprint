const database = firebase.database();
const rootClaim = database.ref('cast/claim');
const rootClaimed = database.ref('cast/claimed');
const rootGames = database.ref('cast/games');



firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.
      document.getElementById('player-name-header').innerHTML = 'Book Your Game ' + user.displayName;
      document.title = user.displayName + " CAST | Fingerprint ZA"
      console.log(user.displayName)

      displayGames();
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



const displayGames = () => {

  rootGames.on('value', games => {
    $('#game-feed').empty();
    games.forEach(value => {
let mygames= value.val();
let time = mygames.time;
let team1 = mygames.team1.toUpperCase();
let team2 = mygames.team2.toUpperCase();

      $('#game-feed').append(

    
        `
        
        <div class="item">
            <div class="image">
              <img src="./assets/images/bluefinger.png" style="width: 100px; height: 100px;">
            </div>
            <div class="content">
              <a class="header">${team1}  vs  ${team2}</a>
              <div class="meta">
                <span class="cinema">${time}</span>
              </div>
              <div class="description">
                <p></p>
              </div>
              <div class="extra">
                <div class="ui right floated primary button">
                  CLAIM
                  <i class="right chevron icon"></i>
                </div>
                <div class="ui label">NOT BOOKED</div>
              </div>
            </div>
          </div>

        
        `
      )

    })

    

  })

}