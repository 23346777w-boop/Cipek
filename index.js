const { Client, GatewayIntentBits } = require('discord.js');
require('dotenv').config();

const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });

client.once('ready', () => {
    console.log(`✅ Zalogowano jako ${client.user.tag}`);
});

client.on('messageCreate', message => {
    if (message.content === '!setup') {
        message.channel.send('🔧 Serwer Patusów ustawiony na pełnej kurwie!');
    }
});

client.login(process.env.TOKEN);