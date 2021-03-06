module.exports = function(controller) {
  controller.hears("education", "message", async(bot, message)=>{
    await displayEducation(bot, message);
  })

  const displayEducation = async(bot, message) => {
    await bot.reply(message, { type: "typing" });
    
    const education = controller.resume.education;

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
            title: "Work History",
            payload: "Work History",
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
}