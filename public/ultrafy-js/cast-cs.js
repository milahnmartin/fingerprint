const database = firebase.database();
const rootClaim = database.ref('counterstrike/claim');
const rootGames = database.ref('counterstrike/games');



firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.
      document.getElementById('player-name-header').innerHTML = 'Book Your Game ' + user.displayName;
      document.title = user.displayName + "CS:GO | CAST | Fingerprint ZA"

      
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


  rootClaim.on('value', games => {
    $('#game-feed').empty();
    games.forEach(value => {
let mygames= value.val();
let time = mygames.time;
let team1 = mygames.team1.toUpperCase();
let team2 = mygames.team2.toUpperCase();
let booked = mygames.booked;
let user = firebase.auth().currentUser;
let user_name = user.displayName;


      $('#game-feed').append(

    
        `
        
        <div class="item">
            <div class="image">
              <img src="../assets/images/bluefinger.png" style="width: 100px; height: 100px;">
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
                <div class="ui label">Streamed by ${booked} Users</div>
              </div>
            </div>
          </div>

        
        `
      )

    })

    

  })

}


const claimed = (id) => {
  let stream = prompt('Enter Stream URL');
  if(stream === ""){
    alert('Nothing Was Entered')
  }else{


    let data = {};

    rootClaim.on('value',info => {
      data = info.val()[id];
    })

    let user = firebase.auth().currentUser;
    let user_photo = user.photoURL
    let user_name = user.displayName;
    let user_uid = user.uid;

    rootGames.child(id+user_uid.toLowerCase()).update({
      claimed_by:user_name,
      claimed_by_photo:user_photo,
      time: data.time,
      team1: data.team1,
      team2: data.team2,
      id: id+user_uid.toLowerCase(),
      stream:stream

    })

    amounntinc(id);



  }


}


const amounntinc = (id) => {
  let data = {};
  rootClaim.on('value', info => {
    data = info.val()[id];

  })

  let amount = data.booked;

  rootClaim.child(id).update({
    booked: amount+1
  });

};



displayGames();