const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
    if (msg.content === 'ping') {
        msg.reply('Pong!');
    }
});

client.login('NzM1NTYwODQ5NjE1MjI0OTU0.Xxi9QA.gJw-VFl3YUsi2K5ZC5MO44K3mVw');