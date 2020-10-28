module.exports = function(controller) {
  controller.hears("about me", "message", async(bot, message)=>{
    await bot.reply(message, {
      text: `${controller.resume.aboutMe}`,
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
          title: "Tech Stack",
          payload: "Tech Stack",
        },
        {
          title: "Education",
          payload: "Education",
        },
      ],
    });
  })
}