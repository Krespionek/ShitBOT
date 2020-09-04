const Discord = require("discord.js");
module.exports= {
  name: 'ban',
  category: 'moderation',
  description: 'ban a members',
  run: async(client,message,args,guild) => {
    let banned = message.mentions.users.first() || client.users.resolve(args[0]);
    let reason = args.slice(1).join(" ");
  
    //Wiadomośći
  
    if (!banned) {
      let baninfoembed = new Discord.MessageEmbed()
        .setTitle("Błąd:")
        .setDescription(
          `**Poprawne użycie: ban | oznaczenie | | powód | . \n` +
            ""
        )
        .setColor("#ff1100");
      message.channel.send(baninfoembed);
  
      return;
    }
  
    if (message.author === banned) {
      let sanctionyourselfembed = new Discord.MessageEmbed()
        .setDescription(`Nie możesz samego siebie zbanować  || (Nie ładnie)) ||`)
        .setColor("#ff1100");
      message.channel.send(sanctionyourselfembed);
  
      return;
    }
  
    if (!reason) {
      let noreasonembed = new Discord.MessageEmbed()
        .setDescription(`Podaj powód zbanowania`)
        .setColor("#ff1100");
      message.channel.send(noreasonembed);
  
      return;
    }
  
    if (!message.member.permissions.has("BAN_MEMBERS")) {
      let nopermsembed = new Discord.MessageEmbed()
        .setDescription(
          "Nie masz permisji do Banowania || (Takie, życie) ||"
        )
        .setColor("#ff1100");
      message.channel.send(nopermsembed);
  
      return;
    }
  
    if (!message.guild.me.permissions.has("BAN_MEMBERS")) {
      let botnopermsembed = new Discord.MessageEmbed()
        .setDescription(
          "Nie masz permisji do Banowania labo nie jestes administarorem tego serwera || Takie, życie ||"
        )
        .setColor("#ff1100");
      message.channel.send(botnopermsembed);
  
      return;
    }
  
    message.guild.members.ban(banned, { reason: reason });
  
    let successfullyembed = new Discord.MessageEmbed()
      .setTitle(`${banned.tag}`)
      .addField(`Powód: ${reason}`)
      .setURL(`https://media4.giphy.com/media/qPD4yGsrc0pdm/giphy.gif?cid=ecf05e47kz8y22tmxcw62e3dyqsj8v2srm8znelra9sm1p9i&rid=giphy.gif`)
      .setColor("#ff1100");
  
    message.channel.send(successfullyembed);
  }
}