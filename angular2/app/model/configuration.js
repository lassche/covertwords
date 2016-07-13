"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var game_types_1 = require('./game-types');
exports.DEFAULT_MISSION_NAME = "file 007: the spy";
exports.DEFAULT_CARD_COUNT = [8, 7];
exports.DEFAULT_BOARD_WIDTH = 5;
exports.DEFAULT_BOARD_HEIGHT = 5;
var Configuration = (function () {
    function Configuration() {
        this._boardWidth = exports.DEFAULT_BOARD_WIDTH;
        this._boardHeight = exports.DEFAULT_BOARD_HEIGHT;
        this.startingTeam = game_types_1.GameTypes.StartingTeam.Random;
        this._localRole = game_types_1.GameTypes.ClientRole.Intelligence;
        this._missionName = exports.DEFAULT_MISSION_NAME;
        this.teamCardCount = exports.DEFAULT_CARD_COUNT;
    }
    Object.defineProperty(Configuration.prototype, "startTeam", {
        get: function () {
            return this.startingTeam;
        },
        set: function (value) {
            this.startingTeam = value;
        },
        enumerable: true,
        configurable: true
    });
    Configuration.prototype.getStartCardCount = function (teamID) {
        return this.teamCardCount[teamID];
    };
    Configuration.prototype.swapStartCardCount = function () {
        var temp = this.teamCardCount[0];
        this.teamCardCount[0] = this.teamCardCount[1];
        this.teamCardCount[1] = temp;
    };
    Configuration.prototype.setTeamCardCount = function (cardCount) {
        // assert cardCount.length == _teamCardCount.length
        for (var i = 0; i < cardCount.length; ++i) {
            this.teamCardCount[i] = cardCount[i];
        }
    };
    Configuration = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], Configuration);
    return Configuration;
}());
exports.Configuration = Configuration;
//# sourceMappingURL=configuration.js.map