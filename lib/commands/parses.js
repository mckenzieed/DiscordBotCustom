var Clapp = require('../modules/clapp-discord');
var cfg = require('../../config.js');
var rp = require('request-promise');
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
    var characterName = argv.args.characterName;
    var server = argv.args.serverName;
    var region = argv.args.serverRegion;
    var bossName = argv.args.bossName;
    var difficulty = convertDifficultyToWCLFormat(argv.args.difficulty);

    var character = new Character(characterName, server, region);
    var boss = new Boss(bossName, difficulty);

    var dpsMetric = "metric=dps";
    var hpsMetric = "metric=hps";
    var dpsUrl = url.concat(character.getName(), "/", character.getServer(), "/", character.getRegion(), "?" + dpsMetric + "&api_key=", wclApiKey);
    var hpsUrl = url.concat(character.getName(), "/", character.getServer(), "/", character.getRegion(), "?" + hpsMetric + "&api_key=", wclApiKey);

    helpers.getParsesBasedOnSpec(dpsUrl, character, boss, "Damage", context);
    helpers.getParsesBasedOnSpec(hpsUrl, character, boss, "Healing", context);

    return 'Fetching parse data from WarcraftLogs...';
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
      name: 'serverName',
      desc: 'Server (default \'Proudmoore\')',
      type: 'string',
      required: false,
      default: 'proudmoore'
    },
    {
      name: 'serverRegion',
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