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
var title_component_1 = require('../shared/title.component');
var TitlePageComponent = (function () {
    function TitlePageComponent(router) {
        this.router = router;
    }
    TitlePageComponent.prototype.onBeginGame = function () {
        this.router.navigate([model_1.StateNames.configuration]);
    };
    TitlePageComponent = __decorate([
        core_1.Component({
            selector: 'title-page',
            directives: [title_component_1.TitleComponent],
            styleUrls: ['app/components/styles/colors.css',
                'app/components/styles/page.css',
                'app/components/styles/button.css',
                'app/components/title-page/title-page.css'
            ],
            templateUrl: "app/components/title-page/title-page.html",
        }), 
        __metadata('design:paramtypes', [router_deprecated_1.Router])
    ], TitlePageComponent);
    return TitlePageComponent;
}());
exports.TitlePageComponent = TitlePageComponent;
//# sourceMappingURL=title-page.component.js.map