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

var possibleError = false;
var getParsesBasedOnSpec = function (url, character, boss, metric, context) {
    request({
        url: url,
        json: true
    }, function (error, response, body) {
        
        if (!error && response.statusCode === 200) {
            var parsesHelpers = new ParsesHelpers(body);
            var parses = parsesHelpers.getMostRecentBossParse(boss.getName(), boss.getDifficulty());
            
            if (checkForError(parses, character, boss, context)) return;

            pcHelpers.announceParses(parses, boss, metric, context.msg);

        } else {
          checkForError({error:error,
            statusCode: response.statusCode}, character, boss, context);
            return;
        }
    });
}


var checkForError = function (parse, character, boss, context) {
    if (parse.length === 0) {
        if (possibleError) {
            pcHelpers.announceLogsNotFound(character, boss, context.msg);
        }
        possibleError = true;
        return true;
    }
    if (parse.statusCode) {
        if (possibleError) {
            pcHelpers.announceCharacterNotFound(character, parse.statusCode, context.msg);
        }
        possibleError = true;
        return true;
    }
    if (parse.error) {
        if (possibleError) {
            pcHelpers.announceError(parse.error, context.msg);
        }
        possibleError = true;
        return true
    }

    return false;

    //parses.push(dpsParses, hpsParses);
    //helpers.combineParses(dpsParses, hpsParses);
}

module.exports = {
    convertDifficultyToWCLFormat: convertDifficultyToWCLFormat,
    convertDifficultyToUserFormat: convertDifficultyToUserFormat,
    getParsesBasedOnSpec: getParsesBasedOnSpec,
    checkForError: checkForError
}