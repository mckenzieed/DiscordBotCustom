var events = require('events');
const Discord = require('discord.js');
const bot     = new Discord.Client();
const fs      = require('fs');
var app     = require('../../clapp-objects');



app = app.app.init();

fs.readdirSync('./lib/private_commands/').forEach(file => {
    app.addCommand(require("../../private_commands/" + file));
});

var eventsEmitter = new events.EventEmitter();
eventsEmitter.on('result', contextObj => {
  var ranks = contextObj[0];
  var guild = contextObj[1]
  var message = contextObj[2];
  message.content = "! rank-announce " + ranks.realmRank.toString() + " " + guild.guild;
  app.parseInput(message.content, {
    msg: message.msg
  })
})

module.exports = {
  event: eventsEmitter,
  bot: bot
}