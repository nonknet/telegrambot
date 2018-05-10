const TelegramBot = require('536596192:AAEkE0hSpim7eELbZIgAAWZInQiP349ycvU');
const request = require('request');
require('dotenv').config();

const url = `http://sandbox.api.simsimi.com/request.p?key=$db6a90c1-5e62-46f1-8cd0-7f44f364480a&lc=id&ft=1.0&text=`;

const bot = new TelegramBot536596192:AAEkE0hSpim7eELbZIgAAWZInQiP349ycvU, { polling: true });

bot.on('message', (msg) => {
    const chatId = msg.chat.id;

    request(url + msg.text.toString(), (err, response, body) => {
        bot.sendMessage(chatId, JSON.parse(body).response);
    });
});
