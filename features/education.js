module.exports = function(controller) {
  controller.hears("education", "message", async(bot, message)=>{
    await displayEducation(bot, message);
  })

  const displayEducation = async(bot, message) => {
    await bot.reply(message, { type: "typing" });
    
    const education = controller.resume.education;
    const say = 
      "hello \nkai, \nhow do you do";

    // for (let i = 0; i < education.length; i++) {
    //   let keys = Object.keys(education[i]);
    //   let values = Object.values(education[i]); 
      
    //   for (let j = 0; j < keys.length; j++) {
    //     await bot.reply(message, `${keys[j] + ": " + values[j]}`);
    //   }
    // }
    await bot.reply(message, `${say}`)
  }
}