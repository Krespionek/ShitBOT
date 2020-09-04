const weather = require('weather-js');

const Discord = require('discord.js');

module.exports = {
    name: "pogoda",
    description: "Checks a weather forecast",

    async run (client, message, args){

    weather.find({search: args.join(" "), degreeType: 'C'}, function (error, result){

        if(error) return message.channel.send(error);
        if(!args[0]) return message.channel.send('Prosze Podaj Lolalizacje')

        if(result === undefined || result.length === 0) return message.channel.send('**Nie znaleziono** Lokalizacji 🙁');

        var current = result[0].current;
        var location = result[0].location;

        const weatherinfo = new Discord.MessageEmbed()
        .setDescription(`**${current.skytext}**`)
        .setAuthor(`Weather forecast for ${current.observationpoint}`)
        .setThumbnail(current.imageUrl)
        .setColor(0x111111)
        .addField('Strefa czasowa', `UTC${location.timezone}`, true)
        .addField('Rodzaj stopnia', 'Celsius', true)
        .addField('Temperatura', `${current.temperature}°C`, true)
        .addField('Wiatr', current.winddisplay, true)
        .addField('Temperatura', `${current.feelslike}°C`, true)
        .addField('Wilgotność', `${current.humidity}%`, true)


        message.channel.send(weatherinfo)
        })        
    }
}