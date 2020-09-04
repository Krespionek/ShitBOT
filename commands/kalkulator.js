const math = require('mathjs');

const Discord = require('discord.js');

module.exports = {
    name: "oblicz",
    description: "Uzyskaj odpowiedź na problem matematyczny",


    async run (client, message, args){

        if(!args[0]) return message.channel.send('Proszę podać Działanie');

        let resp;

        try {
            resp = math.evaluate(args.join(" "))
        } catch (e) {
            return message.channel.send('Podaj ** prawidłowe ** Działanie!')
        }

        const embed = new Discord.MessageEmbed()
        .setColor(0x808080)
        .setTitle('Kalkulator')
        .addField('Pytanie', `\`\`\`css\n${args.join(' ')}\`\`\``)
        .addField('Odpowiedź', `\`\`\`css\n${resp}\`\`\``)

        message.channel.send(embed);

    }
}