const database = firebase.database();
const rootClaim = database.ref('cast/claim');
const rootGames = database.ref('cast/games');



const submit_buttom = document.getElementById('submit-game');







submit_buttom.addEventListener('click', e => {
    e.preventDefault();


    let game_time = document.getElementById('game-time').value;
    let team1 = document.getElementById('team1').value;
    let team2 = document.getElementById('team2').value;

    team1 = team1.toLowerCase();
    team2 = team2.toLowerCase();

    if(game_time == "" || team1 == "" || team2 == ""){
        alert('Required Fields Are Empty !')
        $('#submit-game').html('ERROR');
        setTimeout(function(){ $('#submit-game').html('Submit'); }, 3000);
    
    }else{

        rootClaim.child(team1+"vs"+team2).update({
            team1:team1,
            team2:team2,
            time:game_time,
            booked: "NOT BOOKED"
        });
    

        $('#submit-game').html('SUBMITTED !')
        setTimeout(function(){ $('#submit-game').html('Submit'); }, 3000);
        $('#player-name-header').html(team1 + " vs " + team2 + " Has been Registered ! <br> Visit Games to see who claimed your Game !" )
    
  
       
    
    }




});



const games_button = document.getElementById('games-button');


games_button.addEventListener('click', e => {
    e.preventDefault();
    window.location.assign('./games')
})