//coded by : Ra3d🍁#0001 - Ln,Muziky#8956
const http = require("http");
const express = require("express");
const app = express();
app.get("/", (request, response) => {
  response.sendStatus(200);
});

//coded by : Ra3d🍁#0001 - Ln,Muziky#8956
const Discord = require("discord.js");
const client = new Discord.Client();

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

//coded by : Ra3d🍁#0001 - Ln,Muziky#8956


var prefix = "-"; // تعديل مهم جدا


client.on("message", message => {
            if (message.content.startsWith(prefix + "obc")) {
                         if (!message.member.hasPermission("ADMINISTRATOR"))  return;
  let args = message.content.split(" ").slice(1);
  var argresult = args.join(' '); 
  message.guild.members.filter(m => m.presence.status !== 'online').forEach(m => {
 m.send(`${argresult}\n ${m}`);
})
let embed = new Discord.RichEmbed()
.setAuthor(message.author.username,message.author.avatarURL)
.setColor('#5016f3')
                        .setDescription(`\`${message.guild.members.filter(m => m.presence.status !== 'online').size}\` : تمكن ${client.user} من الارسال الى `)
                        .setTimestamp()
        message.channel.send({embed:embed});//coded by : Ra3d🍁#0001 - Ln,Muziky#8956

 message.delete(); 
};     
});


//كود برودكاست للاون لاين فقط


client.on("message", message => {
if (message.content.startsWith(prefix + "bc")) {
if (!message.member.hasPermission("ADMINISTRATOR"))  return;
  let args = message.content.split(" ").slice(1).join(' ')
  message.guild.members.filter(m => m.presence.status !== 'offline').forEach(m => {
 m.send(`${args}\n ${m}`);
})
              let embed = new Discord.RichEmbed()
.setAuthor(message.author.username,message.author.avatarURL)
.setColor('#5016f3')
                        .setDescription(`\`${message.guild.members.filter(m => m.presence.status !== 'online').size}\` : تمكن ${client.user} من الارسال الى `)
                        .setTimestamp()
        message.channel.send({embed:embed});//coded by : Ra3d🍁#0001 - Ln,Muziky#8956

 message.delete(); 
};     
});
//coded by : Ra3d🍁#0001 - Ln,Muziky#8956

//كود برود كاست للسيرفرات الي فيها البوت 
//coded by : Ra3d🍁#0001 - Ln,Muziky#8956


client.on("message", message => {

if (message.content.toLowerCase() === prefix + 'inv'.toLowerCase() || message.content.toLowerCase() === prefix + 'invite'.toLowerCase()) { 
 var invite = new Discord.RichEmbed()
.setTimestamp()
.setColor(`#141414`)
.setAuthor(message.author.username, message.author.avatarURL)
.setFooter(`${client.user.tag} BOT `)
.setDescription(`**:candle: شكرا لاختيارك بوتنا 
[Bot Link](https://discord.com/api/oauth2/authorize?client_id=755186473581543516&permissions=8&scope=bot) .**`)
 message.author.send(invite).then( m => {
      message.react('✅')
    }).catch(err =>  { message.react('❌') })
}
});
client.on("message", message => {
  if (message.content == prefix + "help") {
    let help = new Discord.RichEmbed()
      .setColor("0x5016f3")
      .setAuthor(message.author.username, message.author.avatarURL)
      .setDescription(`** ${client.user} Commands :**

**BoardCast**
\`${prefix}bc\` **| bc to all! [Upgrade] -New can send to bots-**
\`${prefix}obc\` ** | bc to all online! [Upgrade] -New can send to bots-**
\`${prefix}inv\` ** | to invite bot in your server! : )**
\`${prefix}support\`  ** | to get an invite link for the support server! : )**

**Code Developers : <@543621145627328524> - <@609544947816988702>**
            `);
    message.channel.send(help);
  }
});
  //coded by : Ra3d🍁#0001 - Ln,Muziky#8956
/*
client.on("message", message => {

if (message.content.toLowerCase() === prefix + 'supp'.toLowerCase() || message.content.toLowerCase() === prefix + 'support'.toLowerCase()) { 
 var invite = new Discord.RichEmbed()
.setTimestamp()
.setColor(`#141414`)
.setAuthor(message.author.username, message.author.avatarURL)
.setFooter(`TAXES BOT | V 2.0.9 `)
.setDescription(`**:candle: تنور سيرفر السبورت 
[Server Link](https://discord.gg/eZX4vJx) .**`)
 message.author.send(invite).then( m => {
      message.react('✅')
    }).catch(err =>  { message.react('❌') })
}
 
});
*/
//coded by : Ra3d🍁#0001 - Ln,Muziky#8956

client.on('message', message => { 
var prefix = '-'///coded by : Ra3d🍁#0001 - Ln,Muziky#8956

                                if(!message.channel.guild) return;//coded by : Ra3d🍁#0001 - Ln,Muziky#8956

                        if (message.content.startsWith(prefix + 'ping')) {
                            if(!message.channel.guild) return;
                            var msg = `${Date.now() - message.createdTimestamp}`
                            var api = `${Math.round(client.ping)}`
                            if (message.author.bot) return;//coded by : Ra3d🍁#0001 - Ln,Muziky#8956

                        let embed = new Discord.RichEmbed()
                        .setAuthor(message.author.username,message.author.avatarURL)
                        .setColor('#5016f3')
                        .addField('**My Ping is:**',msg + " ms :signal_strength: ")
                        .addField('**Discord API :**',api + " ms :signal_strength: ")
                        .setTimestamp()
        message.channel.send({embed:embed});//coded by : Ra3d🍁#0001 - Ln,Muziky#8956

                        }
                    });
//coded by : Ra3d🍁#0001 - Ln,Muziky#8956



client.login(process.env.token);