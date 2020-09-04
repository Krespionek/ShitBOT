const { MessageEmbed } = require('discord.js');

module.exports = {
    name: "invite",
    run: async (client, message, args) => {
        let user = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;

        let status;
        switch (user.presence.status) {
        }

        const embed = new MessageEmbed()
            .setTitle(`Linki:`)
            .setColor(`RANDOM`)
            .addFields(
                {
                    name: 'Dodaj Bota: ',
                    value: `[Kliknij](https://discord.com/api/oauth2/authorize?client_id=749193014726885476&permissions=8&scope=bot)`
                },
                {
                    name: 'Serwer Developerski:',
                    value: `[Kliknij](https://discord.gg/mpFAQ8M)`
                }
            
                
            )

        await message.channel.send(embed)
    }
}