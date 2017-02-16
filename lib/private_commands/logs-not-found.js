var Clapp = require('../modules/clapp-discord');
var StringBuilder = require('../../custom_modules/StringBuilder');

module.exports = new Clapp.Command({
  name: "logs-not-found",
  desc: "Thrown when logs for someone is searched for but none are found",
  fn: (argv, context) => {
    // This output will be redirected to your app's onReply function
    var stringBuilder = new StringBuilder();
    stringBuilder.build("No logs for",
                        argv.args.character,
                        "found.",
                        "\nBe sure everything is spelled correctly,",
                        "that logs should exists for the boss and difficulty for this character,",
                        "and that the region and realm is correct. (if not proudmoore-US)")
    var retVal = stringBuilder.getString();
    return retVal;
  },
  args: [
    {
      name: 'character',
      desc: 'player who\'s logs are being searched',
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