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
    var parse = [];
    var bossParse = this.getParsesOfBossInDifficulty(bossName, difficulty);
    if (!bossParse) {
        return parse;
    }
    var specs = bossParse.specs;
    
    specs.forEach(function(spec) {
        var specObject = new SpecObject(spec.spec, Math.round(spec.data[0].percent) + "%", spec.data[0].persecondamount.toLocaleString());
        parse.push(specObject);
    });
    return parse;
}

module.exports = ParsesHelpers;