var events = require('events');
const Discord = require('discord.js');
const bot     = new Discord.Client();
const fs      = require('fs');
const cfg     = require('../../../config.js');
var app     = require('../../clapp-objects');



app = app.app.init();

fs.readdirSync('./lib/private_commands/').forEach(file => {
    app.addCommand(require("../../private_commands/" + file));
});

function PrivateCommandHelpers() {
}

PrivateCommandHelpers.prototype.announceRank = function (ranks, guild, message) {
  message.content = "";
  message.content = message.content.concat(
    "! rank-announce ", ranks.realmRank, " ", 
                        ranks.worldRank, " ", 
                        guild.getName().replace(" ", "+"), " ",
                        guild.getRealm(), " ",
                        guild.getRegion());
  //message.content = "! rank-announce " + ranks.realmRank + " " + ranks.worldRank + " " + guild.getName().replace(" ", "+");
  app.parseInput(message.content, {
    msg: message
  });
};

PrivateCommandHelpers.prototype.announceNotFound = function (guild, message) {
  message.content = "! guild-not-found " + guild.getName().replace(" ", "+");
  app.parseInput(message.content, {
    msg: message
  });
}

PrivateCommandHelpers.prototype.announceError = function (error, message) {
  message.content = "! error " + error;
  app.parseInput(message.content, {
    msg: message
  });
}

module.exports = PrivateCommandHelpers;