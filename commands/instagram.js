const axios = require('axios')
const { MessageEmbed } = require('discord.js');
module.exports = {
    name: "instagram",
    run: async (client, message, args) => {
        if (!args[0]) {
            return message.channel.send(`Wprowadź nazwę instagrama!`)
        }
        let url, response, account, details;
        try {
            url = `https://instagram.com/${args[0]}/?__a=1`;
            response = await axios.get(url)
            account = response.data
            details = account.graphql.user
        } catch (error) {
            return message.channel.send(`Takie konto nie intnieje!`)
        }

        const embed = new MessageEmbed()
            .setTitle(`${details.is_verified ? `${details.username}  | ✅ | ` : ` ${details.username}`} ${details.is_private ? '🔒' : ''} `)
            .setDescription(details.biography)
            .setThumbnail(details.profile_pic_url)
            .addFields(
                {
                    name: "Wszystkie posty:",
                    value: details.edge_owner_to_timeline_media.count.toLocaleString(),
                    inline: true
                },
                {
                    name: "Obserwujący:",
                    value: details.edge_followed_by.count.toLocaleString(),
                    inline: true
                },
                {
                    name: "Obserwuje:",
                    value: details.edge_follow.count.toLocaleString(),
                    inline: true
                }
            )
        await message.channel.send(embed)

    }
}