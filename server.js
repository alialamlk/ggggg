const Discord = require("discord.js");
const client = new Discord.Client();
const { Client, RichEmbed } = require("discord.js");

client.on("ready", () => {
  console.log(`I Am Ready!!`);
});

var prefix = "1";

let xv = ["734136447832948817", "609544947816988702", "747128820599095366"];

client.on("ready", () => {
  console.log(`Logged in as : ${client.user.username}`);
  client.user.setActivity(`${prefix}help I Ra3d Bc V2`);
  client.user.setStatus("dnd");
});

client.on("message", async message => {
  if (message.content.startsWith(prefix + "help")) {
    if (!xv.includes(message.author.id))
      return message.reply("**:x: مين قالك تزرفني ؟ وربي ما اشتغل**");
    message.delete();
    let help = new Discord.RichEmbed()
      .setColor("RANDOM")
      .setFooter(`${message.author.tag}`, `${message.author.avatarURL}`)
      .setTimestamp()
      .setThumbnail(`${message.author.avatarURL}`)
      .setDescription(
        `**قائمة المساعدة :

        \`\`\`أوامر البرودكاست\`\`\`
${prefix}bc  :
\`لنشر برود كاست للكل\`
${prefix}obc : 
\`لنشر برود كاست للاون لاين فقط\`

\`\`\`أوامر الاونرات\`\`\`
${prefix}settings : 
\`لمعرفه الاوامر المتاحه\`
${prefix}setname : 
\`لتغير اسم البوت\`
${prefix}setavatar : 
\`لتغير صوره البوت\`
${prefix}settings setgame : 
\`(الحاله الي من تحت "الكلام") لتغير حاله حقت البوت\`
${prefix}settings setstatus : 
\`(الحاله حقت الاوان) لتغير حاله حقت البوت\`
          **`
      )
      .addField(`> Bot Developers : `,`<@734136447832948817> - <@609544947816988702>`);
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
      return message.reply("**:x: مين قالك تزرفني ؟ وربي ما اشتغل**");
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
      return message.reply("**:x: مين قالك تزرفني ؟ وربي ما اشتغل**");
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



client.on("message", message => {
  let args = message.content
    .split(" ")
    .slice(1)
    .join(" ");
  if (message.content.startsWith(prefix + "setname")) {
    if (!xv.includes(message.author.id))
      return message.reply("**:x: مين قالك تزرفني ؟ وربي ما اشتغل**");
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
  if (message.content.startsWith(prefix + "setavatar")) {
    if (!xv.includes(message.author.id))
      return message.reply("**:x: مين قالك تزرفني ؟ وربي ما اشتغل**");
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
      "https://discord.gg/47AcXf4xmu";
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
        .addField("``Owner :``", `<@734136447832948817>`)
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
    message.reply(`**برفكس البوت ** : [ ${prefix} ]`);
  }
});

const Enmap = require("enmap");

const db = new Enmap({name: "Taxes"});


client.on('message', async message => {
 
  
let ac = ["listening", "watching", "playing", "streaming","default"];
let ac2 = ["online", "idle", "invisible", "dnd","default"];

  if(!message.channel.guild || message.author.bot) return;
 let args = message.content.split(" ");
  if (args[0] === (prefix + 'settings')) {
   if (!xv.includes(message.author.id)) return;
    else if (args[1] === 'setgame') {
    var ssss = message.content.split(" ").slice(1);  
    var result = ssss.slice(2).join(" ");

     if (!ssss || !result) return message.channel.send('**:x: Error : Usage **' + prefix + '**settings setgame [type] [game]**');
     if (!ac.includes(ssss[1].toLowerCase())) return message.channel.send('**:x: Unknown type.**\n\n> **Available Type(s) :**\n> [ `Listening` | `Watching` | `Playing` | `Streaming` | `Default` ]**');
      await  db.set(client.user.id, ssss[1].toUpperCase(), "type");
      await  db.set(client.user.id, result.replace("default",`Wessam Bot.`), "game");
      await  client.user.setActivity(db.get(client.user.id, "game"), {
      type: db.get(client.user.id, "type"),
      url: "https://twitch.tv/"
    });
       message.channel.send(`**✅ Done , The bot status game was changed into : ${result}**`);
       message.react('✅');
    } else if (args[1] === 'setstatus') {
     if (!args[2]) return message.channel.send('**:x: Error : Usage **' + '**' + prefix + '**' + '**settings setstatus [status]**');
     if (!ac2.includes(args[2].toLowerCase())) return message.channel.send('**:x: Unknown Status.**\n\n> **Available Status(s) :**\n> [ `Online` | `Offline` | `Dnd` | `Idle` | `Default` ]**');
      await  db.set(client.user.id, args.slice(2).join(" ").replace("default",`online`), "status");
      await  client.user.setStatus(db.get(client.user.id, "status"));
      message.channel.send(`**✅ Done , The bot status color was changed into : ${args[2]}**`);
       message.react('✅');
    } else { 
       message.channel.send(`> **:bulb: Usage**: ${prefix}settings [  \`setgame\` - \`setstatus\` ]`);
       message.react('🎆');
    }
  }
});

client.login(process.env.token);
