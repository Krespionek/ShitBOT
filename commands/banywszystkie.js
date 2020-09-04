const { MessageEmbed, User } = require('discord.js');

module.exports = {
    name: "bany",
    category: "extra",
    run: async (client, message, args) => {

        message.guild.fetchBans().then(bans => {
            message.channel.send(`Jest razem ${bans.size} zbanownych`)
        })

    }
}