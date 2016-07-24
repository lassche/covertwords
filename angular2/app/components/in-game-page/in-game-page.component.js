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
var router_deprecated_1 = require('@angular/router-deprecated');
var model_1 = require('../../model');
var cards_1 = require('../cards');
var score_badge_component_1 = require('./score-badge.component');
var game_state_overlay_component_1 = require('./game-state-overlay.component');
var post_game_result_overlay_component_1 = require('./post-game-result-overlay.component');
var board_component_1 = require('./board.component');
var InGamePageComponent = (function () {
    function InGamePageComponent(router, configuration, gameModel) {
        this.router = router;
        this.configuration = configuration;
        this.gameModel = gameModel;
        this._imageNameMap = {
            'red': 'assets/img/red.png',
            'blue': 'assets/img/blue.png',
            'black': 'assets/img/black.png',
            'white': 'assets/img/white.png'
        };
        this._svgColorMap = {
            'red': 'svg-color-B',
            'blue': 'svg-color-A',
            'black': 'svg-color-D',
            'white': 'svg-color-C'
        };
    }
    InGamePageComponent.prototype.createCardViewModel = function (card, id, isShowingColor) {
        var result = new cards_1.CardViewModel();
        result._text = card.word;
        result._imageName = this._imageNameMap[card.color];
        result._svgColorName = this._svgColorMap[card.color];
        result._isShowingColor = isShowingColor;
        result._id = id;
        return result;
    };
    InGamePageComponent.prototype.ngAfterViewChecked = function () {
        var _this = this;
        // ng2 'feature': can't change the binding here so set a time out
        setTimeout(function () {
            if (_this.cards == null) {
                _this.gameModel.initializeGame(_this.configuration);
                _this.beginRound();
            }
        });
    };
    InGamePageComponent.prototype.beginRound = function () {
        this.gameModel.beginRound(this.configuration);
        this.cards = this.gameModel.createDeck(this.configuration._boardWidth, this.configuration._boardHeight, this.configuration._localRole);
        var shouldCardShowColor = this.configuration._localRole == model_1.GameTypes.ClientRole.Intelligence;
        var viewModel = [];
        for (var i = 0; i < this.cards.length; ++i) {
            var row = [];
            viewModel.push(row);
            for (var j = 0; j < this.cards[i].length; ++j) {
                var card = this.cards[i][j];
                row.push(this.createCardViewModel(card, i * this.configuration._boardWidth + j, shouldCardShowColor));
            }
        }
        this.board.cardViewModelSet = viewModel;
        this.hasGameBeenDecided = false;
    };
    InGamePageComponent.prototype.handleOnCardFlipped = function (cardState) {
        var x = Math.floor(cardState.id / this.configuration._boardWidth);
        var y = Math.floor(cardState.id % this.configuration._boardWidth);
        this.gameModel.onCardStateChanged(this.cards[x][y], cardState.isFront);
        // players can continue the game. to track if the game has already ended
        // we keep track of the game state. only check the game model state if
        // the game hasn't already been decided   
        if (!this.hasGameBeenDecided) {
            if (this.gameModel.state != model_1.GameState.InProgress) {
                this.gameStateOverlay.setResult(this.gameModel.state);
                this.postResultOverlay.setResult(this.gameModel.state);
                this.gameStateOverlayContainer.nativeElement.classList.remove('hidden');
                this.hasGameBeenDecided = true;
            }
        }
    };
    InGamePageComponent.prototype.continueGame = function (evt) {
        this.gameStateOverlayContainer.nativeElement.classList.add('hidden');
        this.postResultOverlayContainer.nativeElement.classList.remove('hidden');
    };
    InGamePageComponent.prototype.nextRound = function (evt) {
        this.gameStateOverlayContainer.nativeElement.classList.add('hidden');
        this.postResultOverlayContainer.nativeElement.classList.add('hidden');
        this.gameModel.endRound();
        this.beginRound();
    };
    InGamePageComponent.prototype.mainMenu = function (evt) {
        this.router.navigate([model_1.StateNames.title]);
    };
    __decorate([
        core_1.ViewChild('_board'), 
        __metadata('design:type', board_component_1.BoardComponent)
    ], InGamePageComponent.prototype, "board", void 0);
    __decorate([
        core_1.ViewChild('gameStateOverlay'), 
        __metadata('design:type', Object)
    ], InGamePageComponent.prototype, "gameStateOverlay", void 0);
    __decorate([
        core_1.ViewChild('postResultOverlay'), 
        __metadata('design:type', Object)
    ], InGamePageComponent.prototype, "postResultOverlay", void 0);
    __decorate([
        core_1.ViewChild('gameStateOverlayContainer'), 
        __metadata('design:type', Object)
    ], InGamePageComponent.prototype, "gameStateOverlayContainer", void 0);
    __decorate([
        core_1.ViewChild('postResultOverlayContainer'), 
        __metadata('design:type', Object)
    ], InGamePageComponent.prototype, "postResultOverlayContainer", void 0);
    InGamePageComponent = __decorate([
        core_1.Component({
            selector: 'in-game-page',
            directives: [board_component_1.BoardComponent, score_badge_component_1.ScoreBadgeComponent, game_state_overlay_component_1.GameStateOverlayComponent, post_game_result_overlay_component_1.PostGameResultOverlayComponent],
            styleUrls: ['app/components/styles/colors.css',
                'app/components/styles/page.css',
                'app/components/styles/badge.css',
                'app/components/styles/button.css',
                'app/components/styles/layout.css',
                'app/components/title-page/title-page.css'
            ],
            templateUrl: "app/components/in-game-page/in-game-page.html",
        }), 
        __metadata('design:paramtypes', [router_deprecated_1.Router, model_1.Configuration, model_1.GameModel])
    ], InGamePageComponent);
    return InGamePageComponent;
}());
exports.InGamePageComponent = InGamePageComponent;
//# sourceMappingURL=in-game-page.component.js.map