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
var ToggleButtonComponent = (function () {
    function ToggleButtonComponent() {
        this._isToggled = false;
        this._canUnToggle = true;
        this._id = 0;
        this._colorClass = "";
        this._backgroundClass = "";
        this._colorToggledClass = "";
        this.onToggle = new core_1.EventEmitter();
        this.TOGGLED_CLASS_NAME = 'toggle-button-component toggle-button-state-toggled';
        this.DEFAULT_CLASS_NAME = 'toggle-button-component toggle-button-state-default';
    }
    ToggleButtonComponent.prototype.ngAfterViewChecked = function () {
        this.updateState();
    };
    ToggleButtonComponent.prototype.ngOnChanges = function (changes) {
        for (var item in changes) {
            if (item == '_isToggled') {
                this.updateState();
            }
        }
    };
    ToggleButtonComponent.prototype.toggleState = function () {
        if (this._canUnToggle || !this._isToggled) {
            this._isToggled = !this._isToggled;
            this.onToggle.emit(this);
        }
    };
    ToggleButtonComponent.prototype.updateState = function () {
        if (this._buttonElement != null) {
            if (this._isToggled) {
                this._buttonElement.nativeElement.className = this.TOGGLED_CLASS_NAME
                    + " " + this._colorToggledClass
                    + " " + this._backgroundClass;
            }
            else {
                this._buttonElement.nativeElement.className = this.DEFAULT_CLASS_NAME
                    + " " + this._colorClass
                    + " " + this._backgroundClass;
            }
        }
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], ToggleButtonComponent.prototype, "_isToggled", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], ToggleButtonComponent.prototype, "_canUnToggle", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], ToggleButtonComponent.prototype, "_id", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], ToggleButtonComponent.prototype, "_colorClass", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], ToggleButtonComponent.prototype, "_backgroundClass", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], ToggleButtonComponent.prototype, "_colorToggledClass", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], ToggleButtonComponent.prototype, "onToggle", void 0);
    __decorate([
        core_1.ViewChild('_buttonElement'), 
        __metadata('design:type', Object)
    ], ToggleButtonComponent.prototype, "_buttonElement", void 0);
    ToggleButtonComponent = __decorate([
        core_1.Component({
            selector: 'toggle-button',
            styleUrls: ['app/components/styles/colors.css',
                'app/components/styles/toggle-button.css'
            ],
            template: "\n        <div #_buttonElement \n            class=\"toggle-button-state-default toggle-button-component\"\n            (click)='toggleState()'>\n\n            <ng-content></ng-content>\n        \n        </div>",
        }), 
        __metadata('design:paramtypes', [])
    ], ToggleButtonComponent);
    return ToggleButtonComponent;
}());
exports.ToggleButtonComponent = ToggleButtonComponent;
//# sourceMappingURL=toggle-button.component.js.map