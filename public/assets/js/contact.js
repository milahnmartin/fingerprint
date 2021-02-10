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
    "content": "__**UserName**__: " + name +  " __**Email**__: " + email + " __**Subject**__: " + subject + " __**Messgae**__: " + message
}

var discordting = {
    "embeds":{
        "content": null,
        "embeds": [
          {
            "title": "What's this?",
            "description": "Discohook is a free tool that sends messages with embeds to your Discord server. To do that it uses [webhooks](https://support.discord.com/hc/en-us/articles/228383668), a Discord feature that lets any application send messages to a channel.\n\nTo send messages, you need a webhook URL, you can get one via the \"Integrations\" tab in your server's settings.\n\nNote that Discohook cannot respond to user interactions, it only sends messages when you tell it to. As such creating an automatic feed or custom commands is not possible with Discohook.",
            "color": 5814783
          },
          {
            "title": "Discord bot",
            "description": "Discohook has a complementary bot, while it's not strictly required to send messages it may be helpful to have it.\n\nBelow is a small but incomplete overview of what the bot can do for you.",
            "color": 5814783,
            "fields": [
              {
                "name": "Mentioning users, roles, channels, and using emojis",
                "value": "These things have [manual ways](https://discord.dev/reference#message-formatting), however they're easy to mess up for someone that doesn't know what they're doing.\nIf you don't understand the above link, using Discohook's bot for this is recommended.\n\nThe relevant commands in the bot are `d.user`, `d.role`, `d.channel`, and `d.emoji`. Each of those will return formatting which you can copy into the editor to get the appropriate output.\n\nTo use Discord's default emojis, use its short name wrapped in colons. As an example, \"\\:eyes:\" will make the eyes emoji."
              },
              {
                "name": "Creating reaction roles",
                "value": "You can create reaction roles with the bot using the `d.reactionrole` command, the set-up process is very simple: add a reaction to any existing message in your server, and name the role.\n\nNote that while other bots may allow you to configure reaction roles, Discohook's are the only ones we can give support for."
              },
              {
                "name": "Recover Discohook messages from your server",
                "value": "The bot is capable of turning most message links sent inside your server into Discohook links. Use the `d.link` command with a message link to move that message from Discord into Discohook."
              }
            ]
          }
        ],
        "username": "FINGERPRINT ZA",
        "avatar_url": "https://imgur.com/P1msmYz.png"
      }
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