const srchBTN = document.getElementById('search-q');


const database = firebase.database();
const rootRefCS = database.ref('users/CS');
const rootRefFN = database.ref('users/FN');








srchBTN.addEventListener('click', (e) => {
  var search_type = $("input:radio[name ='inlineRadioOptions']:checked").val();

  if(search_type == 'player'){
    rootRefCS.orderByKey().on('value', snapshot => {
console.log(snapshot.val());
    });
  }else if(search_type == 'team'){
    
  }else{
    alert('PLEASE SELECT A SEARCH OPTION... ')
  }
});

