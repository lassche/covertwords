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
var card_state_changed_event_1 = require('./card-state-changed.event');
var card_viewmodel_1 = require('./card-viewmodel');
var CardContainer = (function () {
    function CardContainer() {
        this.onCardFlipped = new core_1.EventEmitter();
    }
    CardContainer.prototype.flipCard = function () {
        if (!this._viewModel._isShowingFront) {
            this._cardContainer.nativeElement.classList.add('rotation-animation-back-to-front');
            this._cardContainer.nativeElement.classList.remove('rotation-animation-front-to-back');
        }
        else {
            this._cardContainer.nativeElement.classList.remove('rotation-animation-back-to-front');
            this._cardContainer.nativeElement.classList.add('rotation-animation-front-to-back');
        }
        this._viewModel._isShowingFront = !this._viewModel._isShowingFront;
        this.onCardFlipped.emit(new card_state_changed_event_1.CardStateChangedEvent(this._viewModel._id, this._viewModel._isShowingFront));
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', card_viewmodel_1.CardViewModel)
    ], CardContainer.prototype, "_viewModel", void 0);
    __decorate([
        core_1.ViewChild('_cardContainer'), 
        __metadata('design:type', Object)
    ], CardContainer.prototype, "_cardContainer", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], CardContainer.prototype, "onCardFlipped", void 0);
    CardContainer = __decorate([
        core_1.Component({
            selector: 'card-container',
            styles: ["\n        .card-container {\n            position: relative;\n            perspective: 1000px;\n            width: 168px;\n            height: 128px;\n        }\n\n        .card-side-container-front {\n            backface-visibility: hidden;\n            position: absolute;\n            transform: rotateY(0deg);\n        }\n\n        .card-side-container-back {\n            backface-visibility: hidden;\n            position: absolute;\n            transform: rotateY(180deg);\n        }\n        \n\n        .rotation-animation-back-to-front {\n            transition: all 0.6s ease;\n            transform-style: preserve-3d;\n            transform: rotateY(180deg);\n            animation-iteration-count:1;\n            \n        }\n\n        .rotation-animation-front-to-back {\n            transition: all 0.6s ease;\n            transform-style: preserve-3d;\n            transform: rotateY(0deg);\n            animation-iteration-count:1;\n        }\n\n    "],
            template: "\n        <div #_cardContainer class=\"card-container\" (click)=\"flipCard()\">\n            <div class=\"card-side-container-front\">\n                <ng-content select=\"front-content\"></ng-content>\n            </div>\n\n            <div class=\"card-side-container-back\">\n                <ng-content select=\"back-content\"></ng-content>\n            </div>\n        </div> \n    "
        }), 
        __metadata('design:paramtypes', [])
    ], CardContainer);
    return CardContainer;
}());
exports.CardContainer = CardContainer;
//# sourceMappingURL=card-container.component.js.map