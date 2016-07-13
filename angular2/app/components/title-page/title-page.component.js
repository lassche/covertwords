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
var code_names_statemachine_1 = require('../../model/code-names-statemachine');
var title_component_1 = require('../shared/title.component');
var TitlePageComponent = (function () {
    function TitlePageComponent(_stateMachine) {
        this._stateMachine = _stateMachine;
    }
    TitlePageComponent.prototype.onBeginGame = function () {
        this._stateMachine.notifyTitleScreenComplete();
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
        __metadata('design:paramtypes', [code_names_statemachine_1.CodeNamesStateMachine])
    ], TitlePageComponent);
    return TitlePageComponent;
}());
exports.TitlePageComponent = TitlePageComponent;
//# sourceMappingURL=title-page.component.js.map