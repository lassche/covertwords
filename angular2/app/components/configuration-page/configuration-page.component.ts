import { Component, Input, ViewChild } from '@angular/core';
import { Router } from '@angular/router-deprecated';


import {Configuration, StateNames} from '../../model';

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

    constructor( private router : Router
               , private configuration : Configuration ) {
    }

    onBeginGame() {
        this.configuration._missionName = this._missionName._inputText;
        this.configuration._localRole = this._roleSelection.selectedRole;
        this.configuration.startTeam = this._agencySelection.selectedAgency;

        this.router.navigate([StateNames.game]);
    }
}