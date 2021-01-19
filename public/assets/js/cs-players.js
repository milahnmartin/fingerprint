const database = firebase.database();
const rootRef = database.ref('users/CS');





rootRef.on('value', data => {
    data.forEach(element =>  {
     
        let user = element.key;
        let player_signed = element.val().signed;
        let main_social = element.val().main_social;
        let ping = element.val().ping;
        let player_team_status;
        
     
      

        if (player_signed === 'None' || player_signed === 'none' || player_signed === "" || player_signed === 'Not signed'){
            player_team_status = 'F'
        }else{
            player_team_status = 'S';
        }

        if(player_team_status === 'S'){
            $('#sheet').append(
                
               `<tr class="positive">
        <td>${user}</td>
         <td>${ping}</td>
        <td>${player_team_status}</td>
        </tr>
        `
                );
        }else{
            $('#sheet').append(
                
                `<tr class="negative">
                <td>${user}</td>
                <td>${ping}</td>
               <td>${player_team_status}</td>
         </tr>
         `
                 );
        }
    
    });
})







