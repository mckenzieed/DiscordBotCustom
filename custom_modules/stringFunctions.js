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

module.exports = prettify;