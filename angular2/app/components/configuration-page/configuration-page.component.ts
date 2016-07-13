import {Component, Input, ViewChild} from '@angular/core';

import {CodeNamesStateMachine} from '../../model/code-names-statemachine';
import {Configuration} from '../../model/configuration';

import {TitleComponent} from '../shared/title.component';
import {InputComponent} from '../shared/input.component';

import {RoleSelectionComponent} from './role-selection.component';
import {AgencySelectionComponent} from './agency-selection.component';


@Component({
    selector  : 'configuration-page',

    directives : [TitleComponent, InputComponent, RoleSelectionComponent, AgencySelectionComponent],

    styleUrls : [ 'app/components/styles/colors.css'
                , 'app/components/styles/page.css'
                , 'app/components/styles/input.css'
                , 'app/components/styles/button.css'
                , 'app/components/styles/layout.css'
                , 'app/components/title-page/title-page.css'
    ],

    templateUrl  : "app/components/configuration-page/configuration-page.html",
})

export class ConfigurationPageComponent {

    @ViewChild('_missionName')     _missionName     : InputComponent;
    @ViewChild('_roleSelection')   _roleSelection   : RoleSelectionComponent;
    @ViewChild('_agencySelection') _agencySelection : AgencySelectionComponent;

    constructor( private _stateMachine : CodeNamesStateMachine
               , private _configuration : Configuration ) {
    }

    onBeginGame() {
        this._configuration._missionName = this._missionName._inputText;
        this._configuration._localRole = this._roleSelection.selectedRole;
        this._configuration.startTeam = this._agencySelection.selectedAgency;

        this._stateMachine.notifyConfigurationComplete();
    }
}