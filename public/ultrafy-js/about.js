let reg_click = document.getElementById('reg-click');
let player_click = document.getElementById('player-click');
let cast_click = document.getElementById('cast-click');



reg_click.addEventListener('click', e => {
    e.preventDefault();

    window.location.assign('./register-section');
});


player_click.addEventListener('click',e => {
    e.preventDefault();
    window.location.assign('./search-section')
})


cast_click.addEventListener('click', e => {
    e.preventDefault();
    window.location.assign('./games');
})
