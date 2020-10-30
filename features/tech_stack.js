module.exports = function(controller) {
  controller.hears(["Tech", "stack", "technology"], "message", async(bot, message) => {
    await displayTech(bot, message);
  })

  const displayTech = async(bot, message) => {
    await bot.reply(message, { type: "typing" });

    const skills = controller.resume.skills; 

    await bot.reply(message, {
      text: `${skills.map(skill => (
        `<div>${skill.name}</div><br>`
      )).join('')}`,
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
            title: "About Me",
            payload: "About Me"
          }
        ]
    })
  }
}