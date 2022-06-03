const { Client, Intents, MessageActionRow, MessageButton, Message, Collection } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES]});

const config = require('./config.json');

const db = require('./models/database');
const Whitelist = require('./models/Whitelist');

client.commands = new Collection();
client.events = new Collection();

['event_handler'].forEach(handler => {
    require(`./handlers/${handler}`)(client, Client)
});

client.login(config.general[0].token);