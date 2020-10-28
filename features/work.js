const { BotWorker } = require("botkit")

module.exports = function(controller) {
  controller.hears(["work", "experience"], "message", async(bot, message)=>{
    await displayWork(bot, message);
  })

  
  const displayWork = async(bot, message)=>{
    await bot.reply(message, { type: "typing" });

    const work =(controller.resume.work);

      await bot.reply(message, {
        text: `<div>
            <strong>${work.company}</strong> <span> (${work.position})</span>
            <p>(${work.startDate} - ${work.endDate})</p>
            <p>${work.summary}</p>  
            <p>${work.accomplishments}</p>  
          </div>`,
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
            title: "About Me",
            payload: "About Me",
          },
        ],
      });
  }
}