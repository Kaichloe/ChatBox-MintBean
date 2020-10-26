
module.exports = function(controller) {
  controller.hears("contact", "message", async(bot, message) => {
    await bot.reply(message, `${controller.resume.contact.firstName}`)
  })
}