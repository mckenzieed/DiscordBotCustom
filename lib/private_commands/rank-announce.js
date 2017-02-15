var Clapp = require('../modules/clapp-discord');

module.exports = new Clapp.Command({
  name: "rank-announce",
  desc: "announces rank of argument, or /'Months Behind/' by default",
  fn: (argv, context) => {
    // This output will be redirected to your app's onReply function
    var retVal = "Guild: "+ argv.args.region + "-" + argv.args.realm + " " + argv.args.guild + "\n";
    retVal += "Realm Rank is: " + argv.args.realm_rank;
    retVal += "\nWorld Rank is: " + argv.args.world_rank;
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
    },
    {
      name: 'guild',
      desc: 'A test argument',
      type: 'string',
      required: true,
      default: "default"
    },
    {
      name: 'realm',
      desc: 'A test argument',
      type: 'string',
      required: true,
      default: "default"
    },
    {
      name: 'region',
      desc: 'A test argument',
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