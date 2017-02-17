function ParseObject(parseObject) {
    this.difficulty = parseObject.difficulty;
    this.size = parseObject.size;
    this.kill = parseObject.kill;
    this.name = parseObject.name;
    this.specs = parseObject.specs;
}

ParseObject.prototype.getDifficulty() {
    return this.difficulty;
}

ParseObject.prototype.getSize() {
    return this.size;
}

ParseObject.prototype.getKill() {
    return this.kill;
}

ParseObject.prototype.getName() {
    return this.name;
}

ParseObject.prototype.getSpecs() {
    return this.specs;
}

module.exports = ParseObject;