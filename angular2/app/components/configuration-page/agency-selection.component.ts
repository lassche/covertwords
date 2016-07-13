import {Component, Input, ViewChildren, QueryList } from '@angular/core';
import {ToggleButtonComponent} from '../shared/toggle-button.component';
import {GameTypes} from '../../model/game-types';

@Component({
    selector  : 'agency-selection',

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
            <div class="toggle-button-container" >
                
                <toggle-button #_randomButton [_id]="2"
                               (onToggle)="onSelectionChanged($event)"
                               [_isToggled]="true" [_canUnToggle]="false" 
                               [_colorClass]="'color-dark'" [_colorToggledClass]="'color-base'" [_backgroundClass]="'background-primary-hover'">
                    Random
                </toggle-button>

                <toggle-button  #_redTeamButton [_id]="0"
                                (onToggle)="onSelectionChanged($event)"
                                [_isToggled]="false" [_canUnToggle]="false" 
                                [_colorClass]="'color-dark'" [_colorToggledClass]="'color-base'" [_backgroundClass]="'background-primary-hover'">
                    Red team
                </toggle-button>

                <toggle-button #_blueTeamButton [_id]="1"
                               (onToggle)="onSelectionChanged($event)"
                               [_isToggled]="false" [_canUnToggle]="false" 
                               [_colorClass]="'color-dark'" [_colorToggledClass]="'color-base'" [_backgroundClass]="'background-primary-hover'">
                    Blue team
                </toggle-button>
            </div>
        </div>
    
    `,
})

export class AgencySelectionComponent {

    @Input() private _selectedAgency : number = GameTypes.StartingTeam.Random;
    
    @ViewChildren(ToggleButtonComponent) children:QueryList<ToggleButtonComponent>;

    get selectedAgency() : number {
      return this._selectedAgency;
    }

    onSelectionChanged( source ) {
        
        this._selectedAgency = source._id;
        
        this.children.toArray().forEach((child)=> {
            if ( child != source ) {
                child._isToggled = false;
            } 
        });
    }
}