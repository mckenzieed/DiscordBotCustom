'use strict';

const fs      = require('fs');
const Clapp   = require('./modules/clapp-discord');
const cfg     = require('../config.js');
const pkg     = require('../package.json');
const Discord = require('discord.js');
const bot     = new Discord.Client();
var app       = require('./clapp-objects');

app = app.app.init();

fs.readdirSync('./lib/commands/').forEach(file => {
    app.addCommand(require("./commands/" + file));
});

bot.on('message', msg => {
  // Fired when someone sends a message
  if (msg.content.startsWith("!")) {
    var ran = false;
    if (msg.content.charAt(1) != " ") {
      var ran = true;
      //msg.content = msg.content.
      msg.content = msg.content.substr(0, 1).concat(" ", msg.content.substr(1, msg.content.length-1));
    }
  }
  //if (ran) console.log("ran");
  if (app.isCliSentence(msg.content)) {
    app.parseInput(msg.content, {
      msg: msg
      // Keep adding properties to the context as you need them
    });
  }
});

// Load every command in the commands folder
// fs.readdirSync('./lib/commands/').forEach(file => {
//   app.addCommand(require("./commands/" + file));
// });


bot.login(cfg.token).then(() => {
  console.log('Running!');
});

