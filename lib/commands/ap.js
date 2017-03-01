var Clapp = require('../modules/clapp-discord');
var helpers = require('../helpers');
var cfg = require('../../config.js');
var Character = require('../objects/Character');

var wowApiKey = cfg.wowToken;

var url = 'https://us.api.battle.net/wow/character/';

module.exports = new Clapp.Command({
  name: "ap",
  desc: "Lists info about equipped artifact",
  fn: (argv, context) => {
    // This output will be redirected to your app's onReply function
    var characterName = helpers.prettify(argv.args.characterName);
    var realm = helpers.prettify(argv.args.characterRealm);
    var character = new Character(characterName, realm);

    var charUrl = url + realm + "/" + characterName;
    var fullUrl = charUrl + "?fields=items&locale=en_US&apikey=" + wowApiKey;

    helpers.getArtifactInfo(fullUrl, character, context);

    return 'Foo was executed!' + ' The value of testarg is: ' + argv.args.testarg +
      (argv.flags.testflag ? ' testflag was passed!' : '');
  },
  args: [
    {
      name: 'characterName',
      desc: 'The name of the character to look up',
      type: 'string',
      required: false,
      default: 'Ralaanii'
    },
    {
      name: 'characterRealm',
      desc: 'The realm of the character to look up',
      type: 'string',
      required: false,
      default: 'Proudmoore'
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
