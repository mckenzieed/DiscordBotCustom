var SpecObject = require("../lib/objects/SpecObject");

function ParsesHelpers(parseObject) {
    this.allParses = parseObject;
}

ParsesHelpers.prototype.getAllParsesOfBoss = function (boss) {
    var allParses = this.allParses;
    var retList = [];
    var bossName = boss.getNameWithoutHyphen();

    for(var i = 0; i < allParses.length; i++) {
        if (allParses[i].name.toUpperCase() === bossName.toUpperCase()) {
            retList.push(allParses[i]);
        }
    }
    return retList;
}

ParsesHelpers.prototype.getParsesOfBossInDifficulty = function (boss) {
    var allParses = this.allParses;
    var bossName = boss.getNameWithoutHyphen();
    var difficulty = boss.getDifficulty();
    for(var i = 0; i < allParses.length; i++) {
        if (allParses[i].name.toUpperCase() === bossName.toUpperCase() 
            && allParses[i].difficulty == difficulty) {
            return allParses[i];
        }
    }
    return null;
}

ParsesHelpers.prototype.getMostRecentBossParse = function (boss) {
    var parse = [];
    var bossParse = this.getParsesOfBossInDifficulty(boss);
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