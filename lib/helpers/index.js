var convertDifficultyToWCLFormat = function(difficulty) {
    switch (difficulty.charAt(0).toUpperCase()) {
        case "N":
            return "3";
        case "H":
            return "4";
        case "M":
            return "5";
        default:
            if (difficulty == "3"
            ||  difficulty == "4"
            ||  difficulty == "5")
                return difficulty;
    }
}

var convertDifficultyToUserFormat = function(difficulty) {
    switch (difficulty) {
        case "3":
            return "Normal";
        case "4":
            return "Heroic";
        case "5":
            return "Mythic";
    }
}

module.exports = {
    convertDifficultyToWCLFormat: convertDifficultyToWCLFormat,
    convertDifficultyToUserFormat: convertDifficultyToUserFormat
}