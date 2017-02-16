var Clapp = require('../modules/clapp-discord');
var cfg = require('../../config.js');
var request = require('request');
var ParsesHelpers = require('../../custom_modules/ParsesHelpers');
var convertDifficultyToWCLFormat = require('../helpers').convertDifficultyToWCLFormat;

var wclApiKey = cfg.wclToken;

var url = 'https://www.warcraftlogs.com/v1/parses/character/';


module.exports = new Clapp.Command({
  name: "parses",
  desc: "gets parses of argument",
  fn: (argv, context) => {
    // This output will be redirected to your app's onReply function
    var character = argv.args.characterName;
    var server = argv.args.serverName;
    var region = argv.args.serverRegion;
    var bossName = argv.args.bossName;
    var difficulty = convertDifficultyToWCLFormat(argv.args.difficulty);
    var fullUrl = url.concat(character, "/", server, "/", region, "?api_key=", wclApiKey);

    request({
        url: fullUrl,
        json: true
    }, function (error, response, body) {
        var PrivateCommandHelpers = require('../modules/private-command-helpers');
        var pcHelpers = new PrivateCommandHelpers();
        if (!error && response.statusCode === 200) {
            

            var parsesHelpers = new ParsesHelpers(body);
            var parses = parsesHelpers.getMostRecentBossParse(bossName, difficulty);
            if (parses === null) {
              pcHelpers.announceLogsNotFound(character, context.msg);
              return;
            }
            
            pcHelpers.announceParses(parses, bossName, difficulty, context.msg);
        } else {
            pcHelpers.announceCharacterNotFound(character, context.msg);
        }
    });

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