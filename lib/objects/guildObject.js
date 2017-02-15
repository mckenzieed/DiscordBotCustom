function GuildObject(name, realm, region) {
    this.name = name;
    this.realm = realm;
    this.region = region;
}

GuildObject.prototype.getName = function () {
    return this.name;
}

GuildObject.prototype.getRealm = function () {
    return this.realm;
}

GuildObject.prototype.getRegion = function () {
    return this.region
}

module.exports = GuildObject;