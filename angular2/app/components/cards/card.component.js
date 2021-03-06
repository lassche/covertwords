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
var CardComponent = (function () {
    function CardComponent() {
        this._isShowingFront = true;
        this._text = "";
    }
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], CardComponent.prototype, "_text", void 0);
    __decorate([
        core_1.ViewChild('_cardBody'), 
        __metadata('design:type', Object)
    ], CardComponent.prototype, "_cardBody", void 0);
    CardComponent = __decorate([
        core_1.Component({
            selector: 'card',
            styleUrls: ['components/styles/colors.css',
                'components/styles/page.css',
                'components/styles/input.css',
                'components/styles/label.css',
                'components/styles/toggle-button.css',
                'components/title-page/title-page.css'
            ],
            styles: ["\n        .card-body {\n            width: 148px;\n            height: 108px;\n            \n            position: relative;\n            display: flex;\n            flex-direction: column;\n            justify-content:center;\n            align-items:center;\n                        \n            border-radius: 5px;\n            box-shadow: 0px 5px 4px #282828;\n            margin:10px;\n\n            perspective: 800px;\n            \n        }\n\n\n        /*\n        .card-body:hover {\n            transform: scale(1.025, 1.025);\n        }*/\n        \n        .card-label {\n            width: 100%;\n            z-index: 2;\n        }\n\n\n        .card-background {\n            position: absolute;\n            left: 0;\n            top: 0;\n        }\n    "],
            template: "\n        <div class='card-body background-dark-hover' >\n            \n            <div class='card-label label-medium color-accent background-transparent-dark'>\n                {{_text}}\n            </div>\n\n            <div class='card-background'>\n                <svg width=\"148\" height=\"108\" >\n                    <!--\n                      M - move to\n                      L - line to\n                      A - arc rx ry x-axis-rotation large-arc-flag sweep-flag x y\n                      Z - close\n                    -->\n                    <path d=\"M 15  10 \n                             L 50  10 \n                             L 10  38 \n                             L 10  13 \n                             A 5   5  0 0 1 15 10 \n                             Z\" >\n                    </path>\n                </svg>\n           </div>\n            \n            <div class='card-background'>\n                <svg width=\"148\" height=\"108\">\n                    <!--\n                      M - move to\n                      L - line to\n                      A - arc rx ry x-axis-rotation large-arc-flag sweep-flag x y\n                      Z - close\n                    -->\n                    <path d=\"M 133 98 \n                             L 98  98 \n                             L 138 68 \n                             L 138 95 \n                             A 5   5  0 0 1 133 98 \n                             Z\" >\n                    </path>\n                </svg>\n            </div>\n\n            <div class='card-background' >\n                <svg width=\"148\" height=\"108\">\n                    <!--\n                      M - move to\n                      L - line to\n                      A - arc rx ry x-axis-rotation large-arc-flag sweep-flag x y\n                      Z - close\n                    -->\n                    <path d=\"M 88  98 \n                             L 83  98 \n                             L 138 58 \n                             L 138 63 \n                             Z\" >\n                    </path>\n                </svg>\n            </div>\n        <div>\n    "
        }), 
        __metadata('design:paramtypes', [])
    ], CardComponent);
    return CardComponent;
}());
exports.CardComponent = CardComponent;
//# sourceMappingURL=card.component.js.map