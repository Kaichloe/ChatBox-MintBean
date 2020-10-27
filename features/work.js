const { BotWorker } = require("botkit")

module.exports = function(controller) {
  controller.hears(["work", "experience"], "message", async(bot, message)=>{
    await displayWork(bot, message);
  })

  
  const displayWork = async(bot, message)=>{
    await bot.reply(message, { type: "typing" });

    const work = controller.resume.work;

    for (let i = 0; i < education.length; i++) {
      await bot.reply(message, {
        text: `<div>
            <strong>${education[i].institution}</strong>
            <p>(${education[i].startDate} - ${education[i].endDate})</p>
            <p>${education[i].focus}</p>     
          </div>`,
          quick_replies: [
          {
            title: "Contact Info",
            payload: "Contact Info",
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
        ]
      });
  }
}