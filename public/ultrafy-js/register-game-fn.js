const database = firebase.database();
const rootClaim = database.ref('fortnite/claim');
const rootGames = database.ref('fortnite/games');



const submit_buttom = document.getElementById('submit-game');







submit_buttom.addEventListener('click', e => {
    e.preventDefault();


    let game_time = document.getElementById('game-time').value;
    let tournament_type = document.getElementById('tournament-type').value;

    tournament_type = tournament_type.toLowerCase();


    if(game_time == "" || tournament_type == ""){
        alert('Required Fields Are Empty !')
        $('#submit-game').html('ERROR');
        setTimeout(function(){ $('#submit-game').html('Submit'); }, 3000);

    }else{

        rootClaim.child(tournament_type).update({
          tournament:tournament_type,
            time: game_time,
            booked: 0
        });


        $('#submit-game').html('SUBMITTED !')
        setTimeout(function(){ $('#submit-game').html('Submit'); }, 3000);
        $('#player-name-header').html(tournament_type.toUpperCase() + " On " + game_time.toUpperCase() + " Has been Registered ! <br> Visit Games to see who claimed your Game !" )

        $('html, body').animate({
            scrollTop: $("#player-name-header").offset().top -750
        }, 2000);



        const game_channel = "https://discord.com/api/webhooks/809930610214043648/81QKwx7Kes6UWYegu2M4t9gitwohpqLo2J5xsRxObhGflXW0_tT0-IHSpv4spFtO84aE";
        let current_date = new Date();

        let msg = {
            "content": "***FORTNITE GAME REGISTERED*** -> " +"__**Tournament**__:  " + tournament_type.toUpperCase()  + "   __**Time**__:  " + game_time + "  __**Created**__  " + current_date
        }





        fetch(game_channel, {"method":"POST","headers":{"content-type":"application/json"},
            "body": JSON.stringify(msg)});






    }








});





