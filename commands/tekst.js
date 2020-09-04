const figlet = require('figlet');

module.exports = {
    name: "tekst",
    description: "Konwertuje tekst na tekst",

    async run (client, message, args){
        if(!args[0]) return message.channel.send('Proszę podać tekst');

        msg = args.join(" ");

        figlet.text(msg, function (err, data){
            if(err){
                console.log('Coś poszło nie tak');
                console.dir(err);
            }
            if(data.length > 2000) return message.channel.send('Wpisz tekst krótszy niż 2000 znaków')

            message.channel.send('```' + data + '```')
        })
    }
}