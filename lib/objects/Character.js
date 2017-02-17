function character(name, server, region) {
    this.name = name;
    this.server = server;
    this.region = region;
}

character.prototype.getName = function() {
    return this.name;
}

character.prototype.getServer = function(){
    return this.server;
}

character.prototype.getRegion = function() {
    return this.region;
}

module.exports = character;