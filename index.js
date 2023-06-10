const { Telegraf } = require('telegraf');
//const { message } = require('telegraf/filters');
const dotenv = require('dotenv');
dotenv.config();


const bot = new Telegraf(process.env.BOT_TOKEN);
bot.start((ctx) => ctx.reply('Welcome to Test Bot'));
bot.command('whomadethis',(ctx) => ctx.reply('Reema Dhanwani'));
bot.command('helpme',(ctx) => ctx.reply("Tell me how can i help You!!"));
bot.on(('sticker'), (ctx) => ctx.reply('💜'));
bot.command('hipster', Telegraf.reply('λ'));
bot.hears('👋',(ctx) => ctx.reply('hey there!'));
bot.launch();