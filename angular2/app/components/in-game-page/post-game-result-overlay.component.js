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
var PostGameResultOverlayComponent = (function () {
    function PostGameResultOverlayComponent() {
        this.viewModel = new game_result_view_model_1.GameResultViewModel();
        this.onNextRound = new core_1.EventEmitter();
        this.onMainMenu = new core_1.EventEmitter();
    }
    PostGameResultOverlayComponent.prototype.setResult = function (result) {
        this.viewModel.setResult(result);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', game_result_view_model_1.GameResultViewModel)
    ], PostGameResultOverlayComponent.prototype, "viewModel", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], PostGameResultOverlayComponent.prototype, "onNextRound", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], PostGameResultOverlayComponent.prototype, "onMainMenu", void 0);
    PostGameResultOverlayComponent = __decorate([
        core_1.Component({
            selector: 'post-game-result-overlay',
            styleUrls: ['app/components/styles/colors.css',
                'app/components/styles/page.css',
                'app/components/styles/badge.css',
                'app/components/styles/button.css',
                'app/components/styles/label.css'
            ],
            styles: ["\n\n        .overlay-container {\n            width: 100%;\n            height: 100px;\n            position: absolute;\n            bottom: 0;\n            left: 0;\n            z-index:3;\n            display: flex;\n            flex-direction:column;\n\n            align-items: center;\n            justify-content: center;\n\n             background: #343434;\n\n            -webkit-user-select: none;  \n            -moz-user-select: none;    \n            -ms-user-select: none;      \n            user-select: none;  \n        }\n\n    "],
            template: "\n        <div *ngIf=\"viewModel\" class=\"overlay-container background--dark label-large-bold color-primary\">\n            \n            {{viewModel.text}}\n\n            <div class=\"button-component-horizontal-container\">\n\n                <div class=\"button-component-small color-dark background-primary-hover\" (click)=\"onNextRound.emit(null)\">\n                    NEXT ROUND\n                </div>\n\n                <div class=\"button-component-small color-dark background-primary-hover\" (click)=\"onMainMenu.emit(null)\">\n                    MAIN  MENU\n                </div>\n            </div>\n        </div>\n    ",
        }), 
        __metadata('design:paramtypes', [])
    ], PostGameResultOverlayComponent);
    return PostGameResultOverlayComponent;
}());
exports.PostGameResultOverlayComponent = PostGameResultOverlayComponent;
//# sourceMappingURL=post-game-result-overlay.component.js.map