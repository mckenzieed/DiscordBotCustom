var SpecObject = require('../lib/objects/SpecObject');

var prettify = function (stringToPrettify) {
    stringToPrettify = stringToPrettify.charAt(0).toUpperCase() + stringToPrettify.slice(1);
    var index = stringToPrettify.indexOf("-");
    index = index > -1 ? index : stringToPrettify.indexOf("+");
    if (index > -1) {
        stringToPrettify = stringToPrettify.slice(0, index+1) + 
                            stringToPrettify.charAt(index+1).toUpperCase() + 
                            stringToPrettify.slice(index+2); 
    };
    return stringToPrettify;
}

var getSpecObjects = function (stringToParse) {
    var specObjects = [];
    while (stringToParse !== "") {
        var posOfSpec = stringToParse.indexOf("@") + 1;
        var posOfParse = stringToParse.indexOf("?") + 1;
        var posOfDps = stringToParse.indexOf("<") + 1;
        var spec = stringToParse.substring(posOfSpec, posOfParse-1);
        //var nextSpec = stringToParse.indexOf("@", posOfSpec);
        //posOfSpec = stringToParse.indexOf("@", posOfSpec) + 1;
        var parse = parse = stringToParse.substring(posOfParse, posOfDps-1);
        var nextSpec = stringToParse.indexOf("@", posOfSpec);
        posOfSpec = stringToParse.indexOf("@", posOfSpec) + 1;
        var dps = "";
        if (posOfSpec === 0) {
            dps = stringToParse.substr(posOfDps);
        } else {
            dps = stringToParse.substring(posOfDps, posOfSpec - 1);
        }

        stringToParse = stringToParse.substr(posOfSpec-1);
        if (spec === "Ranged") continue;

        var specObject = new SpecObject(spec, parse, dps);
        specObjects.push(specObject);

        if (posOfSpec === 0) break;

        //stringToParse = stringToParse.substr(posOfSpec-1);
    }

    return specObjects;
}

module.exports = { 
    prettify: prettify,
    getSpecObjects: getSpecObjects
}