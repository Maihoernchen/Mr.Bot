const Discord = require('discord.js');
const { prefix, token } = require('./config.json');

const client = new Discord.Client();

const fetch = require('node-fetch');

client.once('ready', () => {
    console.log('I am online! Type -help to view my commands.');
    a = 1;
    c = 0
});

function Sleep(milliseconds) {
    return new Promise(resolve => setTimeout(resolve, milliseconds));
}

client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.id === client.user.id)return;
        const args = message.content.slice(prefix.length).split(/ +/);
        const command = args.shift().toLowerCase();
        if(command === 'dancin_lyrics'){
            message.delete();
            message.channel.send('Get up on the floor');
            message.channel.send('Dancin all night long');
            message.channel.send('Get up on the floor');
            message.channel.send('Dancin till the break of dawn');
            message.channel.send('Get up on the floor');
            message.channel.send('Dancin till the break of dawn');
            message.channel.send('Get up on the floor');
            message.channel.send('Dancin');
            message.channel.send('➖➖➖');
            message.channel.send('All the time');
            message.channel.send('My baby you on my mind');
            message.channel.send('And I dont know why');
            message.channel.send('Yeah but the feeling is fine');
            message.channel.send('Cant you see');
            message.channel.send('Yo honey you are for me oh');
            message.channel.send('It were meant to be');
            message.channel.send('➖➖➖');
            message.channel.send('Dancin in the moonlight');
            message.channel.send('Gazing at the stars so bright');
            message.channel.send('Holding you until the sunrise');
            message.channel.send('Sleeping until the midnight');
            message.channel.send('➖➖➖');
            message.channel.send('Get up on the floor');
            message.channel.send('Dancin all night long');
            message.channel.send('Get up on the floor');
            message.channel.send('Dancin till the break of dawn');
            message.channel.send('Get up on the floor');
            message.channel.send('Dancin till the break of dawn');
            message.channel.send('Get up on the floor');
            message.channel.send('Dancin');
            message.channel.send('➖➖➖');
            message.channel.send('Dancin is what to do');
            message.channel.send('Dancin when I think of you');
            message.channel.send('Dancin is what clears my soul');
            message.channel.send('Dancin is what makes me whole');
            message.channel.send('Dancin is what to do');
            message.channel.send('Dancin when I think of you');
            message.channel.send('Dancin is what clears my soul');
            message.channel.send('Dancin is what makes me whole');
            message.channel.send('➖➖➖');
            message.channel.send('Everytime when I look in your eyes');
            message.channel.send('I smile with pride, happy that youre mine');
            message.channel.send('Do you know, your love is true I know');
            message.channel.send('You are the best thing that has happened to me');
            message.channel.send('➖➖➖');
            message.channel.send('Get up on the floor');
            message.channel.send('Dancin all night long');
            message.channel.send('Get up on the floor');
            message.channel.send('Dancin till the break of dawn');
            message.channel.send('Get up on the floor');
            message.channel.send('Dancin till the break of dawn');
            message.channel.send('Get up on the floor');
            message.channel.send('Dancin');
            message.channel.send('➖➖➖');
            message.channel.send('Dancin is what to do');
            message.channel.send('Dancin when I think of you');
            message.channel.send('Dancin is what clears my soul');
            message.channel.send('Dancin is what makes me whole');
            message.channel.send('Dancin is what to do');
            message.channel.send('Dancin when I think of you');
            message.channel.send('Dancin is what clears my soul');
            message.channel.send('Dancin is what makes me whole');
            message.channel.send('➖➖➖');
            message.channel.send('Get up on the floor');
            message.channel.send('Dancin all night long');
            message.channel.send('Get up on the floor');
            message.channel.send('Dancin till the break of dawn');
            message.channel.send('Get up on the floor');
            message.channel.send('Dancin till the break of dawn');
            message.channel.send('Get up on the floor');
            message.channel.send('Dancin');
            message.channel.send('➖➖➖');
            message.channel.send('Get up on the floor');
            message.channel.send('Dancin all night long');
            message.channel.send('Get up on the floor');
            message.channel.send('Dancin till the break of dawn');
            message.channel.send('Get up on the floor');
            message.channel.send('Dancin till the break of dawn');
            message.channel.send('Get up on the floor');
            message.channel.send('Dancin');
            message.channel.send('➖➖➖');
            message.channel.send('Dancin is what to do');
            message.channel.send('Dancin when I think of you');
            message.channel.send('Dancin is what clears my soul');
            message.channel.send('Dancin is what makes me whole');
            message.channel.send('Dancin is what to do');
            message.channel.send('Dancin when I think of you');
            message.channel.send('Dancin is what clears my soul');
            message.channel.send('Dancin is what makes me whole');
            message.channel.send('➖➖➖');
            message.channel.send('Dancin is what to do');
            message.channel.send('Dancin when I think of you');
            message.channel.send('Dancin is what clears my soul');
            message.channel.send('Dancin is what makes me whole');
            message.channel.send('Dancin is what to do');
            message.channel.send('Dancin when I think of you');
            message.channel.send('Dancin is what clears my soul');
            message.channel.send('Dancin is what makes me whole');

        }
        if (command === 'clear') {
            message.delete();    
            var mtc = args;
                if (mtc.length == 0) {
                    message.channel.send("Can't clear Nothing.");
                } else if (mtc == "0") {
                    message.channel.send("Can't clear Nothing.");
                } else {
                    message.channel.bulkDelete(parseInt(mtc))
                    .then(messages => console.log(`Bulk deleted ${messages.size} messages`))
                    .catch(console.error);
                }
        }
        if (command === 'Flachwitz') {
            message.channel.send('yee');
            var WITZIG = ["Was ist weiß und guckt durchs Schlüsselloch? — Ein Spannbettlaken.", "Welches Getränk trinken Firmenchefs? — Leitungswasser", "Was sagt ein Origami-Lehrer zu seinem Schüler? — „Das kannste knicken.“","Brennholzverleih","Was findet man beim Kannibalen in der Dusche? — Head and Shoulders.","Was passiert wenn man Cola und Bier gleichzeitig trinkt? — Man colabiert.","Was essen Autos am liebsten? — Parkplätzchen.","Was macht eine Bombe im Bordell? — Puff.","Wie heißt ein Spanier ohne Auto? — Carlos","Was sitzt auf einem Baum und winkt? — Ein Huhu!"];
            var randomItem = WITZIG[Math.floor(Math.random()*WITZIG.length)];
            message.channel.send(randomItem);
        }
        if (command === 'stopttsing') {
            message.delete();
            message.channel.send('nein du keck');
        }
        if (command === 'p'){
            var text_fin = args.join(" ");
            if(text_fin.length == 0) {
                message.channel.send("cannot send empty message", {
                tts: true
            }) .then(b_msg => {
            b_msg.delete({ timeout: 30000})
            }).catch(err => console.log('ups' + err))
            message.delete();
            console.log('cannot send empty message');
            } else {
                message.channel.send(text_fin, {tts: true}).catch(err => console.log('ups' + err))
            }
        }
        if(command === 'dancin'){
            message.delete();
            message.channel.send('!play https://www.youtube.com/watch?v=TQAiClbJ_1M');
        }
        if(command === 's'){
            var text_fin = args.join(" ");
            if(text_fin.length == 0) {
                message.channel.send("cannot send empty message", {
                tts: true
            }) .then(b_msg => {
            b_msg.delete({ timeout: 3})
            }).catch(err => console.log('ups' + err))
            message.delete();
            console.log('cannot send empty message');
            } else {
                message.delete();
                message.channel.send(text_fin, {tts: true}).catch(err => console.log('ups' + err))
                message.react('✅').then(() => message.react('☑️'));
                const filter = (reaction, user) => {
                return ['✅', '☑️'].includes(reaction.emoji.name) && user.id === message.author.id;
                };
                message.awaitReactions(filter, { max: 2, time: 60000, errors: ['time'] })
                .then(collected => {
                const reaction = collected.first();
                if (reaction.emoji.name === '✅') {
                    message.delete();
                } else {
                    message.reply('nah.');
                }
	        })
	        .catch(collected => {
		    message.reply('Please contact a dev-member if you want to know the error...');
	        });
            }
        }
        if (command === 'stop') {
            message.channel.send("Engine. Powering. Down.");
            process.exit(1);
        }
});



client.login(token);

