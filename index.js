const Discord = require('discord.js');
const bot = new Discord.Client();

bot.on('ready', () => {
    console.log('Ready to go!');
});

bot.on('message', message => {
    if (/\bC(\+{2}|#)?\b/i.test(message.cleanContent)) {
        console.log(`${message.guild.name}#${message.channel.name} [${message.author.username}] ${message.cleanContent}`);
    }
});

bot.login(require('./config.json').token);
