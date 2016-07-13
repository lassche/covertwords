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
var AgencySelectionComponent = (function () {
    function AgencySelectionComponent() {
        this._selectedAgency = game_types_1.GameTypes.StartingTeam.Random;
    }
    Object.defineProperty(AgencySelectionComponent.prototype, "selectedAgency", {
        get: function () {
            return this._selectedAgency;
        },
        enumerable: true,
        configurable: true
    });
    AgencySelectionComponent.prototype.onSelectionChanged = function (source) {
        this._selectedAgency = source._id;
        this.children.toArray().forEach(function (child) {
            if (child != source) {
                child._isToggled = false;
            }
        });
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], AgencySelectionComponent.prototype, "_selectedAgency", void 0);
    __decorate([
        core_1.ViewChildren(toggle_button_component_1.ToggleButtonComponent), 
        __metadata('design:type', core_1.QueryList)
    ], AgencySelectionComponent.prototype, "children", void 0);
    AgencySelectionComponent = __decorate([
        core_1.Component({
            selector: 'agency-selection',
            directives: [toggle_button_component_1.ToggleButtonComponent],
            styles: [""],
            styleUrls: ['app/components/styles/colors.css',
                'app/components/styles/page.css',
                'app/components/styles/input.css',
                'app/components/styles/button.css',
                'app/components/styles/toggle-button.css',
                'app/components/title-page/title-page.css'
            ],
            template: "\n        <div>\n            <div class=\"toggle-button-container\" >\n                \n                <toggle-button #_randomButton [_id]=\"2\"\n                               (onToggle)=\"onSelectionChanged($event)\"\n                               [_isToggled]=\"true\" [_canUnToggle]=\"false\" \n                               [_colorClass]=\"'color-dark'\" [_colorToggledClass]=\"'color-base'\" [_backgroundClass]=\"'background-primary-hover'\">\n                    Random\n                </toggle-button>\n\n                <toggle-button  #_redTeamButton [_id]=\"0\"\n                                (onToggle)=\"onSelectionChanged($event)\"\n                                [_isToggled]=\"false\" [_canUnToggle]=\"false\" \n                                [_colorClass]=\"'color-dark'\" [_colorToggledClass]=\"'color-base'\" [_backgroundClass]=\"'background-primary-hover'\">\n                    Red team\n                </toggle-button>\n\n                <toggle-button #_blueTeamButton [_id]=\"1\"\n                               (onToggle)=\"onSelectionChanged($event)\"\n                               [_isToggled]=\"false\" [_canUnToggle]=\"false\" \n                               [_colorClass]=\"'color-dark'\" [_colorToggledClass]=\"'color-base'\" [_backgroundClass]=\"'background-primary-hover'\">\n                    Blue team\n                </toggle-button>\n            </div>\n        </div>\n    \n    ",
        }), 
        __metadata('design:paramtypes', [])
    ], AgencySelectionComponent);
    return AgencySelectionComponent;
}());
exports.AgencySelectionComponent = AgencySelectionComponent;
//# sourceMappingURL=agency-selection.component.js.map