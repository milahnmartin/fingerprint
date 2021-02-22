const database = firebase.database();
const rootClaim = database.ref('fortnite/claim');
const rootGames = database.ref('fortnite/games');



firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        // User is signed in.
        document.getElementById('player-name-header').innerHTML = 'Book Your Game ' + user.displayName;
        document.title = user.displayName + "FN | CAST | Fingerprint ZA"


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
            let tournament = mygames.tournament.toUpperCase();
            let booked = mygames.booked;

            $('#game-feed').append(


                `
        
        <div class="item">
            <div class="image">
              <img src="../assets/images/bluefinger.png" style="width: 100px; height: 100px;">
            </div>
            <div class="content">
              <a class="header">${tournament}</a>
              <div class="meta">
                <span class="cinema">${time}</span>
              </div>
              <div class="description">
                <p></p>
              </div>
              <div class="extra">
                <div class="ui right floated primary button" id="${tournament.toLowerCase()}" onclick="claimed(this.id)">
                  CLAIM
                  <i class="right chevron icon"></i>
                </div>
                <div class="ui label">Times Booked ${booked}</div>
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

        let tournament = mygame.tournament;
        let time = mygame.time;
        let user = firebase.auth().currentUser;
        let photourl = user.photoURL;

        stream = prompt('Enter Stream Link');

        if(stream === ""){
            alert('No Stream Link Was Entered !')
        }else if(stream !== ""){



            rootGames.child(id).update({
                tournament: tournament,
                time: time,
                claimed_by: user.displayName,
                claimed_by_photo: photourl,
                stream: stream

            });


            //
            // let rootDelete = database.ref('fortnite/claim/'+id);
            // rootDelete.remove();


        }else{
            alert('You elected to Cancel !')
        }





    })




}






displayGames();