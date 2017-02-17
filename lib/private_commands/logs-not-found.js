var Clapp = require('../modules/clapp-discord');
var StringBuilder = require('../../custom_modules/StringBuilder');
var Character = require('../objects/Character');
var Boss = require('../objects/Boss');

module.exports = new Clapp.Command({
  name: "logs-not-found",
  desc: "Thrown when logs for someone is searched for but none are found",
  fn: (argv, context) => {
    var convertDifficultyToUserFormat = require('../helpers').convertDifficultyToUserFormat;
    // This output will be redirected to your app's onReply function
    var characterName = argv.args.characterName;
    var server = argv.args.characterServer;
    var region = argv.args.characterRegion;
    var character = new Character(characterName, server, region);
    var bossName = argv.args.bossName;
    var difficulty = convertDifficultyToUserFormat(argv.args.bossDifficulty);
    var boss = new Boss(bossName, difficulty)
    var stringBuilder = new StringBuilder();
    stringBuilder.build("No logs for",
                        character.getName(),
                        "(" + character.getServer() +
                        "-" + character.getRegion() + ")",
                        "for",
                        boss.getDifficulty(),
                        "-", boss.getName(),
                        "found.",
                        "\nBe sure everything is spelled correctly,",
                        "that logs should exists for the boss and difficulty for this character,",
                        "and that the region and realm is correct. (if not proudmoore-US)")
    var retVal = stringBuilder.getString();
    return retVal;
  },
  args: [
    {
      name: 'characterName',
      desc: 'player who\'s logs are being searched',
      type: 'string',
      required: true,
      default: "default"
    },
    {
      name: 'characterServer',
      desc: 'player\'s server who\'s logs are being searched',
      type: 'string',
      required: true,
      default: "default"
    },
    {
      name: 'characterRegion',
      desc: 'player\'s region who\'s logs are being searched',
      type: 'string',
      required: true,
      default: "default"
    },
    {
      name: 'bossName',
      desc: 'boss for player who\'s logs are being searched',
      type: 'string',
      required: true,
      default: "default"
    },
    {
      name: 'bossDifficulty',
      desc: 'difficulty of boss for player who\'s logs are being searched',
      type: 'string',
      required: true,
      default: "default"
    },
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