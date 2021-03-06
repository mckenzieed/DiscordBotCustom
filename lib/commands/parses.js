var Clapp = require('../modules/clapp-discord');
var cfg = require('../../config.js');
var ParsesHelpers = require('../../custom_modules/ParsesHelpers');
var helpers = require('../helpers');
var convertDifficultyToWCLFormat = require('../helpers').convertDifficultyToWCLFormat;
var Character = require('../objects/Character');
var Boss = require('../objects/Boss');
var PrivateCommandHelpers = require('../modules/private-command-helpers');


var wclApiKey = cfg.wclToken;

var url = 'https://www.warcraftlogs.com/v1/parses/character/';


module.exports = new Clapp.Command({
  name: "parses",
  desc: "gets parses of argument",
  fn: (argv, context) => {
    // This output will be redirected to your app's onReply function
    var characterName = helpers.prettify(argv.args.characterName);
    var realm = helpers.prettify(argv.args.realmName);
    var region = argv.args.realmRegion.toUpperCase();
    var bossName = helpers.prettify(argv.args.bossName);
    var difficulty = convertDifficultyToWCLFormat(argv.args.difficulty);

    var character = new Character(characterName, realm, region);
    var boss = new Boss(bossName, difficulty);

    var dpsMetric = "metric=dps";
    var hpsMetric = "metric=hps";
    var charUrl = url.concat(character.getName(), "/", character.getRealm(), "/", character.getRegion())
    var noMetricUrl = charUrl.concat("?api_key=", wclApiKey);
    var dpsUrl = charUrl.concat("?" + dpsMetric + "&api_key=", wclApiKey);
    var hpsUrl = charUrl.concat("?" + hpsMetric + "&api_key=", wclApiKey);

    helpers.checkForExistingCharacterOrError(noMetricUrl, character, boss, context); // make sure we can get logs
    helpers.getParsesBasedOnSpec(dpsUrl, character, boss, "Damage", context); // damage logs
    helpers.getParsesBasedOnSpec(hpsUrl, character, boss, "Healing", context); // healing logs

    return 'Fetching parse data from https://Warcraftlogs.com/';
  },
  args: [
    {
      name: 'characterName',
      desc: 'Your character\'s name',
      type: 'string',
      required: true,
      default: 'ralaanii'
    },
    {
      name: 'bossName',
      desc: 'Name of Boss',
      type: 'string',
      required: true,
      default: 'default'
    },
    {
      name: 'difficulty',
      desc: 'normal, heroic, mythic (default most recent parse)',
      type: 'string',
      required: true,
      default: 'default'
    },
    {
      name: 'realmName',
      desc: 'realm (default \'Proudmoore\')',
      type: 'string',
      required: false,
      default: 'proudmoore'
    },
    {
      name: 'realmRegion',
      desc: 'Region (default \'us\')',
      type: 'string',
      required: false,
      default: 'us'
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