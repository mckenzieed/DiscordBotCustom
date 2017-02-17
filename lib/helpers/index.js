var ParsesHelpers = require('../../custom_modules/ParsesHelpers');
var request = require('request');
var PrivateCommandHelpers = require('../modules/private-command-helpers');
var pcHelpers = new PrivateCommandHelpers();

var convertDifficultyToWCLFormat = function(difficulty) {
    switch (difficulty.charAt(0).toUpperCase()) {
        case "N":
            return "3";
        case "H":
            return "4";
        case "M":
            return "5";
        default:
            if (difficulty == "3"
            ||  difficulty == "4"
            ||  difficulty == "5")
                return difficulty;
    }
}

var convertDifficultyToUserFormat = function(difficulty) {
    switch (difficulty) {
        case "3":
            return "Normal";
        case "4":
            return "Heroic";
        case "5":
            return "Mythic";
        default:
            return difficulty;
    }
}

var getParsesBasedOnSpec = function (url, character, boss, metric, context) {
    request({
        url: url,
        json: true
    }, function (error, response, body) {
        
        if (!error && response.statusCode === 200) {
            var parsesHelpers = new ParsesHelpers(body);
            var parses = parsesHelpers.getMostRecentBossParse(boss);

            if (parses.length > 0) {
                pcHelpers.announceParses(parses, boss, metric, context.msg);
            }

        } else {
          return error;
        }
    });
}

var checkForExistingCharacterOrError = function(url, character, boss, context) {
    request({
        url: url,
        json: true
    }, function (error, response, body) {
        
        if (!error && response.statusCode === 200) {
            var parsesHelpers = new ParsesHelpers(body);
            var parses = parsesHelpers.getMostRecentBossParse(boss);
            
            if (checkForError(parses, character, boss, context)) return;
        } else {
          checkForError({error:error,
            statusCode: response.statusCode}, character, boss, context);
            return;
        }
    });
}


var checkForError = function (parse, character, boss, context) {
    if (parse.length === 0) {
        pcHelpers.announceLogsNotFound(character, boss, context.msg);
        return true;
    }
    if (parse.statusCode) {
        pcHelpers.announceCharacterNotFound(character, parse.statusCode, context.msg);
        return true;
    }
    if (parse.error) {
        pcHelpers.announceError(parse.error, context.msg);
        return true
    }

    return false;
}

var prettify = function (stringToPrettify) {
    stringToPrettify = stringToPrettify.charAt(0).toUpperCase() + stringToPrettify.slice(1);
    var index = stringToPrettify.indexOf("-");
    index = index > -1 ? index : stringToPrettify.indexOf("+");
    if (index > -1) {
        stringToPrettify = stringToPrettify.slice(0, index+1) + 
                            stringToPrettify.charAt(index+1).toUpperCase() + 
                            stringToPrettify.slice(index+2); 
    };
    return stringToPrettify;
}

module.exports = {
    convertDifficultyToWCLFormat: convertDifficultyToWCLFormat,
    convertDifficultyToUserFormat: convertDifficultyToUserFormat,
    getParsesBasedOnSpec: getParsesBasedOnSpec,
    checkForError: checkForError,
    checkForExistingCharacterOrError: checkForExistingCharacterOrError,
    prettify: prettify
}