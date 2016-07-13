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
var core_1 = require("@angular/core");
var card_back_component_1 = require('./card-back.component');
var card_front_component_1 = require('./card-front.component');
var card_container_component_1 = require('./card-container.component');
var card_viewmodel_1 = require('./card-viewmodel');
var CardCoreComponent = (function () {
    function CardCoreComponent() {
        this.onCardFlipped = new core_1.EventEmitter();
    }
    CardCoreComponent.prototype.handleCardFlipped = function (cardState) {
        this.onCardFlipped.emit(cardState);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', card_viewmodel_1.CardViewModel)
    ], CardCoreComponent.prototype, "_viewModel", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], CardCoreComponent.prototype, "onCardFlipped", void 0);
    CardCoreComponent = __decorate([
        core_1.Component({
            selector: 'card-core',
            directives: [card_container_component_1.CardContainer, card_back_component_1.CardBackComponent, card_front_component_1.CardFrontComponent],
            styleUrls: ['app/components/styles/colors.css'],
            template: "\n        <card-container [_viewModel]=\"_viewModel\" (onCardFlipped)=\"handleCardFlipped($event)\">\n            <front-content>\n\n                <card-back [_isShowingColor]=\"_viewModel._isShowingColor\" class=\"{{_viewModel._svgColorName}}\" [_text]=\"_viewModel._text\">\n                </card-back>\n                \n            </front-content>\n\n            <back-content>\n                <card-front   [_text]=\"_viewModel._text\">\n                    <img src=\"{{_viewModel._imageName}}\" width=\"138\" height=\"98\" />\n                </card-front>\n            </back-content>\n\n        </card-container> \n    ",
        }), 
        __metadata('design:paramtypes', [])
    ], CardCoreComponent);
    return CardCoreComponent;
}());
exports.CardCoreComponent = CardCoreComponent;
//# sourceMappingURL=card-core.component.js.map