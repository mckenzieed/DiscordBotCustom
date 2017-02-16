var Clapp = require('../modules/clapp-discord');
var StringBuilder = require('../../custom_modules/StringBuilder');
//var SpecObject = require('../objects/SpecObject');
var getSpecObjects = require('../../custom_modules/stringFunctions').getSpecObjects;
var convertDifficultyToUserFormat = require('../helpers').convertDifficultyToUserFormat;

module.exports = new Clapp.Command({
  name: "parses-announce",
  desc: "announces parse of boss argument",
  fn: (argv, context) => {
    // This output will be redirected to your app's onReply function
    var parseList = argv.args.parseList;
    var bossName = argv.args.bossName;
    var difficulty = convertDifficultyToUserFormat(argv.args.difficulty);

    var specObjects = getSpecObjects(parseList);

    var retVal = "Boss: " + bossName + ", Difficulty: " + difficulty; 

    specObjects.forEach(function (obj) {
        retVal += "\nSpec: " + obj.spec + ", " + "Parse: " + obj.parse;
    });

    return retVal;
  },
  args: [
    {
      name: 'bossName',
      desc: 'Name of Boss',
      type: 'string',
      required: true,
      default: "default"
    },
    {
      name: 'difficulty',
      desc: 'normal, heroic, mythic',
      type: 'string',
      required: true,
      default: "default"
    },
    {
      name: 'parseList',
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