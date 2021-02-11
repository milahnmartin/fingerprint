const database = firebase.database();
const rootClaim = database.ref('cast/claim');
const rootClaimed = database.ref('cast/claimed');
const rootGames = database.ref('cast/games');



const submit_buttom = document.getElementById('submit-game');







submit_buttom.addEventListener('click', e => {
    e.preventDefault();


    let game_time = document.getElementById('game-time').value;
    let team1 = document.getElementById('team1').value;
    let team2 = document.getElementById('team2').value;

    if(game_time || team1 || team2 == ""){
        alert('Required Fields Are Empty !')
        $('#submit-game').html('ERROR');
        $('#submit-game').html('SUBMITTED !')
        setTimeout(function(){ $('#submit-game').html('Submit'); }, 3000);
    
    }else{

        rootGames.child(team1+"vs"+team2).update({
            team1:team1,
            team2:team2,
            time:game_time,
            booked: "NOT BOOKED"
        });
    
    
  
    
    }




});

