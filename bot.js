const TelegramBot = require('node-telegram-bot-api');
const request = require('request');
require('dotenv').config();

const url = `http://sandbox.api.simsimi.com/request.p?key=${process.env.SIMSIMI_KEY}&lc=en&ft=1.0&text=`;

const bot = new TelegramBot(process.env.TELEGRAM_TOKEN, { polling: true });

bot.on('message', (msg) => {
    const chatId = msg.chat.id;

    request(url + msg.text.toString(), (err, response, body) => {
        bot.sendMessage(chatId, JSON.parse(body).response);
    });
});