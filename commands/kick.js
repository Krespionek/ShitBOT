const Discord = require('discord.js');

module.exports = {
    name: "kick",
    description: "Kick z serwera byczqu",

    async run (client, message, args) {

        if(!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send('Nie możesz tego użyć!')
        if(!message.guild.me.hasPermission("KICK_MEMBERS")) return message.channel.send('Nie masz permisji do tej komędy!.')

        const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);

        if(!args[0]) return message.channel.send('Oznacz osobe którą chcesz wyrzucić!');

        if(!member) return message.channel.send('Nie ma takiej osoby na serwerze');
        if(!member.kickable) return message.channel.send('Nie możesz wyrzucić tej osoby!');

        if(member.id === message.author.id) return message.channel.send('Nie możesz wyrzucić tej osoby!');

        let reason = args.slice(1).join(" ");

        if(reason === undefined) reason = 'Unspecified';

        member.kick(reason)
        .catch(err => {
        })

        const kickembed = new Discord.MessageEmbed()
        .setTitle('Kick przez Administracje')
        .setThumbnail(member.user.displayAvatarURL())
        .addField('Wyrzucony:', member)
        .addField('Wyrzucny przez:', message.author)
        .addField('Powód:', reason)
        .setFooter('Czas wyrzucenia', client.user.displayAvatarURL())
        .setTimestamp()

        message.channel.send(kickembed);


    }
}