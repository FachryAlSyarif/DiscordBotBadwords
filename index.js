const Discord = require ('discord.js')
const client = new Discord.Client();

client.on("ready", () => {
    console.log("Ready!");
})

var bannedwords = "fuck you,ass hole,".split(","); //enter the word that the bot wants to delete
client.on("message", msg =>{
    if(msg.guld === null) return;

    for (i=0;i<bannedwords.length;i++) {
        if (msg.content.toLowerCase().includes(bannedwords[i])) {
            msg.delete();
            msg.reply("your_words"); //enter the word you want the bot to say
            
        }
    }

}) 

client.login("[your_token]") //enter your discord bot token here