"use strict";
var game_util_1 = require('../util/game-util');
var card_1 = require('./card');
var card_factory_1 = require('./card-factory');
var game_types_1 = require('./game-types');
(function (GameState) {
    GameState[GameState["NotStarted"] = 0] = "NotStarted";
    GameState[GameState["InProgress"] = 1] = "InProgress";
    GameState[GameState["Team1Won"] = 2] = "Team1Won";
    GameState[GameState["Team2Won"] = 3] = "Team2Won";
    GameState[GameState["BlackCardRevealed"] = 4] = "BlackCardRevealed";
})(exports.GameState || (exports.GameState = {}));
var GameState = exports.GameState;
var GameModel = (function () {
    function GameModel() {
        this.points = [0, 0];
        this.missionName = "007 goes on vacation";
        this.seed = 0;
        this.team = 0;
        this.boardWidth = 5;
        this.boardHeight = 5;
        this.sessionCards = new Array();
        this.state = GameState.NotStarted;
        this.round = 0;
    }
    GameModel.prototype.cardCount = function () {
        return this.boardWidth * this.boardHeight;
    };
    GameModel.prototype.initializeGame = function (config) {
        this.round = 0;
        this.missionName = config._missionName;
        this.seed = game_util_1.GameUtil.crc32(this.missionName);
        this.localRole = config._localRole;
    };
    GameModel.prototype.beginRound = function (config) {
        this.seed += this.round;
        if (this.resolveStartTeam(config.startTeam) != game_types_1.GameTypes.StartingTeam.Team1) {
            config.swapStartCardCount();
        }
        this.points[0] = config.getStartCardCount(0);
        this.points[1] = config.getStartCardCount(1);
        this.deck = card_factory_1.CardFactory.createShuffledCardDeck(config, this.cardCount(), this.seed);
        this.sessionCards = this.createDeck(this.boardWidth, this.boardHeight, this.localRole);
        this.state = GameState.InProgress;
    };
    GameModel.prototype.endRound = function () {
        this.round++;
    };
    GameModel.prototype.resolveStartTeam = function (startTeamSetting) {
        var result = game_types_1.GameTypes.StartingTeam.Team1;
        var rnd = game_util_1.GameUtil.randomIntFromInterval(0, 1);
        if (startTeamSetting == game_types_1.GameTypes.StartingTeam.Random) {
            result = rnd == 0
                ? game_types_1.GameTypes.StartingTeam.Team1
                : game_types_1.GameTypes.StartingTeam.Team2;
        }
        else {
            result = startTeamSetting;
        }
        return result;
    };
    GameModel.prototype.createDeck = function (width, height, localRole) {
        var result = new Array();
        for (var i = 0; i < height; ++i) {
            var row = this.deck.slice(i * width, i * width + width);
            row.forEach(function (x) { return x.isKnown = localRole === game_types_1.GameTypes.ClientRole.Intelligence; });
            result.push(row);
        }
        return result;
    };
    GameModel.prototype.onCardStateChanged = function (card, isRevealed) {
        switch (card.type) {
            case card_1.CardType.Points:
                this.points[card.team] -= isRevealed ? 1 : -1;
                if (this.points[card.team] == 0) {
                    this.state = card.team == 0 ? GameState.Team1Won : GameState.Team2Won;
                }
                else {
                    this.state = GameState.InProgress;
                }
                break;
            case card_1.CardType.Loss:
                if (isRevealed) {
                    this.state = GameState.BlackCardRevealed;
                }
                else {
                    this.state = GameState.InProgress;
                }
                break;
            case card_1.CardType.EndOfTurn:
                break;
            default:
                break;
        }
        card.isRevealed = isRevealed;
    };
    return GameModel;
}());
exports.GameModel = GameModel;
//# sourceMappingURL=game-model.js.map