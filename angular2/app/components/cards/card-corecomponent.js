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
core_1.Component({
    selector: 'card-core',
    directives: [card_container_component_1.CardContainer, card_back_component_1.CardBackComponent, card_front_component_1.CardFrontComponent],
    template: "\n        <card-container>\n            <front-content>\n                <card-front  [_isShowingColor]=\"_isShowingColor\" [_text]=\"_text\">\n                    <img src=\"{{_imageName}}\" width=\"138\" height=\"98\" />\n                </card-front>\n\n            </front-content>\n\n            <back-content>\n                <card-back  class='svg-color-C' [_text]=\"_text\">\n                </card-back>\n            </back-content>\n\n        </card-container> \n    ",
});
var CardCoreComponent = (function () {
    function CardCoreComponent() {
        this._text = "card";
        this._imageName = "assets/img/white.png";
        this._isShowingColor = false;
    }
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], CardCoreComponent.prototype, "_text", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], CardCoreComponent.prototype, "_imageName", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], CardCoreComponent.prototype, "_isShowingColor", void 0);
    return CardCoreComponent;
}());
exports.CardCoreComponent = CardCoreComponent;
//# sourceMappingURL=card-corecomponent.js.map