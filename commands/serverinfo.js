const { MessageEmbed } = require('discord.js');

module.exports = {
    name: "serwer",
    category: "extra",
    run: async (client, message, args) => {
        let region;
        switch (message.guild.region) {
            case "europe":
                region = '🇪🇺 Europe';
                break;
            case "us-east":
                region = '🇺🇸 us-east'
                break;
            case "us-west":
                region = '🇺🇸 us-west';
                break;
            case "us-south":
                region = '🇺🇸 us-south'
                break;
            case "us-central":
                region = '🇺🇸 us-central'
                break;
        }

        const embed = new MessageEmbed()
            .setThumbnail(message.guild.iconURL({dynamic : true}))
            .setColor('#48ff00')
            .setTitle(` Statystyki serwera: ${message.guild.name}:`)
            .addFields(
                {
                    name: "👑 Właściciel:",
                    value: message.guild.owner.user.tag,
                    inline: true
                },
                {
                    name: "👤 Osoby: ",
                    value: `Jest: ${message.guild.memberCount} Osób`,
                    inline: true
                },
                {
                    name: "👥 Online: ",
                    value: `Jest: ${message.guild.members.cache.filter(m => m.user.presence.status == "online").size} Online!`,
                    inline: true
                },
                {
                    name: "🤖 Boty: ",
                    value: `Jest: ${message.guild.members.cache.filter(m => m.user.bot).size} Boty`,
                    inline: true
                },
                {
                    name: "🗓 Data utworzenia: ",
                    value: message.guild.createdAt.toLocaleDateString("en-us"),
                    inline: true
                },
                {
                    name: "⚜ Role: ",
                    value: `Jest ${message.guild.roles.cache.size} roli na tym serwerze.`,
                    inline: true,
                },
                {
                    name: `🗺 Region: `,
                    value: region,
                    inline: true
                },
                {
                    name: `✅ Weryfikacja: `,
                    value: message.guild.verified ? 'Serwer jest zweryfikowany' : `Serwer nie jest zweryfikowany`,
                    inline: true
                },
                {
                    name: '🔰 Boosty: ',
                    value: message.guild.premiumSubscriptionCount >= 1 ? `Są: ${message.guild.premiumSubscriptionCount} Busty` : `Nie ma boostów`,
                    inline: true
                },
                {
                    name: "💠Emotki ",
                    value: message.guild.emojis.cache.size >= 1 ? `Są: ${message.guild.emojis.cache.size} Emotki!` : 'Nie ma emotek!' ,
                    inline: false
                }   
            )
        await message.channel.send(embed)
    }
}