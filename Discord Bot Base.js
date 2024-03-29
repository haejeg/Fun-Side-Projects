// libraries
const Discord = require('discord.js');

// gateway intents
const client = new Discord.Client({intents: [
  Discord.GatewayIntentBits.Guilds,
  Discord.GatewayIntentBits.GuildMessages,
  Discord.GatewayIntentBits.MessageContent,
  Discord.GatewayIntentBits.GuildMembers,
  Discord.GatewayIntentBits.GuildMessageReactions
]})

// functions!
function simpleReply(trigger, reply) {
    client.on('messageCreate', msg => {
        if (msg.content.toLowerCase() === trigger) {
          msg.reply(reply);
        }
    });
}

function listReply(trigger, reply) {
    client.on('messageCreate', msg => {
        for (let i = 0; i < trigger.length; i++) {
            if (msg.content.toLowerCase().includes(trigger[i])) {
                msg.reply(reply);
            }
        }
    });
}

function includeReply(trigger, reply) {
    client.on('messageCreate', msg => {
        if (msg.content.toLowerCase().includes(trigger)) {
          msg.reply(reply);
        }
    });
}

function includeReply(trigger, reply, reaction) {
    client.on('messageCreate', msg => {
        if (msg.content.toLowerCase().includes(trigger)) {
          msg.reply(reply);
          msg.react(reaction)
        }
    });
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  client.user.setActivity('~help');
});

simpleReply('~ping', 'pong')
simpleReply('~dice', 'you rolled a ' + getRandomInt(6))
simpleReply('~help', 'ping, dice)
 
client.login('add your token here');
