const { Client, MessageEmbed } = require('discord.js');
const db = require("quick.db")

const client = new Client();

const Discord = require('discord.js');

const { token } = require('./config.json');

const { readdirSync } = require('fs');

const { join } = require('path');
const { random } = require('mathjs');

client.commands= new Discord.Collection();

 

const prefix = '$';

const commandFiles = readdirSync(join(__dirname, "commands")).filter(file => file.endsWith(".js"));

for (const file of commandFiles) {
    const command = require(join(__dirname, "commands", `${file}`));
    client.commands.set(command.name, command);
}


client.on("error", console.error);

client.on('ready', () => {
    console.log('Gotowe Byczqu');
    client.user.setActivity("prefix $ | Bot: 24/7 |",{type: 'STREAMING'});
});


let stats = {
    serverID: '<SERVER ID>',
    total: "<ID>",
    member: "<ID>",
    bots: "<ID>"
}



client.on('guildMemberAdd', member => {
    if(member.guild.id !== stats.serverID) return;
    client.channels.cache.get(stats.total).setName(`Total Users: ${member.guild.memberCount}`);
    client.channels.cache.get(stats.member).setName(`Members: ${member.guild.members.cache.filter(m => !m.user.bot).size}`);
    client.channels.cache.get(stats.bots).setName(`Bots: ${member.guild.members.cache.filter(m => m.user.bot).size}`);
})

client.on('guildMemberRemove', member => {
    if(member.guild.id !== stats.serverID) return;
    client.channels.cache.get(stats.total).setName(`Total Users: ${member.guild.memberCount}`);
    client.channels.cache.get(stats.member).setName(`Members: ${member.guild.members.cache.filter(m => !m.user.bot).size}`);
    client.channels.cache.get(stats.bots).setName(`Bots: ${member.guild.members.cache.filter(m => m.user.bot).size}`);

    
})

client.on("message", async message => {

    if(message.author.bot) return;
    if(message.channel.type === 'dm') return;

    if(message.content.startsWith(prefix)) {
        const args = message.content.slice(prefix.length).trim().split(/ +/);

        const command = args.shift().toLowerCase();

        if(!client.commands.has(command)) return;


        try {
            client.commands.get(command).run(client, message, args);

        } catch (error){
            console.error(error);
        }
    }
})
////////////////////////////
//Wlecome
////////////////////////////
client.on("guildMemberAdd", (member) => {
    let chx = db.get(`welchannel_${member.guild.id}`);
    
    if(chx === null) {
      return;
    }
  
    let wembed = new MessageEmbed()
    .setAuthor(member.user.username, member.user.avatarURL())
    .setColor("#1eff00")
    .setThumbnail(member.user.avatarURL())
    .setDescription(`Witamy cię mamy nadzeje, że będziesz dobrze się tutaj bawaić`)
    .setFooter(`Stworzone:`, member.user.avatarURL())
    .setTimestamp()
    
    client.channels.cache.get(chx).send(wembed)
  })
  

////////////////////////////
//pomoc
///////////////////////////


  client.on('message', message => {
    if (message.content === '$pomoc') {
      const embed = new MessageEmbed()


        .setTitle('Pomoc:')
        .setColor('#4dff00')
        .addField(`Pomoec jest w trakcie roboty dla servera: ${message.guild.name}`, 'Miłego Bota życzy Krespiona haha 💗')
        .addField('Podstawowe:', '`pomoc` , `serwer` , `bot` , `userinfo` , `developer`.')
        .addField('Komendy Moderacyjne: ', '`powitania` , `ban` , `bany` , `kick` , `clear` , `mute` , `unmute` , `warn` , `unwarn` , `dm`.')
        .addField(`Przydatne:`, '`instagram` , `pogoda` , `ping` , `choroba` , `oblicz` , `avatar` , `emoji`.')
        .addField('Bocik:', '`bot` , `invite` , `ping` **,** `prefix $`.')
        .addField('4Fun', '`memy` , `tekst` , `będą tutaj ziwrzęta jescze`')
        .addField('Burdel +18', '`maly`')
        .setThumbnail('https://acegif.com/wp-content/uploads/loading-11.gif')

      message.channel.send(embed);
    }
  });




client.login('NzQ5MTkzMDE0NzI2ODg1NDc2.X0oaXg.elpRKlTKXwB_AZJ1I8-0mfI_qa4');