var events = require('events');
const Discord = require('discord.js');
const bot     = new Discord.Client();
const fs      = require('fs');
const cfg     = require('../../../config.js');
var app     = require('../../clapp-objects');
var StringBuilder = require('../../../custom_modules/StringBuilder');

app = app.app.init();

fs.readdirSync('./lib/private_commands/').forEach(file => {
    app.addCommand(require("../../private_commands/" + file));
});

function PrivateCommandHelpers() {
}

PrivateCommandHelpers.prototype.announceRank = function (ranks, guild, message) {
  var stringBuilder = new StringBuilder();
  stringBuilder.build("!", "rank-announce", 
                      ranks.realmRank,
                      ranks.worldRank, 
                      guild.getName(),
                      guild.getRealm(),
                      guild.getRegion());
  message.content = stringBuilder.getString();
  app.parseInput(message.content, {
    msg: message
  });
};

PrivateCommandHelpers.prototype.announceNotFound = function (guild, message) {
  var stringBuilder = new StringBuilder();
  stringBuilder.build("!", "guild-not-found",
                      guild.getName(),
                      guild.getRealm(),
                      guild.getRegion());
  message.content = stringBuilder.getString();
  app.parseInput(message.content, {
    msg: message
  });
}

PrivateCommandHelpers.prototype.announceCharacterNotFound = function (character, statusCode, message) {
  var stringBuilder = new StringBuilder();
  stringBuilder.build("!", "character-not-found",
                      character.getName(), character.getServer(), character.getRegion(), statusCode);
  message.content = stringBuilder.getString();
  app.parseInput(message.content, {
    msg: message
  });
}

PrivateCommandHelpers.prototype.announceLogsNotFound = function (character, boss, message) {
  var stringBuilder = new StringBuilder();
  stringBuilder.build("!", "logs-not-found",
                      character.getName(), character.getServer(), character.getRegion(),
                      boss.getName(), boss.getDifficulty());
  message.content = stringBuilder.getString();
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

PrivateCommandHelpers.prototype.announceParses = function (parses, boss, metric, message) {
  message.content = "! parses-announce " + boss.getName() + " " + boss.getDifficulty() + " " + metric + " ";
  parses.forEach(function (spec) {
    message.content += "@" + spec.spec + "?" + spec.parse;
  });
  
  app.parseInput(message.content, {
    msg: message
  });
}

module.exports = PrivateCommandHelpers;