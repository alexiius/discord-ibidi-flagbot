const Discord = require("discord.js"),
client = new Discord.Client();

module.exports.run = async (client, message, args) => {
const members = message.guild.members.cache.array();
const userFlag = [];
  let usersOnArray = "";
for (const member of members) {
    const flag = (member.user.flags || await member.user.fetchFlags()).toArray().includes("EARLY_SUPPORTER");
    if (flag) {
      usersOnArray += `[ **\`${member.user.tag}\`** ID: (\`${member.user.id}\`)] \n`;
    }
}
  message.channel.send(usersOnArray);
};

exports.config = {
  name: "es",
  guildOnly: true,
  aliases: [],
};