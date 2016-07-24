
import { Component, AfterViewChecked } from '@angular/core';
import { RouteConfig, Router, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';

import { TitlePageComponent, ConfigurationPageComponent, InGamePageComponent } from './components/index';
import { GameModel, Configuration, StateNames } from './model/index';
import { GameUtil } from './util/game-util';

@Component({
    selector: 'my-app',

    directives: [ ROUTER_DIRECTIVES, InGamePageComponent, TitlePageComponent, ConfigurationPageComponent ],

    styleUrls : [ 'app/components/styles/colors.css'],
    
    template: `<router-outlet></router-outlet>`,            
        
    providers : [ ROUTER_PROVIDERS, GameModel, Configuration ],
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
        private _configuration : Configuration) {
                
        this.configureStateNames();
    }
        
    configureStateNames(  )  {
        StateNames.title = "TitlePage";
        StateNames.configuration = "Config";
        StateNames.game = "InGame";
    }
}

