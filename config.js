module.exports = {

  // Your bot name. Typically, this is your bot's username without the discriminator.
  // i.e: if your bot's username is MemeBot#0420, then this option would be MemeBot.
  name: "guild-bot",

  // The bot's command prefix. The bot will recognize as command any message that begins with it.
  // i.e: "-my discord bot foo" will trigger the command "foo",
  //      whereas "My Discord Bot foo" will do nothing at all.
  prefix:  "!",

  // Your bot's user token. If you don't know what that is, go here:
  // https://discordapp.com/developers/applications/me
  // Then create a new application and grab your token.

  // production
  token: "MjgxNDQzMDE2NDM3Mzk5NTUy.C4YBvw.JOKZgcPMUqbNxOfz_s1OeUdibjM",

  // dev
  // token: "MjgwODMzOTg3NDU3NTgxMDU2.C4ppyQ.QfSnHj9pDBznPZ7lwfj_OY6J2jA",

  // WarcraftLogs apikey
  wclToken: "b8f97aebad5c6f63f8088de2086e3674",

  //WoW Api key
  wowToken: "yudh7f6baquxxngknp9zq7uxwy7u9x5s",

  // If this option is enabled, the bot will delete the message that triggered it, and its own
  // response, after the specified amount of time has passed.
  // Enable this if you don't want your channel to be flooded with bot messages.
  // ATTENTION! In order for this to work, you need to give your bot the following permission:
  // MANAGE_MESSAGES - 	0x00002000
  // More info: https://discordapp.com/developers/docs/topics/permissions
  deleteAfterReply: {
    enabled: false,
    time: 500, // In milliseconds
  }

};
