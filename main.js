const Discord = require('discord.js');
const { prefix, token } = require('./config.json');

const client = new Discord.Client();

const fetch = require('node-fetch');

fetch('random.cat').then(response => response.json());

client.once('ready', () => {
    console.log('I am online! Type -help to view my commands.');
    a = 1;
    c = 0
});


client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot)return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();
    const reacts = message.react('😄');

    if(command === 'dancin'){
        if(a === 2){
            message.channel.send('is what I think Ill do');
            a--;
        } else {
            message.channel.send('is what to do');
            a++;
        }
    }
    if (command === 'react') {
        message.react('😄');
    }
});












client.login(token);
