//coded by : Ra3d
const http = require("http");
const express = require("express");
const app = express();
app.get("/", (request, response) => {
  response.sendStatus(200);
});

///coded by Ra3d#9999
const Discord = require("discord.js");
const client = new Discord.Client();

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

//coded by : Ra3d


var prefix = "-"; // تعديل مهم جدا


client.on("message", message => {
            if (message.content.startsWith(prefix + "obc")) {
                         if (!message.member.hasPermission("ADMINISTRATOR"))  return;
  let args = message.content.split(" ").slice(1);
  var argresult = args.join(' '); 
  message.guild.members.filter(m => m.presence.status !== 'online').forEach(m => {
 m.send(`${argresult}\n ${m}`);
})
 message.channel.send(`\`${message.guild.members.filter(m => m.presence.status !== 'online').size}\` :${client.user.tag} تمكن من الارسال الى`); 
 message.delete(); 
};     
});


//كود برودكاست للاون لاين فقط


client.on("message", message => {

            if (message.content.startsWith(prefix + "bc")) {
                         if (!message.member.hasPermission("ADMINISTRATOR"))  return;
  let args = message.content.split(" ").slice(1);
  var argresult = args.join(' '); 
  message.guild.members.filter(m => m.presence.status !== 'offline').forEach(m => {
 m.send(`${argresult}\n ${m}`);
})
 message.channel.send(`\`${message.guild.members.filter(m => m.presence.status !== 'online').size}\` : عدد الاعضاء المستلمين`); 
 message.delete(); 
};     
});

//كود برود كاست للسيرفرات الي فيها البوت 


client.on("message", message => {

if (message.content.toLowerCase() === prefix + 'inv'.toLowerCase() || message.content.toLowerCase() === prefix + 'invite'.toLowerCase()) { 
 var invite = new Discord.RichEmbed()
.setTimestamp()
.setColor(`#141414`)
.setAuthor(message.author.username, message.author.avatarURL)
.setFooter(`TAXES BOT | V 2.0.9 `)
.setDescription(`**:candle: شكرا لاختيارك بوتنا [Bot Link](https://discord.com/api/oauth2/authorize?client_id=755186473581543516&permissions=8&scope=bot) .**`)
 message.author.send(invite).then( m => {
      message.react('✅')
    }).catch(err =>  { message.react('❌') })
}
 
});
client.on("message", message => {
  

if (message.content.toLowerCase().startsWith(prefix + "help".toLowerCase())) {

       let main_help_en = new Discord.MessageEmbed()
.setTimestamp().setColor("RED").setAuthor(`Help Commands`, message.author.displayAvatarURL()).setFooter(`For more information about the commands use : ${prefix}help ( command )`,client.user.displayAvatarURL()).setThumbnail(client.user.displayAvatarURL())
.setDescription(`> **${client.user.username} 's Help commands\n> Available Commands : " 9 " Command\n> Prefix : \`${prefix}\` | Language : English :flag_gb:**`)
.addFields(
      { name: 'BroadCast Commands', value: `\`${prefix}bc \` , \`paypal-tax\` \`credits\`, \`daily\``}, 
      { name: 'Admins', value: `\`setprefix\` , \`setlanguage\` , \`settype\`` },
      { name: 'Extra', value: `\`stats\` , \`invite\` , \`support\` , \`help\``})
} 
  })


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


client.login(process.env.token);