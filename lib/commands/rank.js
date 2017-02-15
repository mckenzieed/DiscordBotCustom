var Clapp = require('../modules/clapp-discord');
var webCrawler = require('../modules/web-crawler');
var RankObject = require('../objects/RankObject.js');
var GuildObject = require('../objects/GuildObject.js');

module.exports = new Clapp.Command({
  name: "rank",
  desc: "Gets rank of argument, or /'Months+Behind/' by default",
  fn: (argv, context) => {
    // This output will be redirected to your app's onReply function
    // Queue just one URL, with default callback
    var guild = argv.args.guild == "default" ? "Months+Behind" : argv.args.guild.replace("-", "+");
    var realm = argv.args.realm == "default" ? "Proudmoore" : argv.args.realm;
    var region = argv.args.region == "default" ? "US" : argv.args.region;
    var uri = 'https://www.wowprogress.com/guild/'.concat(region, "/", realm, "/", guild);
    var fullUri = uri.concat("/json_rank");
    var crawler = webCrawler();
    crawler.crawler.queue([{
        uri: fullUri,
        jQuery: false,

        callback: function (error, result) {
            var PrivateCommandHelpers = require('../modules/private-command-helpers');
            var pcHelpers = new PrivateCommandHelpers();
            
            if (error) {
                console.log(error);
            } else {
              try {
                var rankJson = crawler.parser(result.body);
              }
              catch(e) {
                pcHelpers.announceError(e, context.msg);
              }
              guildObject = new GuildObject (
                guild.replace("+", " "),
                realm,
                region
              );
              rankObject = new RankObject (
                rankJson.realm_rank,
                rankJson.world_rank
              );
                
              pcHelpers.announceRank(rankObject, guildObject, context.msg);
              console.log('Grabbed', rankObject);
          }
        }
    }]);
    
    return 'Attempting to fetch guild rank from ' + uri;
  },
  args: [
    {
      name: 'guild',
      desc: 'Guild to get',
      type: 'string',
      required: false,
      default: "default"
    },
    {
      name: 'realm',
      desc: 'A test argument',
      type: 'string',
      required: false,
      default: "default"
    },
    {
      name: 'region',
      desc: 'A test argument',
      type: 'string',
      required: false,
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
