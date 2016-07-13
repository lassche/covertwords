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
var role_selection_component_1 = require('./role-selection.component');
var agency_selection_component_1 = require('./agency-selection.component');
var ConfigurationPageComponent = (function () {
    function ConfigurationPageComponent(_stateMachine, _configuration) {
        this._stateMachine = _stateMachine;
        this._configuration = _configuration;
    }
    ConfigurationPageComponent.prototype.onBeginGame = function () {
        this._configuration._missionName = this._missionName._inputText;
        this._configuration._localRole = this._roleSelection.selectedRole;
        this._configuration.startTeam = this._agencySelection.selectedAgency;
        this._stateMachine.notifyConfigurationComplete();
    };
    __decorate([
        core_1.ViewChild('_missionName'), 
        __metadata('design:type', input_component_1.InputComponent)
    ], ConfigurationPageComponent.prototype, "_missionName", void 0);
    __decorate([
        core_1.ViewChild('_roleSelection'), 
        __metadata('design:type', role_selection_component_1.RoleSelectionComponent)
    ], ConfigurationPageComponent.prototype, "_roleSelection", void 0);
    __decorate([
        core_1.ViewChild('_agencySelection'), 
        __metadata('design:type', agency_selection_component_1.AgencySelectionComponent)
    ], ConfigurationPageComponent.prototype, "_agencySelection", void 0);
    ConfigurationPageComponent = __decorate([
        core_1.Component({
            selector: 'configuration-page',
            directives: [title_component_1.TitleComponent, input_component_1.InputComponent, role_selection_component_1.RoleSelectionComponent, agency_selection_component_1.AgencySelectionComponent],
            styleUrls: ['app/components/styles/colors.css',
                'app/components/styles/page.css',
                'app/components/styles/input.css',
                'app/components/styles/button.css',
                'app/components/styles/layout.css',
                'app/components/title-page/title-page.css'
            ],
            templateUrl: "app/components/configuration-page/configuration-page.html",
        }), 
        __metadata('design:paramtypes', [code_names_statemachine_1.CodeNamesStateMachine, configuration_1.Configuration])
    ], ConfigurationPageComponent);
    return ConfigurationPageComponent;
}());
exports.ConfigurationPageComponent = ConfigurationPageComponent;
//# sourceMappingURL=configuration-page.component.js.map