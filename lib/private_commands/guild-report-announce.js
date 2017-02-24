var Clapp = require('../modules/clapp-discord');
var StringBuilder = require('../../custom_modules/StringBuilder');

module.exports = new Clapp.Command({
  name: "guild-report-announce",
  desc: "announces report of argument, or /'Months Behind/' by default",
  fn: (argv, context) => {
    // This output will be redirected to your app's onReply function
    var url = "https://www.warcraftlogs.com/reports/" + argv.args.report_id;
    var stringBuilder = new StringBuilder();
    stringBuilder.build("Guild:", 
                        argv.args.guild.replace("-", " "),
                        "\nMost Recent Report Url:",
                        url);
    var retVal = stringBuilder.getString();
    return retVal;
  },
  args: [
    {
      name: 'report_id',
      desc: 'Guild to get',
      type: 'string',
      required: true,
      default: ""
    },
    {
      name: 'guild',
      desc: 'A test argument',
      type: 'string',
      required: true,
      default: "Months-Behind"
    },
    {
      name: 'realm',
      desc: 'A test argument',
      type: 'string',
      required: true,
      default: "Proudmoore"
    },
    {
      name: 'region',
      desc: 'A test argument',
      type: 'string',
      required: true,
      default: "US"
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