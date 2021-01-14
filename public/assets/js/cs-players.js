const database = firebase.database();
const rootRef = database.ref('users/CS');




let i = 0
rootRef.on('value', data => {
    data.forEach(element =>  {
        i +=1
        let user = element.key;
        let player_signed = element.val().signed;
        let main_social = element.val().main_social;
        let player_team_status;

        if (player_signed === 'None' || player_signed === 'none' || player_signed === "" || player_signed === 'Not signed'){
            player_team_status = 'Free Agent'
        }else{
            player_team_status = player_signed;
        }
    $('#sheet').append(
    ` 
    <tr>
    <th scope="row">${i}</th>
    <td>${user}</td>
   
  </tr>
  `
    );
    });
})







