module.exports = function (controller) {
  controller.on("message", async(bot, message) => {
    await bot.reply(message, {
      text:
        "Sorry I don't know how to answer that, please try the replies below",
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
          payload: "About Me",
        },
      ],
    });
  })
}