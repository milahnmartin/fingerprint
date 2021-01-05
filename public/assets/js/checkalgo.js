function allKeys(){
  rootRef.on('value', snapshot => {
    snapshot.forEach(child => {    
      console.log(child.key, child.val());
    });
  });
};
