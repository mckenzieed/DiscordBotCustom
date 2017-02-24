var Clapp = require('../modules/clapp-discord');
var RankObject = require('../objects/RankObject.js');
var GuildObject = require('../objects/GuildObject.js');
var RankObject = require('../objects/RankObject.js');
var GuildObject = require('../objects/GuildObject.js');
var helpers = require('../helpers');

module.exports = new Clapp.Command({
  name: "rank",
  desc: "Gets rank of argument, or /'Months+Behind/' by default",
  fn: (argv, context) => {
    // This output will be redirected to your app's onReply function
    // Queue just one URL, with default callback
    var guildName = helpers.prettify(argv.args.guild.replace("-", "+"));
    var realm = helpers.prettify(argv.args.realm);
    var region = argv.args.region.toUpperCase();
    var guild = new GuildObject (guildName, realm, region);
    var uri = 'https://www.wowprogress.com/guild/'.concat(region, "/", realm, "/", guildName);
    var fullUri = uri.concat("/json_rank");

    helpers.getGuildRank(fullUri, guild, context);
    
    return 'Attempting to fetch guild rank from ' + uri;
  },
  args: [
    {
      name: 'guild',
      desc: 'Guild to get',
      type: 'string',
      required: false,
      default: "Months-Behind"
    },
    {
      name: 'realm',
      desc: 'A test argument',
      type: 'string',
      required: false,
      default: "Proudmoore"
    },
    {
      name: 'region',
      desc: 'A test argument',
      type: 'string',
      required: false,
      default: "US"
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
