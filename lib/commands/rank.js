var Clapp = require('../modules/clapp-discord');
var webCrawler = require('../modules/web-crawler');


module.exports = new Clapp.Command({
  name: "rank",
  desc: "Gets rank of argument, or /'Months Behind/' by default",
  fn: (argv, context) => {
    // This output will be redirected to your app's onReply function
    // Queue just one URL, with default callback
    argv.args.guild.replace("-", " ");
    var guild = argv.args.guild == "default" ? "Months+Behind" : argv.args.guild;
    var realm = argv.args.realm == "default" ? "Proudmoore" : argv.args.realm;
    var region = argv.args.region == "default" ? "US" : argv.args.region;
    var uri = 'https://www.wowprogress.com/guild/'.concat(region, "/", realm, "/", guild, "/json_rank")
    var crawler = webCrawler();
    crawler.crawler.queue([{
        uri: uri,
        jQuery: false,

        callback: function (error, result) {
            var events = require('../modules/events');
            if (error) {
                console.log(error);
            } else {
                var rankObject = crawler.parser(result.body);
                rankObject = {
                  realmRank: rankObject.realm_rank,
                  worldRank: rankObject.world_rank
                }
                guildObject = {
                  guild: guild,
                  realm: realm,
                  region: region
                }
                var message = {
                  msg: context.msg
                }
                events.event.emit('result', [rankObject, guildObject, message]);
                console.log('Grabbed', rankObject);
            }
        }
    }]);
    
    return 'Fetching guild rank from ' + uri;
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
