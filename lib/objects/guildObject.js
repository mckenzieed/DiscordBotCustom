function guildObject(name, realm, region) {
    this.name = name;
    this.realm = realm;
    this.region = region;
}

guildObject.prototype.getName = function () {
    return this.name;
}

guildObject.prototype.getRealm = function () {
    return this.realm;
}

guildObject.prototype.getRegion = function () {
    return this.region
}

module.exports = guildObject;