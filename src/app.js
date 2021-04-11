const { Telegraf } = require("telegraf");
const dotenv = require("dotenv");
dotenv.config();

const bot = new Telegraf(process.env.BOT_TOKEN);

let helpMessage =
  "Hi, I'm Ech Bot. I'll say what you say. Just say something within /echo";
let echoMessage;
let user;

bot.use((ctx, next) => {
  user = ctx.from.username || ctx.from.id;
  bot.telegram.sendMessage(
    "-1001392261645",
    `${user} is said: ${ctx.message.text}`
  );
  next();
});

bot.start((ctx) => {
  ctx.reply(helpMessage);
});

bot.help((ctx) => {
  ctx.reply(helpMessage);
});

bot.command("echo", (ctx) => {
  let input = ctx.message.text;
  let inputArray = input.split(" ");

  if (inputArray.length === 1) echoMessage = "You said echo";
  else {
    inputArray.shift();
    echoMessage = inputArray.join(" ");
  }

  ctx.reply(echoMessage);
});

bot.catch(err => console.log(err))
bot.launch();
