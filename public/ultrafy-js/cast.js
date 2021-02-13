const database = firebase.database();
const rootClaim = database.ref('cast/claim');
const rootGames = database.ref('cast/games');



firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.
      document.getElementById('player-name-header').innerHTML = 'Book Your Game ' + user.displayName;
      document.title = user.displayName + " CAST | Fingerprint ZA"

      
    } else {
      // No user is signed in.
        window.location.assign('./cast-login');
    }
  });



  const logout_btn = document.getElementById('update-button');

  const games_click = document.getElementById('game-click');

  const reg_click = document.getElementById('reg-game-click');

  reg_click.addEventListener('click', e => {
    window.location.assign('./register-game');
  })

  games_click.addEventListener('click',e => {
    window.location.assign('./games');
  })



  
logout_btn.addEventListener('click', e => {
    e.preventDefault();

    firebase.auth().signOut().then(() => {
        // Sign-out successful.
      }).catch((error) => {
        // An error happened.
      });

})



const displayGames = () => {


  rootClaim.on('value', games => {
    $('#game-feed').empty();
    games.forEach(value => {
let mygames= value.val();
let time = mygames.time;
let team1 = mygames.team1.toUpperCase();
let team2 = mygames.team2.toUpperCase();
let booked = mygames.booked;

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
                <div class="ui right floated primary button" id="${team1.toLowerCase()+"vs"+team2.toLowerCase()}" onclick="claimed(this.id)">
                  CLAIM
                  <i class="right chevron icon"></i>
                </div>
                <div class="ui label">${booked}</div>
              </div>
            </div>
          </div>

        
        `
      )

    })

    

  })

}


const claimed = (id) => {
  console.log(id)


  rootClaim.on('value', data => {
    let mygame = data.val();
    mygame = mygame[id];
   
    let team1 = mygame.team1;
    let team2 = mygame.team2;
    let time = mygame.time;
    let user = firebase.auth().currentUser;
    let photourl = user.photoURL;

    stream = prompt('Enter Stream Link');


    rootGames.child(id).update({
      team1: team1,
      team2: team2,
      time: time,
      claimed_by: user.displayName,
      claimed_by_photo: photourl,
      stream: stream

    });

    
  let rootDelete = database.ref('cast/claim/'+id);
  rootDelete.remove();   


  })




}






displayGames();