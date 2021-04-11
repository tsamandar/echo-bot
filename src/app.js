const { Telegraf } = require("telegraf");

const bot = new Telegraf("1779574945:AAHgSm2jdUDr6iRuPieDF0Afkuwn7Nk_qSc");

let helpMessage =
  "Hi, I'm Ech Bot. I'll say what you say. Just say something within /echo";
let echoMessage;

bot.use((ctx) => {
  const user = ctx.from.username || ctx.from.id;
  bot.telegram.sendMessage(
    "-1001392261645",
    `${user} is said: ${ctx.message.text}`
  );
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

bot.launch();
