module.exports = {
    name: "clear",
    description: "Clears messages",

    async run (client, message, args) {

        if(!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send('Nie możesz usunąc wiadomośći 🤯')

        const amount = args.join(" ");

        if(!amount) return message.channel.send('Podaj liczbę wiadomości do usunięcia!')

        if(amount > 100) return message.channel.send(`Nie możesz wyczyścić więcej niż 100 Wiadomości!`)

        if(amount < 1) return message.channel.send(`Musisz usunąć przynajmniej jedną wiadomość!`)

        await message.channel.messages.fetch({limit: amount}).then(messages => {
            message.channel.bulkDelete(messages
    )});


    message.channel.send('Brawo 😱')

    }
}