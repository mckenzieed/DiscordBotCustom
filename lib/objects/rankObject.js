function rankObject(realmRank, worldRank) {
    this.realmRank = realmRank;
    this.worldRank = worldRank;
}

rankObject.prototype.getRealmRank = function () {
    return this.realmRank;
}

rankObject.prototype.getWorldRank = function () {
    return this.worldRank;
}

module.exports = rankObject;