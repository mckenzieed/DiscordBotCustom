function character(name, realm, region) {
    this.name = name;
    this.realm = realm;
    this.region = region;
}

character.prototype.getName = function() {
    return this.name;
}

character.prototype.getRealm = function(){
    return this.realm;
}

character.prototype.getRegion = function() {
    return this.region;
}

module.exports = character;