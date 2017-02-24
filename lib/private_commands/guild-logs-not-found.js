var Clapp = require('../modules/clapp-discord');
var StringBuilder = require('../../custom_modules/StringBuilder');
var Guild = require('../objects/guildObject');

module.exports = new Clapp.Command({
  name: "logs-not-found",
  desc: "Thrown when logs for someone is searched for but none are found",
  fn: (argv, context) => {
    // This output will be redirected to your app's onReply function
    var guildName = argv.args.guildName;
    var realm = argv.args.guildRealm;
    var region = argv.args.guildRegion;
    var guild = new Guild(guildName, realm, region);
    var stringBuilder = new StringBuilder();
    stringBuilder.build("No logs for",
                        guild.getName(),
                        "(" + guild.getRealm() +
                        "-" + guild.getRegion() + ")",
                        "found.",
                        "\nBe sure everything is spelled correctly,",
                        "that logs should exists for the guild,",
                        "and that the region and realm is correct. (if not proudmoore-US)")
    var retVal = stringBuilder.getString();
    return retVal;
  },
  args: [
    {
      name: 'guildName',
      desc: 'guild who\'s logs are being searched',
      type: 'string',
      required: true,
      default: "default"
    },
    {
      name: 'guildRealm',
      desc: 'guild\'s realm who\'s logs are being searched',
      type: 'string',
      required: true,
      default: "default"
    },
    {
      name: 'guildRegion',
      desc: 'guild\'s region who\'s logs are being searched',
      type: 'string',
      required: true,
      default: "default"
    }
  ],
  flags: [
    {
      name: 'testflag',
      desc: 'A test flag',
      alias: 't',
      type: 'boolean',
      default: false
    }
  ]
});