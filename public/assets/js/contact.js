const sendBTN =  document.getElementById('form-submit');
const whurl = "https://discord.com/api/webhooks/808743817524019220/LUEHLNUGAPdW3VdUPyTfQMC2VSpQxDRZxuuZaV6Yt9byOi96KGegPfiPbNjxTt8eXd33";



sendBTN.addEventListener('click', (e)=> {
e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;

    
// var data = {
//     service_id: 'service_rg1wve8',
//     template_id: 'template_fq2r0u8',
//     user_id: 'user_w2TMJQVMdVDXLkRF2fdG2',
//     template_params: {
//         'name': name,
//         'email': email,
//         'message': message,
//         'subject': subject,
//         'g-recaptcha-response': '03AHJ_ASjnLA214KSNKFJAK12sfKASfehbmfd...'
//     }
// };

let msg = {
    "content": "__**UserName**__: " + name +  "  __**Email**__: " + email + "  __**Subject**__: " + subject + "  __**Messgae**__: " + message
}



fetch(whurl, {"method":"POST","headers":{"content-type":"application/json"},
"body": JSON.stringify(msg)});




});