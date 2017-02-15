var Clapp = require('../modules/clapp-discord');

module.exports = new Clapp.Command({
  name: "guild-not-found",
  desc: "Thrown when a guild is searched for but not found",
  fn: (argv, context) => {
    // This output will be redirected to your app's onReply function
    var retVal = "Error retrieving data.\n";
    retVal += argv.args.error;
    return retVal;
  },
  args: [
    {
      name: 'error',
      desc: 'error message',
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