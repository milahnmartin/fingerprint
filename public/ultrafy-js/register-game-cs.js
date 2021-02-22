const database = firebase.database();
const rootClaim = database.ref('counterstrike/claim');
const rootGames = database.ref('vounterstrike/games');



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
        $('#player-name-header').html(team1.toUpperCase() + " vs " + team2.toUpperCase() + " Has been Registered ! <br> Visit Games to see who claimed your Game !" )

        $('html, body').animate({
            scrollTop: $("#player-name-header").offset().top -750
          }, 2000);



        const game_channel = "https://discord.com/api/webhooks/809930610214043648/81QKwx7Kes6UWYegu2M4t9gitwohpqLo2J5xsRxObhGflXW0_tT0-IHSpv4spFtO84aE";
        let current_date = new Date();

        let msg = {
            "content":"***CS:GO GAME REGISTERED -> " + "__**Team 1**__:  " + team1.toUpperCase() + "  __**vs**__  " + team2.toUpperCase() + "   __**Time**__:  " + game_time + "  __**Created**__  " + current_date
        }


    
    
        
    fetch(game_channel, {"method":"POST","headers":{"content-type":"application/json"},
    "body": JSON.stringify(msg)});
    
        
    
  
       
    
    }








});





