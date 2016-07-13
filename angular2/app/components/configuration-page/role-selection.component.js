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
var toggle_button_component_1 = require('../shared/toggle-button.component');
var game_types_1 = require('../../model/game-types');
var RoleSelectionComponent = (function () {
    function RoleSelectionComponent() {
        this.selectedRole = game_types_1.GameTypes.ClientRole.Intelligence;
    }
    RoleSelectionComponent.prototype.onSelectionChanged = function (source) {
        if (source == this._intelligenceElement) {
            this._operativesElement._isToggled = !this._intelligenceElement._isToggled;
        }
        else if (source == this._operativesElement) {
            this._intelligenceElement._isToggled = !this._operativesElement._isToggled;
        }
        this.selectedRole = this._intelligenceElement._isToggled
            ? game_types_1.GameTypes.ClientRole.Intelligence
            : game_types_1.GameTypes.ClientRole.Operatives;
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], RoleSelectionComponent.prototype, "selectedRole", void 0);
    __decorate([
        core_1.ViewChild('_intelligenceButton'), 
        __metadata('design:type', Object)
    ], RoleSelectionComponent.prototype, "_intelligenceElement", void 0);
    __decorate([
        core_1.ViewChild('_operativesButton'), 
        __metadata('design:type', Object)
    ], RoleSelectionComponent.prototype, "_operativesElement", void 0);
    RoleSelectionComponent = __decorate([
        core_1.Component({
            selector: 'role-selection',
            directives: [toggle_button_component_1.ToggleButtonComponent],
            styles: [""],
            styleUrls: ['app/components/styles/colors.css',
                'app/components/styles/page.css',
                'app/components/styles/input.css',
                'app/components/styles/button.css',
                'app/components/styles/toggle-button.css',
                'app/components/title-page/title-page.css'
            ],
            template: "\n        <div>\n            <div class=\"toggle-button-container\">\n                <toggle-button #_intelligenceButton\n                    (onToggle)=\"onSelectionChanged($event)\"\n                    [_isToggled]=\"true\" [_colorClass]=\"'color-dark'\" [_colorToggledClass]=\"'color-base'\" [_backgroundClass]=\"'background-primary-hover'\">\n                    Intelligence\n                </toggle-button>\n                <toggle-button #_operativesButton\n                    (onToggle)=\"onSelectionChanged($event)\" \n                    [_isToggled]=\"false\" [_colorClass]=\"'color-dark'\" [_colorToggledClass]=\"'color-base'\" [_backgroundClass]=\"'background-primary-hover'\">\n                    Operatives\n                </toggle-button>\n            </div>\n        </div>\n    \n    ",
        }), 
        __metadata('design:paramtypes', [])
    ], RoleSelectionComponent);
    return RoleSelectionComponent;
}());
exports.RoleSelectionComponent = RoleSelectionComponent;
//# sourceMappingURL=role-selection.component.js.map