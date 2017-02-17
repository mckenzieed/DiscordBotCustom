function SpecObject(spec, parse, dps) {
    this.spec = spec;
    this.parse = parse;
    this.dps = dps;
}

SpecObject.prototype.getSpec = function () {
    return this.spec;
}

SpecObject.prototype.getParse = function () {
    return this.parse;
}

SpecObject.prototype.getDps = function () {
    return this.dps;
}

module.exports = SpecObject;