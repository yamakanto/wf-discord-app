const dotenv = require('dotenv');
//require('http').createServer().listen(3000);
const Discord = require('discord.io');
const logger = require('winston');
const result = dotenv.config();

if (result.error) {
    throw result.error
}


// Configure logger settings
logger.remove(logger.transports.Console);
logger.add(new logger.transports.Console());
logger.level = 'debug';
// Initialize Discord Bot
const bot = new Discord.Client({
    autorun: true,
    token: process.env.BOT_TOKEN
});
bot.on('ready', function () {
    logger.info('Connected');
    logger.info('Logged in as: ');
    logger.info(bot.username + ' - (' + bot.id + ')');
});
bot.on('message', function (user, userID, channelID, message) {
    // Our bot needs to know if it will execute a command
    // It will listen for messages that will start with `!`
    if (message.substring(0, 3) === '!wf') {
        let args = message.substring(1).split(' ');
        //const cmd = args[0];
        const cmd1 = args[1];

        //args = args.splice(1);
        switch (cmd1) {
            // !ping
            case 'fish':
                bot.sendMessage({
                    to: channelID,
                    message: 'Cetus: https://hub.warframestat.us/fish \n' +
                        'Fortuna: https://www.framemastery.com/orb-vallis-fishing-guide/#Vallis_Fishing_Table'
                });
                break;
            case "":
                bot.sendMessage({
                    to: channelID,
                    message: ' bla'
                });
        }
    }
});