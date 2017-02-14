const fs      = require('fs');
const Clapp   = require('../modules/clapp-discord');
const cfg     = require('../../config.js');
const pkg     = require('../../package.json');
const Discord = require('discord.js');
const bot     = new Discord.Client();

var app = {};
app.init = function () {
  app = new Clapp.App({
  name: cfg.name,
  desc: pkg.description,
  prefix: cfg.prefix,
  version: pkg.version,
  onReply: (msg, context) => {
    // Fired when input is needed to be shown to the user.

    context.msg.reply('\n' + msg).then(bot_response => {
      if (cfg.deleteAfterReply.enabled) {
        context.msg.delete(cfg.deleteAfterReply.time)
          .then(msg => console.log(`Deleted message from ${msg.author}`))
          .catch(console.log);
        bot_response.delete(cfg.deleteAfterReply.time)
          .then(msg => console.log(`Deleted message from ${msg.author}`))
          .catch(console.log);
        }
      });
    }
  });
  
  return app
}


module.exports = {
    app: app
}