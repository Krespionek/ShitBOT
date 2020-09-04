const { MessageEmbed } = require('discord.js');

module.exports = {
    name: "avatar",
    run: async (client, message, args) => {
        let user = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;

        let status;

        const embed = new MessageEmbed()
            .setTitle(`Avatar: ${user.user.username}`)
            .setColor(`#f3f3f3`)
            .setThumbnail(user.user.displayAvatarURL())
            .addFields(
                {
                    name: "Name: ",
                    value: user.user.tag,
                    inline: true
                },
                {
                    name: 'Avatar link:',
                    value: `[Kliknij](${user.user.displayAvatarURL()})`
                },
            )

        await message.channel.send(embed)
    }
}