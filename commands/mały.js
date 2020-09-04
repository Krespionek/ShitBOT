const { MessageEmbed } = require("discord.js");
const { arg } = require("discord.js");

module.exports = {
    name: "maly" ,
    category: "extra",
    run: async (client, message, args) => {

        const embed = new MessageEmbed()
        .setColor('#ff0000')
        .setTitle(` Statystyki Dicksona Ganio: `)
        .setThumbnail(client.user.displayAvatarURL())
        .addField('Szerokość: ', '2cm')
        .addField('Długość: ', '15cm')
        .addField('Odległość na jaką sika:', '4050203km')
        .addField('P.S', 'Jebać ZombelleQa (Bez urazy)')
        .setThumbnail('https://twojememy.pl/wp-content/uploads/2017/10/Kiedy-tylko-dziwka-zna-odpowiedz.jpg')
        .setFooter(`Stworzone przez: ${message.author.tag}`, message.author.displayAvatarURL())

        await message.channel.send(embed)

    }
}