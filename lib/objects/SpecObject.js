function SpecObject(spec, parse) {
    this.spec = spec;
    this.parse = parse;
}

SpecObject.prototype.getSpec = function () {
    return this.spec;
}

SpecObject.prototype.getParse = function () {
    return this.parse;
}

module.exports = SpecObject;