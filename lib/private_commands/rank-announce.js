var Clapp = require('../modules/clapp-discord');
var StringBuilder = require('../../custom_modules/StringBuilder');

module.exports = new Clapp.Command({
  name: "rank-announce",
  desc: "Gets rank of argument, or /'Months Behind/' by default",
  fn: (argv, context) => {
    // This output will be redirected to your app's onReply function
<<<<<<< Updated upstream
    var retVal = "Guild: " + argv.args.world_rank + "\n";
    retVal = retVal.concat("Realm Rank is: ", argv.args.realm_rank);
=======
    var stringBuilder = new StringBuilder();
    stringBuilder.build("Guild:", 
                        argv.args.guild.replace("+", " "),
                        "\nRealm:",
                        argv.args.realm,
                        "(" + argv.args.region + ")",
                        "\nRealm Rank is:",
                        argv.args.realm_rank,
                        "\nWorld Rank is:",
                        argv.args.world_rank);
    var retVal = stringBuilder.getString();
>>>>>>> Stashed changes
    return retVal;
  },
  args: [
    {
      name: 'realm_rank',
      desc: 'Guild to get',
      type: 'string',
      required: true,
      default: "default"
    },
    {
      name: 'world_rank',
      desc: 'A test argument',
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