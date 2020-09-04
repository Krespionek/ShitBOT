const { MessageEmbed } = require("discord.js")
const { args } = require("discord.js")

module.exports = {
    name: "developer",
    run: async (cient, message, args) => {
        let user = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;

        const embed = new (MessageEmbed)()

        .setColor("#d40fcd")
        .setTitle(`ShitBOT Developer`)
        .setThumbnail('https://media.bitdegree.org/storage/media/images/2018/08/what-is-a-web-developer.jpg')
        .addField(`Krespion YouTube:`, `[YouTube](${user.user.displayAvatarURL()})`)
        .addField(`Discord:`, `Krespion#6860 [Avatar](${user.user.displayAvatarURL()})`)

        await message.channel.send(embed)
    }
        
}