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
var card_core_component_1 = require('../cards/card-core.component');
var BoardComponent = (function () {
    function BoardComponent() {
        this.onCardFlipped = new core_1.EventEmitter();
    }
    BoardComponent.prototype.handleCardFlipped = function (cardState) {
        this.onCardFlipped.emit(cardState);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], BoardComponent.prototype, "cardViewModelSet", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], BoardComponent.prototype, "id", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], BoardComponent.prototype, "onCardFlipped", void 0);
    BoardComponent = __decorate([
        core_1.Component({
            selector: 'board',
            template: "\n        <table  class=\"card-area\">\n            <tr *ngFor=\"let row of cardViewModelSet\" align=\"right\" >\n                <td *ngFor=\"let cardViewModel of row;\">\n                    <card-core [_viewModel]=cardViewModel (onCardFlipped)=\"handleCardFlipped($event)\"></card-core> \n                </td>\n            </tr>\n        </table>\n    ",
            styles: [''],
            directives: [card_core_component_1.CardCoreComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], BoardComponent);
    return BoardComponent;
}());
exports.BoardComponent = BoardComponent;
//# sourceMappingURL=board.component.js.map