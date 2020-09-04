const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "mute",
  description: "Wycisz każdego, kto łamie zasady",
  category: "moderation",
  usage: "mute <wzmianka> <powód>",
  run: async (client, message, args) => {
    if (!message.member.hasPermission("MANAGE_ROLES")) {
      return message.channel.send(
        "Przepraszamy, ale nie masz uprawnień, aby nikogo wyciszyć"
      );
    }

    if (!message.guild.me.hasPermission("MANAGE_ROLES")) {
      return message.channel.send("Nie mam uprawnień do zarządzania rolami.");
    }

    const user = message.mentions.members.first();
    
    if(!user) {
      return message.channel.send("Oznacz osbe którą chcesz wyciszyć")
    }
    
    if(user.id === message.author.id) {
      return message.channel.send("Nie wyciszę Cię -_-");
    }
    
    
    let reason = args.slice(1).join(" ")
    
    
    if(!reason) {
      return message.channel.send("Proszę podać powód wyciszenia członka")
    }
    
  //TIME TO LET MUTED ROLE
    
    let muterole = message.guild.roles.cache.find(x => x.name === "Wyciszony/a")
    
    
      if(!muterole) {
      return message.channel.send("Ten serwer nie ma roli o nazwie `Wyciszony/a`")
    }
    
    
   if(user.roles.cache.has(muterole)) {
      return message.channel.send("Podany użytkownik jest już wyciszony")
    }
    
  
    
    
    user.roles.add(muterole)
    
await message.channel.send(`Wyciszony **${message.mentions.users.first().username}** za \`${reason}\``)
    
    user.send(`Jesteś wyciszony **${message.guild.name}** za \`${reason}\``)
    
    
//WE ARE DONE HERE 
    
  }
};