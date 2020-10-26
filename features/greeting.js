module.exports = function (controller) {

  controller.on("hello", async(bot, message) => {
    await welcomeMessage(bot, message);
  });

  controller.on("welcome_back", async(bot, message) => {
    await welcomeMessage(bot, message);
  });

  const welcomeMessage = async(bot, message) => {
    await bot.reply(message, {type: "typing"});

    setTimeout(async () => {
      await bot.changeContext(message.reference);
      await bot.reply(message, "Hello there...");
      await bot.reply(message, {type: "typing"});
    }, 1500)
    setTimeout(async () => {
      await bot.changeContext(message.reference);
      await bot.reply(message, "I am Kaiyip Ho's Automated Bot!");
      await bot.reply(message, { type: "typing" });
    }, 2500);
    setTimeout(async () => {
      await bot.changeContext(message.reference);
      await bot.reply(message, {
        text: "I was created to help my creator find work! Feel free to ask me questions about my creator!",
        quick_replies: [
          {
            title: "Contact Info",
            payload: "Contact Info",
          },
          {
            title: "Work History",
            payload: "Work History",
          },
          {
            title: "Education",
            payload: "Education",
          },
          {
            title: "Tech Stack",
            payload: "Tech Stack",
          },
          {
            title: "About Me",
            payload: "About Me"
          }
        ],
      });
    }, 3500);
  }

  controller.hears("hello", "message", async(bot, message)=>{
    await bot.reply(message, "Hello! How's your day?")
  })
};
