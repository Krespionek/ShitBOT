module.exports = {
    name: "restart",
    category: "owner",
    run: async (client, message, args) => {
        if (message.author.id !== '558294596262690820') {
            return message.channel.send(`Nie możesz użyć tego polecenia!`)
        }
        await message.channel.send(`Ponownie uruchamiam bota ...🚨`)
        process.exit();
    }
}