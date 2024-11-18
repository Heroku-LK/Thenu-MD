const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "Fu93DSAS#REOYweYsbhX5Jwa2X5vrht_WQpKrReGGeZEg5olWZJQ",
MONGODB: process.env.MONGODB || "mongodb://mongo:femHfGLKcnAgOqrZAMfiRNTHAbRGzJyM@junction.proxy.rlwy.net:22564",
PREFIX: process.env.PREFIX || ".",
BOT_NAME: process.env.BOT_NAME || "Thenu-MD",
BOT_NUMBER: process.env.BOT_NUMBER || "94767096711",
AUTO_AI: process.env.AUTO_AI || "false",
LANG: process.env.LANG || "SI"

};
