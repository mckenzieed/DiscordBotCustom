var Clapp = require('../modules/clapp-discord');
var cfg = require('../../config.js');
var ParsesHelpers = require('../../custom_modules/ParsesHelpers');
var helpers = require('../helpers');
var convertDifficultyToWCLFormat = require('../helpers').convertDifficultyToWCLFormat;
var Guild = require('../objects/GuildObject');
var Boss = require('../objects/Boss');
var PrivateCommandHelpers = require('../modules/private-command-helpers');


var wclApiKey = cfg.wclToken;

var url = 'https://www.warcraftlogs.com/v1/reports/guild/';


module.exports = new Clapp.Command({
  name: "getLogs",
  desc: "gets report of argument",
  fn: (argv, context) => {
    // This output will be redirected to your app's onReply function
    var guildName = helpers.prettify(argv.args.guildName).replace("-", " ");
    var realm = helpers.prettify(argv.args.realmName);
    var region = argv.args.realmRegion.toUpperCase();

    var guild = new Guild(guildName, realm, region);

    var guildUrl = url.concat(guildName, "/", realm, "/", region)
    var getLogsUrl = guildUrl.concat("?api_key=", wclApiKey);

    helpers.getGuildReport(getLogsUrl, guild, context); // guild log

    return 'Fetching report from WarcraftLogs...';
  },
  args: [
    {
      name: 'guildName',
      desc: 'Your guild\'s name',
      type: 'string',
      required: false,
      default: 'Months-Behind'
    },
    {
      name: 'realmName',
      desc: 'realm (default \'Proudmoore\')',
      type: 'string',
      required: false,
      default: 'Proudmoore'
    },
    {
      name: 'realmRegion',
      desc: 'Region (default \'us\')',
      type: 'string',
      required: false,
      default: 'US'
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