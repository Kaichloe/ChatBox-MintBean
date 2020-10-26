
module.exports = function(controller) {
  controller.hears("contact", "message", async(bot, message) => {
    // await bot.reply(message, `${Object.values(controller.resume.contact)}`)
    await displayContact(bot, message)
  })

      const displayContact = async (bot, message) => {
        await bot.reply(message, { type: "typing" });

        const keys = Object.keys(controller.resume.contact);
        const values = Object.values(controller.resume.contact)
        for (let i = 0; i < keys.length; i++) {
          await bot.reply(message, `${keys[i] + ": " + values[i]}`);
        }

        await bot.reply(message, {
          text: "Don't be shy to connect with my creator!",
          quick_replies: [
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
      };
}