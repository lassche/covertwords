
import { Component, AfterViewChecked } from '@angular/core';
import { RouteConfig, Router, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';

import { TitlePageComponent, ConfigurationPageComponent, InGamePageComponent } from './components/index';
import { GameModel,  CodeNamesStateMachine, Configuration } from './model/index';
import { GameUtil } from './util/game-util';

@Component({
    selector: 'my-app',

    directives: [ ROUTER_DIRECTIVES, InGamePageComponent, TitlePageComponent, ConfigurationPageComponent ],

    styleUrls : [ 'app/components/styles/colors.css'],
    
    template: `<router-outlet></router-outlet>`,            
        
    providers : [ ROUTER_PROVIDERS, GameModel, CodeNamesStateMachine, Configuration ],
})

@RouteConfig([
    {
        path: '/title-page',
        name: 'TitlePage',
        component: TitlePageComponent,
        useAsDefault: true
    },
    {
        path: '/config',
        name: 'Config',
        component: ConfigurationPageComponent, 
    }, 
    {   
        path: '/in-game',
        name: 'InGame',
        component: InGamePageComponent,
    },
    { path: '/**', redirectTo: ['TitlePage'] }
])

export class AppComponent { 
        
    constructor(
        private _router        : Router,
        private _gameModel     : GameModel,
        private _configuration : Configuration,
        private _stateMachine  : CodeNamesStateMachine ) {
                
        this.configureStateMachine( _stateMachine );
    }
        
    configureStateMachine( stateMachine : CodeNamesStateMachine )  {
        stateMachine._titleScreenState.navigationTarget = 'Config';
        stateMachine.titleStateName = "TitlePage";
        stateMachine._configurationState.navigationTarget = 'InGame';
        stateMachine.configurationStateName= "Config";
        stateMachine.inGameStateName = "InGame";
    }
}

