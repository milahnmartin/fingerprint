let discordBTN = document.getElementById('discord-btn');
discordBTN.addEventListener('click', e => {
    e.preventDefault();
    window.open('https://discord.gg/eRmbrPw7Tu');
});


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
    window.location.assign('./cast/book');
})
