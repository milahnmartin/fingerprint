const database = firebase.database();
const rootGames = database.ref('counterstrike/games');


rootGames.on('value', games => {

        $('#game-feed').empty();
        games.forEach(value => {
    let mygames= value.val();
    let time = mygames.time;
    let team1 = mygames.team1.toUpperCase();
    let team2 = mygames.team2.toUpperCase();
    let game_id = mygames.id;
    let booked = mygames.booked;
    let claimed = mygames.claimed_by;
    let claimed_photo = mygames.claimed_by_photo;
    
          $('#game-feed').append(
    
        
            `
            
            <div class="item">
                <div class="image">
                  <img src="${claimed_photo}" style="width: 120px; height: 120px;">
                </div>
                <div class="content">
                  <a class="header">${team1}  vs  ${team2}</a>
                  <div class="meta">
                    <span class="cinema">${time}</span>
                  </div>
                  <div class="description">
                    <p></p>
                  </div>
                  <div class="extra">
                    <div class="ui right floated primary button" id="${game_id}" onclick="getlink(this.id)">
                      VIEW STREAM
                      <i class="right chevron icon"></i>
                    </div>
                    <div class="ui label">Claimed By ${claimed}</div>
                  </div>
                </div>
              </div>
    
            
            `
          )
    
        })
    
        
    
      })




const getlink = (id) => {

  rootGames.on('value',data => {
    data = data.val()[id];
    let link = data.stream;

    window.open("https://"+link)

  })



   

}

