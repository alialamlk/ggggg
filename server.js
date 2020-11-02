const Discord = require("discord.js");
const client = new Discord.Client();
const { Client, RichEmbed } = require("discord.js");

client.on("ready", () => {
  console.log(`I Am Ready!!`);
});
var prefix = "1";

const owner = [
  "670670491828224000",
  "721370985105719346",
  "734136447832948817",
  ""
];

client.on("message", message => {
  ///coded by : Ra3d🍁#0001 - Ln,Muziky#8956

  if (!message.channel.guild) return; //coded by : Ra3d🍁#0001 - Ln,Muziky#8956

  if (message.content.startsWith(prefix + "ping")) {
    if (!message.channel.guild) return;
    var msg = `${Date.now() - message.createdTimestamp}`;
    var api = `${Math.round(client.ping)}`;
    if (message.author.bot) return; //coded by : Ra3d🍁#0001 - Ln,Muziky#8956

    let embed = new Discord.RichEmbed()
      .setAuthor(message.author.username, message.author.avatarURL)
      .setColor("#5016f3")
      .addField("**My Ping is:**", msg + " ms :signal_strength: ")
      .addField("**Discord API :**", api + " ms :signal_strength: ")
      .setTimestamp();
    message.channel.send({ embed: embed }); //coded by : Ra3d🍁#0001 - Ln,Muziky#8956
  }
});

client.on("message", async message => {
  if (message.content.startsWith(prefix + "help")) {
    if (!owner.includes(message.author.id))
      return message.reply("**6ix9ine Only:x:**");
    message.delete();
    let help = new Discord.RichEmbed()
      .setColor("RANDOM")
      .setFooter(`${message.author.tag}`, `${message.author.avatarURL}`)
      .setTimestamp()
      .setThumbnail(`${message.author.avatarURL}`)
      .setDescription(
        `**
          ${prefix}bc : لـ ارسال برودكاست الي الكل
          ${prefix}obc : لـ ارسال برودكاست الي الاونلاين
          
          ${prefix}setName : لـ تـغـيـر الأسـم
          ${prefix}setAvatar : لـ تـغـيـر الـصـورة
          
          ${prefix}invite : لـ دعوة الـبـوت
          ${prefix}bot : لـ معلومات البوت
          **`
      )
      .addField(`**By :**`, `**<@670670491828224000>**`);
    message.channel.sendEmbed(help);
    message.delete();
  }
});

client.on("message", message => {
  let args = message.content
    .split(" ")
    .slice(1)
    .join(" ");
  if (message.content.startsWith(prefix + "bc")) {
    if (!owner.includes(message.author.id))
      return message.reply("**6ix9ine Only:x:**");
    message.delete();
    let embed = new Discord.RichEmbed()
      .setColor(`RANDOM`)
      .setDescription(`**! اكتب رسالة لأرسال البرودكاست**`)
      .addField(`**${prefix}bc [Bc Message]**`, `${message.author}`)
      .setFooter(`${message.author.tag}`, `${message.author.avatarURL}`)
      .setTimestamp()
      .setThumbnail(message.author.avatarURL);
    if (!args) return message.channel.sendEmbed(embed);
    message.guild.members.forEach(m => {
      m.send(`${args}\n ${m}`);
      message.delete();
    });
    const embedd = new Discord.RichEmbed()
      .setColor("RANDOM")
      .addField(
        "**! تم ارسال برودكاست الي كل الاعضاء**",
        `**-----------------------**`
      )
      .setThumbnail(message.author.avatarURL)
      .addField(`**Message :**`, `${args}`)
      .addField("**By :**", `**${message.author}**`)
      .setFooter(`${message.author.tag}`, `${message.author.avatarURL}`)
      .setTimestamp();
    message.channel.sendEmbed(embedd);
    message.delete();
  }
});

client.on("message", message => {
  if (message.content.startsWith(prefix + "obc")) {
    if (!owner.includes(message.author.id))
      return message.reply("**6ix9ine Only:x:**");
    message.delete();
    let args = message.content.split(" ").slice(1);
    var argresult = args.join(" ");
    let embed = new Discord.RichEmbed()
      .setColor(`RANDOM`)
      .setDescription(`**! اكتب رسالة لأرسال البرودكاست**`)
      .addField(`**${prefix}obc [Bc Message]**`, `${message.author}`)
      .setFooter(`${message.author.tag}`, `${message.author.avatarURL}`)
      .setTimestamp()
      .setThumbnail(message.author.avatarURL);
    if (!argresult) return message.channel.sendEmbed(embed);
    message.guild.members
      .filter(m => m.presence.status !== "offline")
      .forEach(m => {
        m.send(`${argresult}\n ${m}`);
        message.delete();
      });
    const embeddd = new Discord.RichEmbed()
      .setColor("RANDOM")
      .addField(
        "**! تم ارسال برودكاست الي الاعضاء الاونلاين**",
        `**-----------------------**`
      )
      .setThumbnail(message.author.avatarURL)
      .addField(`**Message :**`, `${argresult}`)
      .addField("**By :**", `**${message.author}**`)
      .setFooter(`${message.author.tag}`, `${message.author.avatarURL}`)
      .setTimestamp();
    message.channel.sendEmbed(embeddd);
    message.delete();
  }
});



const change = "734136447832948817";
client.on("message", message => {
  let args = message.content
    .split(" ")
    .slice(1)
    .join(" ");
  if (message.content.startsWith(prefix + "setName")) {
    if (!change.includes(message.author.id))
      return message.reply("**6ix9ine Only:x:**");
    message.delete();
    let embed = new Discord.RichEmbed()
      .setColor(`RANDOM`)
      .setDescription(`**! اكتب اسم لتغير الاسم القديم**`)
      .addField(`**${prefix}setName [New Name]**`, `${message.author}`)
      .setFooter(`${message.author.tag}`, `${message.author.avatarURL}`)
      .setTimestamp()
      .setThumbnail(message.author.avatarURL);
    if (!args) return message.channel.sendEmbed(embed);
    client.user.setUsername(`${args}`);
    const name = new Discord.RichEmbed()
      .setColor("RANDOM")
      .setDescription(`**! تـم تـغـيـر الأسـم الـي : ${args}**`)
      .addField(`**By :**`, `**${message.author}**`)
      .setFooter(`${message.author.tag}`, `${message.author.avatarURL}`)
      .setTimestamp();
    message.channel.sendEmbed(name);
  }
});
client.on("message", message => {
  let args = message.content
    .split(" ")
    .slice(1)
    .join(" ");
  if (message.content.startsWith(prefix + "setname")) {
    if (!change.includes(message.author.id))
      return message.reply("**6ix9ine Only:x:**");
    message.delete();
    let embed = new Discord.RichEmbed()
      .setColor(`RANDOM`)
      .setDescription(`**! اكتب اسم لتغير الاسم القديم**`)
      .addField(`**${prefix}setname [New Name]**`, `${message.author}`)
      .setFooter(`${message.author.tag}`, `${message.author.avatarURL}`)
      .setTimestamp()
      .setThumbnail(message.author.avatarURL);
    if (!args) return message.channel.sendEmbed(embed);
    client.user.setUsername(`${args}`);
    const name = new Discord.RichEmbed()
      .setColor("RANDOM")
      .setDescription(`**! تـم تـغـيـر الأسـم الـي : ${args}**`)
      .addField(`**By :**`, `**${message.author}**`)
      .setFooter(`${message.author.tag}`, `${message.author.avatarURL}`)
      .setTimestamp();
    message.channel.sendEmbed(name);
  }
});

client.on("message", message => {
  let args = message.content
    .split(" ")
    .slice(1)
    .join(" ");
  if (message.content.startsWith(prefix + "setAvatar")) {
    if (!change.includes(message.author.id))
      return message.reply("**6ix9ine Only:x:**");
    message.delete();
    let embed = new Discord.RichEmbed()
      .setColor(`RANDOM`)
      .setDescription(`**! ضع رابط الصورة لتغير الصورة**`)
      .addField(`**${prefix}setAvatar [Avatar Link]**`, `${message.author}`)
      .setFooter(`${message.author.tag}`, `${message.author.avatarURL}`)
      .setTimestamp()
      .setThumbnail(message.author.avatarURL);
    if (!args) return message.channel.sendEmbed(embed);
    client.user.setAvatar(`${args}`);
    const avatar = new Discord.RichEmbed()
      .setColor("RANDOM")
      .setDescription(`**! تـم تـغـيـر الـصـورة**`)
      .addField(`**By :**`, `**${message.author}**`)
      .setFooter(`${message.author.tag}`, `${message.author.avatarURL}`)
      .setTimestamp();
    message.channel.sendEmbed(avatar);
  }
});
client.on("message", message => {
  let args = message.content
    .split(" ")
    .slice(1)
    .join(" ");
  if (message.content.startsWith(prefix + "setavatar")) {
    if (!change.includes(message.author.id))
      return message.reply("**6ix9ine Only:x:**");
    message.delete();
    let embed = new Discord.RichEmbed()
      .setColor(`RANDOM`)
      .setDescription(`**! ضع رابط الصورة لتغير الصورة**`)
      .addField(`**${prefix}setavatar [Avatar Link]**`, `${message.author}`)
      .setFooter(`${message.author.tag}`, `${message.author.avatarURL}`)
      .setTimestamp()
      .setThumbnail(message.author.avatarURL);
    if (!args) return message.channel.sendEmbed(embed);
    client.user.setAvatar(`${args}`);
    const avatar = new Discord.RichEmbed()
      .setColor("RANDOM")
      .setDescription(`**! تـم تـغـيـر الـصـورة**`)
      .addField(`**By :**`, `**${message.author}**`)
      .setFooter(`${message.author.tag}`, `${message.author.avatarURL}`)
      .setTimestamp();
    message.channel.sendEmbed(avatar);
  }
});

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});
client.on("ready", () => {
  client.user.setStatus("online");
});
//client.on("ready", () => {
//    client.user.setActivity(`6ix9ine Only.`, {
//        type: "playing"
//    });
//});

var statuss = ["", ``];
var secound = 10;
client.on("ready", () => {
  var timeing = Math.floor(secound * 1000);
  setInterval(function() {
    var ammount = statuss.length;
    var num = Math.floor(Math.random() * ammount);
    client.user.setActivity(statuss[num], { type: "" });
  }, timeing);
});

client.on("message", message => {
  if (message.content === prefix + "invite") {
    var SUPPORT =
      "https://discord.com/api/oauth2/authorize?client_id=705043813839667200&permissions=0&scope=bot";
    let embed = new Discord.RichEmbed()
      .setTitle(`Invite Link`)
      .setDescription(
        `                                                                                                                 
**[ Invite Link ](${SUPPORT})**`
      )
      .setColor("RANDOM")
      .setFooter(`${message.author.tag}`, `${message.author.avatarURL}`)
      .setTimestamp()
      .setThumbnail(`${message.author.avatarURL}`)
      .addField(`**By :**`, `${message.author}`);
    message.react("?");
    message.channel.send(embed);
  }
});

client.on("message", message => {
  if (message.content.startsWith(prefix + "bot")) {
    message.channel.send({
      embed: new Discord.RichEmbed()
        .setColor("RANDOM")
        .setTitle("**[ Broad Cast ]**")
        .addField("``Bot Name :``", `[ ${client.user.tag} ]`)
        .addField("``Bot ID :``", `[ ${client.user.id} ]`)
        .addField("``Servers :``", `[ ${client.guilds.size} ]`)
        .addField("``Channels :``", `[ ${client.channels.size} ]`)
        .addField("``Users :``", `[ ${client.users.size} ]`)
        .addField("``Bot Prefix :``", `[ ${prefix} ]`)
        .addField("``Owner :``", `<@670670491828224000>`)
        .setThumbnail(client.user.avatarURL)
        .setTimestamp()
        .setAuthor(client.user.tag, client.user.avatarURL)
        .setFooter(`${message.author.tag}`, `${message.author.avatarURL}`)
    });
  }
});

client.on("message", message => {
  if (message.author.bot) return;
  if (message.isMentioned(client.user)) {
    message.reply(`**Bot Prefix** : [ ${prefix} ]`);
  }
});

client.login("NzM1ODgwNjIwODEwNjk4ODEy.XxmsPA.BW8ygSfT2ZjginUqIJlnLmIgCQs");
