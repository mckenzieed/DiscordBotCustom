var Clapp = require('../modules/clapp-discord');
var StringBuilder = require('../../custom_modules/StringBuilder');
//var SpecObject = require('../objects/SpecObject');
var getSpecObjects = require('../../custom_modules/stringFunctions').getSpecObjects;
var Boss = require('../objects/Boss');

module.exports = new Clapp.Command({
  name: "parses-announce",
  desc: "announces parse of boss argument",
  fn: (argv, context) => {
    var convertDifficultyToUserFormat = require('../helpers').convertDifficultyToUserFormat;
    // This output will be redirected to your app's onReply function
    var parseList = argv.args.parseList;
    var charName = argv.args.charName;
    var charServer = argv.args.charServer;
    var charRegion = argv.args.charRegion;
    var bossName = argv.args.bossName;
    var difficulty = convertDifficultyToUserFormat(argv.args.difficulty);
    var boss = new Boss(bossName, difficulty);

    var metric = "";
    if (argv.args.role === "Damage") {
      metric = "DPS";
    }
    if (argv.args.role === "Healing") {
      metric = "HPS";
    }

    var specObjects = getSpecObjects(parseList);
    var retVal = "Character: " + charName + " (" + charServer + "-" + charRegion + ")"; 
    retVal += "\nRole: " + argv.args.role;
    retVal += "\nBoss: " + boss.getNameWithoutHyphen() + ", Difficulty: " + difficulty; 

    specObjects.forEach(function (obj) {
        retVal += "\nSpec: " + obj.spec + ", " + metric + ": " + obj.dps + ", Parse: " + obj.parse;
    });

    return retVal;
  },
  args: [
    {
      name: 'charName',
      desc: 'Name of Character',
      type: 'string',
      required: true,
      default: "Error Name"
    },
    {
      name: 'charServer',
      desc: 'Character\'s Server',
      type: 'string',
      required: true,
      default: "Error Server"
    },
    {
      name: 'charRegion',
      desc: 'Region of Server',
      type: 'string',
      required: true,
      default: "Error Region"
    },
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
      name: 'role',
      desc: 'Damage, Healer',
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