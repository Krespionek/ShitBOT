const randomPuppy = require('random-puppy');
const Discord = require('discord.js');

module.exports = {
    name: "memy",
    description: "Gives you a memy",
    async run (client, message, args){
        const subReddits = ["dankmeme", "meme", "memes"]
        const random = subReddits[Math.floor(Math.random() * subReddits.length)]

        const img = await randomPuppy(random);

        const embed = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setImage(img)
        .setTitle(`To jest spycjalny mem dla ciebie 💗`)
        .setURL(`https://www.reddit.com/r/Polska_wpz/`)

        message.channel.send(embed);
    }
}