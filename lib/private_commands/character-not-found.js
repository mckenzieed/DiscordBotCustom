var Clapp = require('../modules/clapp-discord');
var StringBuilder = require('../../custom_modules/StringBuilder');

module.exports = new Clapp.Command({
  name: "character-not-found",
  desc: "Thrown when a player is searched for but a 400 is returned",
  fn: (argv, context) => {
    // This output will be redirected to your app's onReply function
    var stringBuilder = new StringBuilder();
    stringBuilder.build("No character named",
                        argv.args.character,
                        "found.",
                        "\nBe sure it is spelled correctly",
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