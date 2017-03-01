var Clapp = require('../modules/clapp-discord');
var StringBuilder = require('../../custom_modules/StringBuilder');
//var SpecObject = require('../objects/SpecObject');
var getSpecObjects = require('../../custom_modules/stringFunctions').getSpecObjects;
var Boss = require('../objects/Boss');

module.exports = new Clapp.Command({
  name: "ap-announce",
  desc: "announces parse of boss argument",
  fn: (argv, context) => {
    var convertDifficultyToUserFormat = require('../helpers').convertDifficultyToUserFormat;
    // This output will be redirected to your app's onReply function
    var characterName = argv.args.characterName;
    var realm = argv.args.realm;
    var totalAp = argv.args.totalAp;
    var artifact = argv.args.weaponName;
    var rank = argv.args.rank;
    var retVal = "Character: " + characterName + ", Realm: " + realm;
    retVal += "\nArtifact Equipped: " + artifact + ", Rank: " + rank;
    retVal += "\nTotal AP Accumulated (based on rank): " + totalAp; 

    return retVal;
  },
  args: [
    {
      name: 'totalAp',
      desc: 'totalAp of character provided',
      type: 'string',
      required: true,
      default: "Error Ap"
    },
    {
      name: 'weaponName',
      desc: 'artifact of character provided',
      type: 'string',
      required: true,
      default: "Error weapon"
    },
    {
      name: 'rank',
      desc: 'rank of artifact',
      type: 'string',
      required: true,
      default: "Error Rank"
    },
    {
      name: 'characterName',
      desc: 'Character\'s name',
      type: 'string',
      required: true,
      default: "Error Name"
    },
    {
      name: 'realm',
      desc: 'Character\'s Realm',
      type: 'string',
      required: true,
      default: "Error Realm"
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