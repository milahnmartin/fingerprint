

const searchLogo = document.getElementById('search-logo');


searchLogo.addEventListener('click', e => {
    e.preventDefault();
    let searchInput = document.getElementById('search-input').value;
    searchInput = searchInput.toUpperCase();
    
   

   checkFirebase(searchInput);
  
    })


const checkFirebase = (input) => {
    const database = firebase.database();
    const rootref = database.ref('/users/CS');
     ResponseObject = new Object;
    

    rootref.on('value', snap => {

        let response = snap.val();
        let user_snap = response[input];

        if(user_snap === undefined){
            console.log('No User Found')
            $('#search-input').val("");
            $('#player-name-header').html('No User Was Found !')
            
        }else{
            window.location.assign('./counterstrike' + '?pro=' + input.toLowerCase());
        }

    })



   

   

}
