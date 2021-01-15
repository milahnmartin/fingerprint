const sendBTN =  document.getElementById('form-submit');
const whurl = "https://discordapp.com/api/webhooks/799598592293470228/upR40y5hhUfxrYbljKBcuWT6qofX9WsqnUnTBIGafZnsOOG_8ngz8xk5-KwhXtDG6v5o";



sendBTN.addEventListener('click', (e)=> {
e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;

    
var data = {
    service_id: 'service_rg1wve8',
    template_id: 'template_fq2r0u8',
    user_id: 'user_w2TMJQVMdVDXLkRF2fdG2',
    template_params: {
        'name': name,
        'email': email,
        'message': message,
        'subject': subject,
        'g-recaptcha-response': '03AHJ_ASjnLA214KSNKFJAK12sfKASfehbmfd...'
    }
};

let msg = {
    "content": "UserName: " + name +  " Email: " + email + " Subject: " + subject + " Messgae: " + message
}

fetch(whurl, {"method":"POST","headers":{"content-type":"application/json"},
"body": JSON.stringify(msg)});

$.ajax('https://api.emailjs.com/api/v1.0/email/send', {
    type: 'POST',
    data: JSON.stringify(data),
    contentType: 'application/json'
}).done(function() {
    $('#form-submit').html('SUCCESS');
    setTimeout(function(){ 
        $('#form-submit').html('SEND MESSAGE');
     }, 3000);
     $('html, body').animate({
        scrollTop: $("#contact-header").offset().top -400
      }, 2000);
      $('#contact-header').html(name + " You have Succesfully Contacted FINGERPRINT ZA !")


}).fail(function(error) {
    $('#form-submit').html('ERROR');
    // console.error('Oops... ' + JSON.stringify(error));
});



});