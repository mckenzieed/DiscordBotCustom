function StringBuilder() {
    this.string = "";
}

// Build a string from scratch
StringBuilder.prototype.build = function() {
    this.string = "";
    for (var i = 0; i < arguments.length; i++) {
        this.string += arguments[i];
        this.string += " ";
    }
}

// append a built string to the end of the existing string
StringBuilder.prototype.buildAndAppend = function() {
    for (var i = 0; i < arguments.length; i++) {
        this.string += arguments[i];
        this.string += " ";
    }
}

StringBuilder.prototype.clear = function() {
    this.string = "";
}


StringBuilder.prototype.getString = function() {
    if (!this.isEmpty()) {
        return this.string;
    }
}

StringBuilder.prototype.getString = function (checkForEmpty) {
    if (!checkForEmpty) {
        return this.string;
    }
}

StringBuilder.prototype.isEmpty = function () {
    if (this.string === "") {
        throw new Error("String is empty");
        return true;
    }
    else {
        return false;
    }
}

module.exports = StringBuilder;