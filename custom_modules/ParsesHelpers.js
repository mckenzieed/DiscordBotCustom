var SpecObject = require("../lib/objects/SpecObject");

function ParsesHelpers(parseObject) {
    this.allParses = parseObject;
}

ParsesHelpers.prototype.getAllParsesOfBoss = function (bossName) {
    var allParses = this.allParses;
    var retList = [];

    for(var i = 0; i < allParses.length; i++) {
        if (allParses[i].name.toUpperCase() === bossName.toUpperCase()) {
            retList.push(allParses[i]);
        }
    }
    return retList;
}

ParsesHelpers.prototype.getParsesOfBossInDifficulty = function (bossName, difficulty) {
    var allParses = this.allParses;

    for(var i = 0; i < allParses.length; i++) {
        if (allParses[i].name.toUpperCase() === bossName.toUpperCase() 
            && allParses[i].difficulty == difficulty) {
            return allParses[i];
        }
    }
    return null;
}

ParsesHelpers.prototype.getMostRecentBossParse = function (bossName, difficulty) {
    var bossParse = this.getParsesOfBossInDifficulty(bossName, difficulty);
    if (!bossParse) {
        return null;
    }
    var specs = bossParse.specs;
    var parse = [];
    specs.forEach(function(spec) {
        var specObject = new SpecObject(spec.spec, spec.data[0].percent);
        parse.push(specObject);
    });
    if (parse.length === 0) {
        return null;
    }
    return parse;
}

module.exports = ParsesHelpers;