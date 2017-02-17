function ParseObject(parseObject) {
    this.difficulty = parseObject.difficulty;
    this.size = parseObject.size;
    this.kill = parseObject.kill;
    this.name = parseObject.name;
    this.specs = parseObject.specs;
}

ParseObject.prototype.getDifficulty = function() {
    return this.difficulty;
}

ParseObject.prototype.getSize = function() {
    return this.size;
}

ParseObject.prototype.getKill = function() {
    return this.kill;
}

ParseObject.prototype.getName = function() {
    return this.name;
}

ParseObject.prototype.getSpecs = function() {
    return this.specs;
}

module.exports = ParseObject;