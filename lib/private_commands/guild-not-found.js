var Clapp = require('../modules/clapp-discord');
var StringBuilder = require('../../custom_modules/StringBuilder');

module.exports = new Clapp.Command({
  name: "guild-not-found",
  desc: "Thrown when a guild is searched for but not found",
  fn: (argv, context) => {
    // This output will be redirected to your app's onReply function
    var stringBuilder = new StringBuilder();
    stringBuilder.build("Guild:",
                        argv.args.guild,
                        "(" + argv.args.realm + "-" + argv.args.region + ")",
                        "not found.",
                        "\nBe sure to replace any spaces with \'-\',",
                        "that it is spelled correctly,",
                        "and that the region and realm is correct.",
                        "Server responded with error message:",
                        argv.args.error);
    var retVal = stringBuilder.getString();
    return retVal;
  },
  args: [
    {
      name: 'name',
      desc: 'Guild to get',
      type: 'string',
      required: true,
      default: "error"
    },
    {
      name: 'realm',
      desc: 'Realm of guild',
      type: 'string',
      required: true,
      default: "error"
    },
    {
      name: 'region',
      desc: 'Region of realm',
      type: 'string',
      required: true,
      default: "error"
    },
    {
      name: 'errorMessage',
      desc: 'Guild to get',
      type: 'string',
      required: true,
      default: "error"
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