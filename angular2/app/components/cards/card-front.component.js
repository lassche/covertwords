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
var CardFrontComponent = (function () {
    function CardFrontComponent() {
        this._isShowingFront = true;
        this._text = "";
        this._isShowingColor = true;
    }
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], CardFrontComponent.prototype, "_text", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], CardFrontComponent.prototype, "_isShowingColor", void 0);
    __decorate([
        core_1.ViewChild('_cardBody'), 
        __metadata('design:type', Object)
    ], CardFrontComponent.prototype, "_cardBody", void 0);
    CardFrontComponent = __decorate([
        core_1.Component({
            selector: 'card-front',
            styleUrls: ['app/components/styles/colors.css',
                'app/components/styles/page.css',
                'app/components/styles/input.css',
                'app/components/styles/label.css',
                'app/components/styles/toggle-button.css',
                'app/components/title-page/title-page.css'
            ],
            styles: ["\n        .card-body {\n            width: 148px;\n            height: 108px;\n            \n            position: relative;\n            display: flex;\n            flex-direction: column-reverse;\n            align-items:center;\n                        \n            border-radius: 5px;\n            box-shadow: 0px 5px 4px #282828;\n            margin:10px;\n\n            perspective: 800px;\n            \n        }\n        \n        .card-body:hover {\n            transform: scale(1.025, 1.025);\n        }\n        \n        .card-label {\n\n            z-index: 2;\n            width: 100%;\n            margin-bottom: 4px;\n            margin-left:   8px;\n            margin-right:  8px;\n        }\n\n        .card-background {\n            position: absolute;\n            left: 5;\n            top: 5;\n        }\n    "],
            template: "\n        <div class='card-body background-dark-hover' >\n            \n            <div class='card-label label-medium color-dark background-transparent-light'>\n                {{_text}}\n            </div>\n\n            <div class='card-background'>\n                <ng-content></ng-content>\n           </div>\n            \n        <div>\n    "
        }), 
        __metadata('design:paramtypes', [])
    ], CardFrontComponent);
    return CardFrontComponent;
}());
exports.CardFrontComponent = CardFrontComponent;
//# sourceMappingURL=card-front.component.js.map