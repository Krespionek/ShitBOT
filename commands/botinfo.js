const { MessageEmbed } = require('discord.js')
const os = require('os')
module.exports = {
    name: "bot",
    category: "bot",
    run: async (client, message, args) => {
        const embed = new MessageEmbed()
            .setThumbnail(client.user.displayAvatarURL())
            .setTitle('Statystyki Bota')
            .setColor('#9900e6')
            .addFields(
                {
                    name: '🌐 Serwer',
                    value: `Jest na ${client.guilds.cache.size} serwerach.`,
                    inline: true
                },
                {
                    name: '📺 Kanały',
                    value: `bot obsługuje: ${client.channels.cache.size} Kanałów.`,
                    inline: true
                },
                {
                    name: '👥 Użytkownicy serwera',
                    value: `Osoby ${client.users.cache.size}`,
                    inline: true
                },
                {
                    name: '⏳ Ping',
                    value: `${Math.round(client.ws.ping)}ms`,
                    inline: true
                },
                {
                    name: '🗓 Data dołączenia bota',
                    value: client.user.createdAt,
                    inline: true
                },
                {
                    name: 'Informacje o serwerze',
                    value: `Rdzenie: ${os.cpus().length}`,
                    inline: true
                }
            )
            .setFooter(`Created By: ${message.author.tag}`, message.author.displayAvatarURL())

        await message.channel.send(embed)
    }
}