const { Intents, MessageEmbed } = require('discord.js');
const Client = require('./structures/Client');
const client = new Client({
    owner: '',
    ws: { intents: [Intents.NON_PRIVILEGED, 'GUILD_MEMBERS'] },
    disableMentions: 'everyone',
    commandPrefix:'>>'
});
const path = require('path');
const Database = require("@replit/database")
const db = new Database()



client.registry
    .registerGroups([
        ['util', 'Util commands'],
        ['owner', 'Bot Owner commands'],
        ['admin', 'Server Owner commands']
    ])
    .registerDefaults()
    .registerCommandsIn(path.join(__dirname, 'commands'));

client.login(process.env.CD_TOKEN)