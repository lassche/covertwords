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
var application_state_1 = require("../util/application-state");
var router_deprecated_1 = require('@angular/router-deprecated');
var CodeNamesStateMachine = (function () {
    function CodeNamesStateMachine(_router) {
        this._router = _router;
        this._titleScreenState = new application_state_1.ApplicationState();
        this._configurationState = new application_state_1.ApplicationState();
        this._inGameState = new application_state_1.ApplicationState();
        this._endGameState = new application_state_1.ApplicationState();
        this.titleStateName = "";
        this.configurationStateName = "";
        this.inGameStateName = "";
    }
    CodeNamesStateMachine.prototype.navigateToTitleState = function () {
        this._router.navigate([this.titleStateName]);
    };
    CodeNamesStateMachine.prototype.navigateToConfigurationState = function () {
        this._router.navigate([this.configurationStateName]);
    };
    CodeNamesStateMachine.prototype.navigateToInGameState = function () {
        this._router.navigate([this.inGameStateName]);
    };
    CodeNamesStateMachine.prototype.notifyTitleScreenComplete = function () {
        this.handleCompletion(this._titleScreenState);
    };
    CodeNamesStateMachine.prototype.notifyConfigurationComplete = function () {
        this.handleCompletion(this._configurationState);
    };
    CodeNamesStateMachine.prototype.notifyGameComplete = function () {
        this.handleCompletion(this._inGameState);
    };
    CodeNamesStateMachine.prototype.notifyGameEndComplete = function () {
        this.handleCompletion(this._endGameState);
    };
    CodeNamesStateMachine.prototype.handleCompletion = function (state) {
        if (state.onStateEnd != null) {
            state.onStateEnd();
        }
        state.navigateToTarget(this._router);
    };
    CodeNamesStateMachine = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [router_deprecated_1.Router])
    ], CodeNamesStateMachine);
    return CodeNamesStateMachine;
}());
exports.CodeNamesStateMachine = CodeNamesStateMachine;
//# sourceMappingURL=code-names-statemachine.js.map