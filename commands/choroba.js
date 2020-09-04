const fetch = require('node-fetch');

const Discord = require('discord.js');

module.exports = {
    name: "choroba",
    description: "Śledź przypadki COVID-19 w kraju lub na całym świecie",

    async run (client, message, args){

        let countries = args.join(" ");

        //Credit to Sarastro#7725 for the command :)

        const noArgs = new Discord.MessageEmbed()
        .setTitle('Problem 🤔')
        .setColor(0xFF0000)
        .setDescription('Brakuje niektórych argumentów (np covid all || covid Poland)')
        .setTimestamp()

        if(!args[0]) return message.channel.send(noArgs);

        if(args[0] === "all"){
            fetch(`https://covid19.mathdro.id/api`)
            .then(response => response.json())
            .then(data => {
                let confirmed = data.confirmed.value.toLocaleString()
                let recovered = data.recovered.value.toLocaleString()
                let deaths = data.deaths.value.toLocaleString()

                const embed = new Discord.MessageEmbed()
                .setTitle(`Worldwide COVID-19 Na Całym Świecie 🌎`)
                .addField('Potwierdzone Przypadki', confirmed)
                .addField('Wyleczonych', recovered)
                .addField('Zmarło', deaths)

                message.channel.send(embed)
            })
        } else {
            fetch(`https://covid19.mathdro.id/api/countries/${countries}`)
            .then(response => response.json())
            .then(data => {
                let confirmed = data.confirmed.value.toLocaleString()
                let recovered = data.recovered.value.toLocaleString()
                let deaths = data.deaths.value.toLocaleString()

                const embed = new Discord.MessageEmbed()
                .setTitle(`COVID-19 Choroba w: **${countries}**`)
                .addField('Potwierdzone Przypadki', confirmed)
                .addField('Wyleczonych', recovered)
                .addField('Zmarło', deaths)

                message.channel.send(embed)
            }).catch(e => {
                return message.channel.send('**Podaj poprawny kraj!**')
            })
        }
    }
}