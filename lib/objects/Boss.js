function Boss(name, difficulty) {
    this.name = name;
    this.difficulty = difficulty;
}

Boss.prototype.getName = function() {
    return this.name;
}

Boss.prototype.getDifficulty = function() {
    return this.difficulty;
}

module.exports = Boss;