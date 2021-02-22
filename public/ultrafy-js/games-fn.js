const database = firebase.database();
const rootGames = database.ref('fortnite/games');


rootGames.on('value', games => {

    $('#game-feed').empty();
    games.forEach(value => {
        let mygames = value.val();
        let time = mygames.time;
        let tournament = mygames.tournament.toUpperCase();
        let amount = mygames.booked;
        let claimed = mygames.claimed_by;
        let claimed_photo = mygames.claimed_by_photo;
        let game_id = mygames.id;

        $('#game-feed').append(


            `
            
            <div class="item">
                <div class="image">
                  <img src="${claimed_photo}" style="width: 120px; height: 120px;">
                </div>
                <div class="content">
                  <a class="header">${tournament}</a>
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
                    <div class="ui label">Streamed By ${claimed}</div>
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

