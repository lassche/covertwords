import {Component, Input, ViewChild } from '@angular/core';
import {ToggleButtonComponent} from '../shared/toggle-button.component';
import { GameTypes } from '../../model/game-types';


@Component({
    selector  : 'role-selection',

    directives : [ToggleButtonComponent],

    styles : [``],
    

    styleUrls : [ 'app/components/styles/colors.css'
                , 'app/components/styles/page.css'
                , 'app/components/styles/input.css'
                , 'app/components/styles/button.css'
                , 'app/components/styles/toggle-button.css'
                , 'app/components/title-page/title-page.css'
    ],

    template  : `
        <div>
            <div class="toggle-button-container">
                <toggle-button #_intelligenceButton
                    (onToggle)="onSelectionChanged($event)"
                    [_isToggled]="true" [_colorClass]="'color-dark'" [_colorToggledClass]="'color-base'" [_backgroundClass]="'background-primary-hover'">
                    Intelligence
                </toggle-button>
                <toggle-button #_operativesButton
                    (onToggle)="onSelectionChanged($event)" 
                    [_isToggled]="false" [_colorClass]="'color-dark'" [_colorToggledClass]="'color-base'" [_backgroundClass]="'background-primary-hover'">
                    Operatives
                </toggle-button>
            </div>
        </div>
    
    `,
})

export class RoleSelectionComponent {

    @Input() selectedRole : GameTypes.ClientRole = GameTypes.ClientRole.Intelligence; 

    @ViewChild('_intelligenceButton') _intelligenceElement;
    @ViewChild('_operativesButton')   _operativesElement;

    onSelectionChanged( source ) {
        
        if ( source == this._intelligenceElement ){
            this._operativesElement._isToggled =  !this._intelligenceElement._isToggled;
        }
        else if ( source == this._operativesElement) {
            this._intelligenceElement._isToggled =  !this._operativesElement._isToggled;
        }

        this.selectedRole = this._intelligenceElement._isToggled 
                          ? GameTypes.ClientRole.Intelligence
                          : GameTypes.ClientRole.Operatives;
    }
}