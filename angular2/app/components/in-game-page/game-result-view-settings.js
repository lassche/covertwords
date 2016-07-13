"use strict";
var game_model_1 = require('../../model/game-model');
var GameResultViewSettings = (function () {
    function GameResultViewSettings() {
        this.text = "";
        this.imageName = "";
    }
    GameResultViewSettings.prototype.setResult = function (result) {
        switch (result) {
            case game_model_1.GameState.BlackCardRevealed:
                this.text = "Operative was assasinated";
                this.imageName = "assets/img/assasin-victory.png";
                break;
            case game_model_1.GameState.Team1Won:
                this.text = "Red team won";
                this.imageName = "assets/img/red-team-victory.png";
                break;
            case game_model_1.GameState.Team2Won:
                this.text = "Blue team won";
                this.imageName = "assets/img/blue-team-victory.png";
                break;
            default:
                break;
        }
    };
    return GameResultViewSettings;
}());
exports.GameResultViewSettings = GameResultViewSettings;
//# sourceMappingURL=game-result-view-settings.js.map