const TelegramBot = require('node-telegram-bot-api');
const request = require('request');

const token = '523965751:AAEwBLiqYtS6du9lxpTeJey1u9NLUhoxpy8';
const url = 'http://sandbox.api.simsimi.com/request.p?key=2da42aa6-7f62-4e1d-97fc-727e7b22aab1&lc=en&ft=1.0&text=';

const bot = new TelegramBot(token, { polling: true });

bot.on('message', (msg) => {
    const chatId = msg.chat.id;

    request(url + msg.text.toString(), (err, response, body) => {
        bot.sendMessage(chatId, JSON.parse(body).response);
    });
});