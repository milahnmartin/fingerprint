let fortnite_click = document.getElementById('fn-click');
let cs_click = document.getElementById('cs-click');



fortnite_click.addEventListener('click', e => {
    e.preventDefault();

    window.location.assign('./fortnite/register');
})



cs_click.addEventListener('click', e=>{
    e.preventDefault();

    window.location.assign('./counterstrike/register');
})