const Discord = require("discord.js");
const client = new Discord.Client();
const { Client, RichEmbed } = require("discord.js");

client.on("ready", () => {
  console.log(`I Am Ready!!`);
});
var prefix = "1";

let xv = ["734136447832948817", "505442667652448277", "505442667652448277"];

client.on("ready", () => {
  console.log(`Logged in as : ${client.user.username}`);
  client.user.setActivity(`بوت وسام المز`);
  client.user.setStatus("dnd");
});

client.on("message", async message => {
  if (message.content.startsWith(prefix + "help")) {
    if (!xv.includes(message.author.id))
      return message.reply("**:x: لا يحبيبي فقط لعمك وسام بس**");
    message.delete();
    let help = new Discord.RichEmbed()
      .setColor("RANDOM")
      .setFooter(`${message.author.tag}`, `${message.author.avatarURL}`)
      .setTimestamp()
      .setThumbnail(`${message.author.avatarURL}`)
      .setDescription(
        `**Ra3d BroadCast Bot Commands : 

          ${prefix}bc : لـ ارسال برودكاست الي الكل
          ${prefix}obc : لـ ارسال برودكاست الي الاونلاين
          
          ${prefix}setName : لـ تـغـيـر الأسـم
          ${prefix}setAvatar : لـ تـغـيـر الـصـورة
          
          ${prefix}invite : لـ دعوة الـبـوت
          ${prefix}bot : لـ معلومات البوت
          **`
      )
      .addField(`**الي برمج بوت وسام المز :**`, `**<@734136447832948817>**`);
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
    if (!xv.includes(message.author.id))
      return message.reply("**:x: لا يحبيبي فقط لعمك وسام بس**");
    message.delete();
    let embed = new Discord.RichEmbed()
      .setColor(`RANDOM`)
      .setTitle(`:x: خطا `)
      .setDescription(`**لا يا معلم قم بارسال الرساله بعد الامر على طول**`)
      .addField(
        `**مثال : 
${prefix}bc [ الرساله الي تبي ترسلها ]**`,
        `حاول مره ثانيه`
      )
      .setFooter(`${message.author.tag}`, `${message.author.avatarURL}`)
      .setTimestamp()
      .setThumbnail(message.author.avatarURL);
    if (!args) return message.channel.sendEmbed(embed);
    message.guild.members.forEach(m => {
      m.send(`${args}\n ${m}`)
        .then(() => {
          console.log(`لقد ارسلت الى : ${m.user.tag} بنجاح !`);
        })
        .catch(function() {
          console.log("لم اتمكن من الارسال الى : " + m.user.tag + "للاسف :(");
        });
    });
    message.delete();

    const embedd = new Discord.RichEmbed()
      .setColor("RANDOM")
      .addField("** تم ارسال رسالتك الى الاعضاء بنجاح ☺️ !**", `****`)
      .setThumbnail(message.author.avatarURL)
      .addField(`**الرساله التي قمت بارسالها الى الاعضاء :**`, `${args}`)
      .addField("**تم ارسال البرودكاست من قبل :**", `**${message.author}**`)
      .setFooter(`${message.author.tag}`, `${message.author.avatarURL}`)
      .setTimestamp();
    message.channel.sendEmbed(embedd);
    message.delete();
  }
});

client.on("message", message => {
  if (message.content.startsWith(prefix + "obc")) {
    if (!xv.includes(message.author.id))
      return message.reply("**:x: لا يحبيبي فقط لعمك وسام بس**");
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
      .addField("** تم ارسال رسالتك الى الاعضاء بنجاح ☺️ !**", `****`)
      .setThumbnail(message.author.avatarURL)
      .addField(`**الرساله التي قمت بارسالها الى الاعضاء :**`, `${args}`)
      .addField("**تم ارسال البرودكاست من قبل :**", `**${message.author}**`)
      .setFooter(`${message.author.tag}`, `${message.author.avatarURL}`)
      .setTimestamp();
    message.channel.sendEmbed(embeddd);
    message.delete();
  }
});

const change = [
  "734136447832948817",
  "505442667652448277",
  "505442667652448277"
];
client.on("message", message => {
  let args = message.content
    .split(" ")
    .slice(1)
    .join(" ");
  if (message.content.startsWith(prefix + "setName")) {
    if (!change.includes(message.author.id))
      return message.reply("**:x: لا يحبيبي فقط لعمك وسام بس**");
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
      return message.reply("**:x: لا يحبيبي فقط لعمك وسام بس**");
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
      return message.reply("**:x: لا يحبيبي فقط لعمك وسام بس**");
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
      return message.reply("**:x: لا يحبيبي فقط لعمك وسام بس**");
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

client.on("message", message => {
  if (message.content === prefix + "invite") {
    var SUPPORT =
      "https://discord.com/api/oauth2/authorize?client_id=735880620810698812&permissions=8&scope=bot";
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
    message.reply(`**برفكس بوت وسام** : [ ${prefix} ]`);
  }
});

client.login(process.env.token);
