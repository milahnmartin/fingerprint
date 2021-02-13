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





        const game_channel = "https://discord.com/api/webhooks/809930610214043648/81QKwx7Kes6UWYegu2M4t9gitwohpqLo2J5xsRxObhGflXW0_tT0-IHSpv4spFtO84aE";


        let msg = {
            "content": "__**Team 1**__:  " + team1.toUpperCase() + "  __**vs**__  " + team2.toUpperCase() + "   __**Time**__:  " + game_time
        }
    
    
        
    fetch(game_channel, {"method":"POST","headers":{"content-type":"application/json"},
    "body": JSON.stringify(msg)});
    
        
    
  
       
    
    }








});







const book_click = document.getElementById('book-click');
const cs_click = document.getElementById('cs-click');
const games_click = document.getElementById('games-click');


book_click.addEventListener('click', e => {
    window.location.assign('./cast');
})
cs_click.addEventListener('click', e => {
    window.location.assign('./search-counterstrike');
})
games_click.addEventListener('click', e => {
    window.location.assign('./games');
})