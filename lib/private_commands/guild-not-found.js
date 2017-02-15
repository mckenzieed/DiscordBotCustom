var Clapp = require('../modules/clapp-discord');

module.exports = new Clapp.Command({
  name: "guild-not-found",
  desc: "Thrown when a guild is searched for but not found",
  fn: (argv, context) => {
    // This output will be redirected to your app's onReply function
    var retVal = "Guild: " + argv.args.guild + " not found.\n";
    retVal += "Be sure to replace any spaces with \'-\' and that it is spelled correctly."
    return retVal;
  },
  args: [
    {
      name: 'guild',
      desc: 'Guild to get',
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