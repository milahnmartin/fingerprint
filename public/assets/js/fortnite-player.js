const database = firebase.database();
const rootRef = database.ref('users/FN');




let i = 0
rootRef.on('value', data => {
    data.forEach(element =>  {
        i +=1
        let user = element.key;
        let player_signed = element.val().signed;
        let main_social = element.val().main_social;
        let ping = element.val().ping;
        let player_team_status;
        let new_ping = " ";
        let alp = ['a','b','c','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
        for(let i = 0 ;i < 3;i++){
           new_ping += ping[i];
            
        }

        if (player_signed === 'None' || player_signed === 'none' || player_signed === "" || player_signed === 'Not signed'){
            player_team_status = 'F'
        }else{
            player_team_status = 'S';
        }
    $('#sheet').append(
    ` 
    <tr>
    <th scope="row">${i}</th>
    <td>${user}</td>
    <td>${new_ping}</td>
    <td>${player_team_status}</td>
  </tr>
  `
    );
    });
})







