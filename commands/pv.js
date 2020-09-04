module.exports = {
    name: "dm",
    description: "pv użytkownika w gildii",
    run: async (bot, message, args) => {
      if (!message.member.permissions.has("MANAGE_MESSAGES"))
        return message.channel.send("Nie masz wystarczających uprawnień!");
      let user =
        message.mentions.members.first() ||
        message.guild.members.cache.get(args[0]);
      if (!user)
        return message.channel.send(
          `Nie oznaczyłeś użytkownika lub podałeś nieprawidłowy identyfikator`
        );
      if (!args.slice(1).join(" "))
        return message.channel.send("Nie podałeś wiadomości");
      user.user
        .send(args.slice(1).join(" "))
        .catch(() => message.channel.send("Ten użytkownik nie mógł być Pv"))
        .then(() => message.channel.send(`Wysłano wiadomość do ${user.user.tag}`));
    },
  };