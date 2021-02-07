let theSuggestedname = String();

const searchLogo = document.getElementById('search-logo');


searchLogo.addEventListener('click', e => {
    e.preventDefault();
    let searchInput = document.getElementById('search-input').value;
    searchInput = searchInput.toUpperCase();
    
   
   

   checkFirebase(searchInput);
  
    })


const checkFirebase = (input) => {
    const database = firebase.database();
    const rootref = database.ref('/counterstrike/pro');
     ResponseObject = {};
    

    rootref.on('value', snap => {

        let response = snap.val();
        let user_snap = response[input];

        if(user_snap === undefined){
            console.log('No User Found')
            $('#search-input').val("");
            $('#player-name-header').html('No User Was Found !')
            $('#cs-suggestion').html('Did you mean ');
            $('#actual-suggestion').html(getSuggestion(input).toLowerCase());
           
            
        }else{
            window.location.assign('./counterstrike' + '?pro=' + input.toLowerCase());
        }

    })



   

   

}


const getSuggestion = (player) => {
    let suggested_player_size;
    suggested_player_size = player.length;
    suggested_player_size = suggested_player_size / 2;
    let suggested_player;
    suggested_player = player.substring(0,suggested_player_size);

    rootref.orderByChild('gamertag').startAt(suggested_player).limitToFirst(1).on('value', data => {
        let my_suggestions_object = data.val();

        let my_suggestion_array = Object.keys(my_suggestions_object);

        my_suggestion_1 = my_suggestion_array[0];
      
        
        theSuggestedname = my_suggestion_1.toLowerCase();
    })  

   return my_suggestion_1 
}


let suggestion_click = document.getElementById('actual-suggestion');

suggestion_click.addEventListener('click', () => {

    window.location.assign("/counterstrike?pro="+theSuggestedname);
})