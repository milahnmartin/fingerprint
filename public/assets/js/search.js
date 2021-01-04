const srchBTN = document.getElementById('search-q');


const database = firebase.database();
const rootRefCS = database.ref('users/CS');
const rootRefFN = database.ref('users/FN');








srchBTN.addEventListener('click', (e) => {
  const input = document.getElementById('user-q').value;
  var search_type = $("input:radio[name ='inlineRadioOptions']:checked").val();

  if(search_type == 'csgo'){
    rootRefCS.orderByKey().on('value', snapshot => {
    console.log(snapshot.val()[input]);
    LoadInfo(input);
    });
  }else if(search_type == 'fortnite'){
    rootRefFN.orderByKey().on('value', snapshot => {
      console.log(snapshot.val()[input]);
      LoadInfo(input);
      });

  }else{
    alert('PLEASE SELECT A SEARCH OPTION... ')
  }
});


function LoadInfo(userName){
  url = "location.href='player.html'";
  window.location(url);
  
  
};