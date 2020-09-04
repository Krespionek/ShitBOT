module.exports = {
    name: "unmute",
    category: "moderation",
    run: async (client, message, args) => {
      if (!message.member.hasPermission("MANAGE_ROLES")) {
        return message.channel.send(
          "Przepraszamy, ale nie masz uprawnień do anulowania wyciszenia nikogo"
        );
      }
  
      if (!message.guild.me.hasPermission("MANAGE_ROLES")) {
        return message.channel.send("Nie mam uprawnień do zarządzania rolami.");
      }
  
      const user = message.mentions.members.first();
  
      if (!user) {
        return message.channel.send(
          "Oznacz osobe której chcesz dac jej unmuta"
        );
      }
      
      let muterole = message.guild.roles.cache.find(x => x.name === "Wyciszony/a")
      
      
   if(user.roles.cache.has(muterole)) {
        return message.channel.send("Podany użytkownik nie ma roli wyciszenia, || Lipa ||")
      }
      
      
      user.roles.remove(muterole)
      
      await message.channel.send(`**${message.mentions.users.first().username}** jest wyciszony`)
      
      user.send(`Nie jesteś teraz wyciszony **${message.guild.name}**`)
  
    }
  };