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
var AgencySelectionComponent = (function () {
    function AgencySelectionComponent() {
        this._selectedAgency = 0;
    }
    AgencySelectionComponent.prototype.setSelectedAgency = function (role) {
        this._selectedAgency = role;
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], AgencySelectionComponent.prototype, "_selectedAgency", void 0);
    AgencySelectionComponent = __decorate([
        core_1.Component({
            selector: 'agency-selection',
            directives: [toggle_button_component_1.ToggleButtonComponent],
            styles: [""],
            styleUrls: ['components/styles/colors.css',
                'components/styles/page.css',
                'components/styles/input.css',
                'components/styles/button.css',
                'components/styles/toggle-button.css',
                'components/title-page/title-page.css'
            ],
            template: "\n        <div>\n            <div class=\"toggle-button-container\">\n                <toggle-button [_isToggled]=\"true\" [_colorClass]=\"'color-dark'\" [_colorToggledClass]=\"'color-base'\" [_backgroundClass]=\"'background-primary-hover'\">\n                    Random\n                </toggle-button>\n                <toggle-button [_isToggled]=\"false\" [_colorClass]=\"'color-dark'\" [_colorToggledClass]=\"'color-base'\" [_backgroundClass]=\"'background-primary-hover'\">\n                    Red team\n                </toggle-button>\n                <toggle-button [_isToggled]=\"false\" [_colorClass]=\"'color-dark'\" [_colorToggledClass]=\"'color-base'\" [_backgroundClass]=\"'background-primary-hover'\">\n                    Blue team\n                </toggle-button>\n            </div>\n        </div>\n    \n    ",
        }), 
        __metadata('design:paramtypes', [])
    ], AgencySelectionComponent);
    return AgencySelectionComponent;
}());
exports.AgencySelectionComponent = AgencySelectionComponent;
//# sourceMappingURL=agency-selection-component.js.map