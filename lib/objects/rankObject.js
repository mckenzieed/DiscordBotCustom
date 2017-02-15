function RankObject(realmRank, worldRank) {
    this.realmRank = realmRank;
    this.worldRank = worldRank;
}

RankObject.prototype.getRealmRank = function () {
    return this.realmRank;
}

RankObject.prototype.getWorldRank = function () {
    return this.worldRank;
}

module.exports = RankObject;