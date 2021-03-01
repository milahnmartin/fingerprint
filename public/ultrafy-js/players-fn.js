const query = firebase.database().ref('fortnite/pro')
.orderByChild('team')


query.once('value', function (snapshot) {
snapshot.forEach(function (childSnapshot) {
    var childKey = childSnapshot.key;
    var childdata = childSnapshot.val();
    console.log(childdata);

    let name = childdata.fullname;
    let gamertag = childdata.gamertag;
    let age = childdata.age;
    let team = childdata.team;


$('#popular-feed').append(
    `

    <div class="card" id="${gamertag}" onclick="getData(this.id)">
    <div class="image">
      <img src='../assets/images/new_fingerprint.png'>
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
        Born ${2021-age}
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