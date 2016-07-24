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
var index_1 = require('./components/index');
var index_2 = require('./model/index');
var AppComponent = (function () {
    function AppComponent(_router, _gameModel, _configuration) {
        this._router = _router;
        this._gameModel = _gameModel;
        this._configuration = _configuration;
        this.configureStateNames();
    }
    AppComponent.prototype.configureStateNames = function () {
        index_2.StateNames.title = "TitlePage";
        index_2.StateNames.configuration = "Config";
        index_2.StateNames.game = "InGame";
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            directives: [router_deprecated_1.ROUTER_DIRECTIVES, index_1.InGamePageComponent, index_1.TitlePageComponent, index_1.ConfigurationPageComponent],
            styleUrls: ['app/components/styles/colors.css'],
            template: "<router-outlet></router-outlet>",
            providers: [router_deprecated_1.ROUTER_PROVIDERS, index_2.GameModel, index_2.Configuration],
        }),
        router_deprecated_1.RouteConfig([
            {
                path: '/title-page',
                name: 'TitlePage',
                component: index_1.TitlePageComponent,
                useAsDefault: true
            },
            {
                path: '/config',
                name: 'Config',
                component: index_1.ConfigurationPageComponent,
            },
            {
                path: '/in-game',
                name: 'InGame',
                component: index_1.InGamePageComponent,
            },
            { path: '/**', redirectTo: ['TitlePage'] }
        ]), 
        __metadata('design:paramtypes', [router_deprecated_1.Router, index_2.GameModel, index_2.Configuration])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map