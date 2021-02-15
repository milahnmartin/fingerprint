let reg_click = document.getElementById('reg-click');
let cs_click = document.getElementById('cs-click');
let cast_click = document.getElementById('cast-click');



reg_click.addEventListener('click', e => {
    e.preventDefault();

    window.location.assign('./register-cs');
});


cs_click.addEventListener('click',e => {
    e.preventDefault();
    window.location.assign('./search-counterstrike')
})


cast_click.addEventListener('click', e => {
    e.preventDefault();
    window.location.assign('./games');
})
