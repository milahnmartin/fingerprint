const query = firebase.database().ref('counterstrike/pro')
.orderByChild('team')


query.once('value', function (snapshot) {
snapshot.forEach(function (childSnapshot) {
    var childKey = childSnapshot.key;
    var childdata = childSnapshot.val();

    let name = childdata.fullname;
    let gamertag = childdata.gamertag;
    let age = childdata.age;
    let team = childdata.team;
    let aspect = childdata.aspect_ratio;

    let image = ''

    team = team.toUpperCase();

    if (team[0] + team[1] + team[2] === 'BRA' ){
      image = 'bravado.png'
    }else if(team[0] + team[1] + team[2] === 'ATK' ){
      image = 'atk.png'
    }else if(team[0] + team[1] + team[2] === 'WRG' ){
      image = 'wrg.png'
    }else if(team[0] + team[1] + team[2] === 'VIC' ){
      image = 'Vicimus.png'
    }else if(team[0] + team[1] + team[2] === 'SIN' ){
      image = 'sin5.png'
    }else if(team[0] + team[1] + team[2] === 'MER' ){
      image = 'meraki.png'
    }else if(team[0] + team[1] + team[2] === 'NIB' ){
      image = 'nibble.png'
    }else if(team[0] + team[1] + team[2] === 'ANA' ){
      image = 'anarchylogo.png'
    }else{
      image = 'bluefinger.png'
    }
$('#popular-feed').append(
    `

    <div class="card" id="${gamertag}" onclick="getData(this.id)">
    <div class="image">
      <img src='../assets/team-img/${image}'>
    </div>
    <div class="content">
      <div class="header">${gamertag}</div>
      <div class="meta">
        <a>${team}</a>
      </div>
      <div class="description">
        ${name} , Currently ${age} years old, playing for ${team}, Known as ${gamertag}
      </div>
    </div>
    <div class="extra content">
      <span class="right floated">
        Aspect Ratio: ${aspect}
      </span>
      <span>
        <i class="user icon"></i>
      Age: ${age}
      </span>
    </div>
  </div>


    `
)







    // ...
});
});


const getData = (id) => {
    window.location.assign('./statistics?player=' + id.toLowerCase());
}