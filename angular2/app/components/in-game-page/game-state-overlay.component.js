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
var game_result_view_model_1 = require('./game-result-view-model');
var GameStateOverlayComponent = (function () {
    function GameStateOverlayComponent() {
        this.viewModel = new game_result_view_model_1.GameResultViewModel();
        this.onContinueGame = new core_1.EventEmitter();
        this.onNextRound = new core_1.EventEmitter();
        this.onMainMenu = new core_1.EventEmitter();
    }
    GameStateOverlayComponent.prototype.setResult = function (result) {
        this.viewModel.setResult(result);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', game_result_view_model_1.GameResultViewModel)
    ], GameStateOverlayComponent.prototype, "viewModel", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], GameStateOverlayComponent.prototype, "onContinueGame", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], GameStateOverlayComponent.prototype, "onNextRound", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], GameStateOverlayComponent.prototype, "onMainMenu", void 0);
    GameStateOverlayComponent = __decorate([
        core_1.Component({
            selector: 'game-state-overlay',
            styleUrls: ['app/components/styles/colors.css',
                'app/components/styles/page.css',
                'app/components/styles/badge.css',
                'app/components/styles/button.css',
                'app/components/styles/label.css'
            ],
            styles: ["\n\n        .overlay-container {\n            width: 100%;\n            height: 100%;\n            position: absolute;\n            top: 0;\n            left: 0;\n            z-index:3;\n            display: flex;\n            flex-direction:column;\n\n            -webkit-user-select: none;  \n            -moz-user-select: none;    \n            -ms-user-select: none;      \n            user-select: none;  \n        }\n\n        .overlay {\n            position: absolute;\n            top: 35%;\n            width: 100%;\n            height: 30%;\n            display: flex;\n            align-items: center;\n            justify-content: center;\n            background: #343434;\n            z-index:3;\n            display: flex;\n            flex-direction:column;  \n             box-shadow: 0px 5px 4px #282828;\n        }\n\n        .victory-image-layout {\n            position:relative;\n            top: -80px;\n        }\n    "],
            template: "\n        <div *ngIf=\"viewModel\"  class=\"overlay-container background-transparent-primary\">\n\n            <div class=\"overlay label-large-bold color-primary\">\n                <div class=\"badge-large victory-image-layout {{viewModel.colorCSS}}\">\n                    <div class=\"badge-large-content border-yellow\">\n                        <img src=\"{{viewModel.imageName}}\" width=\"138\" height=\"138\" />\n                    </div>\n                </div>\n                \n                {{viewModel.text}}\n\n                <div class=\"button-component-horizontal-container\">\n                    <div class=\"button-component-small color-dark background-primary-hover\" (click)=\"onContinueGame.emit(null)\">\n                        CONTINUE GAME\n                    </div>\n\n                    <div class=\"button-component-small color-dark background-primary-hover\" (click)=\"onNextRound.emit(null)\">\n                        NEXT ROUND\n                    </div>\n\n                    <div class=\"button-component-small color-dark background-primary-hover\" (click)=\"onMainMenu.emit(null)\">\n                        MAIN  MENU\n                    </div>\n                </div>\n            </div>\n        </div>\n    ",
        }), 
        __metadata('design:paramtypes', [])
    ], GameStateOverlayComponent);
    return GameStateOverlayComponent;
}());
exports.GameStateOverlayComponent = GameStateOverlayComponent;
//# sourceMappingURL=game-state-overlay.component.js.map