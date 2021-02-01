
const database = firebase.database();
const rootref = database.ref('/users/CS');
const searchLogo = document.getElementById('search-logo');


searchLogo.addEventListener('click', e => {
    e.preventDefault();
    let searchInput = document.getElementById('search-input').value;
    searchInput = searchInput.toUpperCase();
    console.log(searchInput);
    rootref.on('value', snap => {
        let response = snap.val();
        let player_response = new Object();
        player_response = (response[searchInput]);


        if(player_response === undefined){
            console.log('NOT FOUND');
            $('#search-input').val(' ');
            document.getElementById('player-name-header').innerHTML = `Player Wasn't Found, Try Searching For A Different Player !`;
            document.getElementById("search-input").focus();
        }else{
            let newsearch = searchInput.toLowerCase();
            window.location.assign('./counterstrike' + '?pro=' + newsearch);
        }


    })
})