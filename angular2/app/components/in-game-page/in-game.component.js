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
var configuration_1 = require('../../model/configuration');
var title_component_1 = require('../shared/title.component');
var input_component_1 = require('../shared/input.component');
var InGamePageComponent = (function () {
    function InGamePageComponent(_stateMachine, _configuration) {
        this._stateMachine = _stateMachine;
        this._configuration = _configuration;
    }
    InGamePageComponent.prototype.onBeginGame = function () {
        this._configuration._missionName = this._missionName._inputText;
        this._configuration._localRole = this._roleSelection._selectedRole;
        this._configuration._startingTeam = this._agencySelection.getSelectedAgency();
        if (this._configuration._startingTeam == configuration_1.StartingTeam.Team1) {
            this._configuration._teamCardCount[0] = 8;
            this._configuration._teamCardCount[1] = 7;
        }
        else if (this._configuration._startingTeam == configuration_1.StartingTeam.Team2) {
            this._configuration._teamCardCount[0] = 7;
            this._configuration._teamCardCount[1] = 8;
        }
        this._stateMachine.notifyConfigurationComplete();
    };
    __decorate([
        core_1.ViewChild('_missionName'), 
        __metadata('design:type', input_component_1.InputComponent)
    ], InGamePageComponent.prototype, "_missionName", void 0);
    __decorate([
        core_1.ViewChild('_roleSelection'), 
        __metadata('design:type', Object)
    ], InGamePageComponent.prototype, "_roleSelection", void 0);
    __decorate([
        core_1.ViewChild('_agencySelection'), 
        __metadata('design:type', Object)
    ], InGamePageComponent.prototype, "_agencySelection", void 0);
    InGamePageComponent = __decorate([
        core_1.Component({
            selector: 'configuration-page',
            directives: [title_component_1.TitleComponent, input_component_1.InputComponent],
            styleUrls: ['components/styles/colors.css',
                'components/styles/page.css',
                'components/styles/input.css',
                'components/styles/button.css',
                'components/styles/layout.css',
                'components/title-page/title-page.css'
            ],
            templateUrl: "components/configuration-page/configuration-page.html",
        }), 
        __metadata('design:paramtypes', [code_names_statemachine_1.CodeNamesStateMachine, configuration_1.Configuration])
    ], InGamePageComponent);
    return InGamePageComponent;
}());
exports.InGamePageComponent = InGamePageComponent;
//# sourceMappingURL=in-game.component.js.map