import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CardCoreComponent } from '../cards/card-core.component';
import { CardViewModel } from '../cards/card-viewmodel';

import {CardStateChangedEvent} from '../cards/card-state-changed.event';


@Component({
    selector: 'board',
    
    template: `
        <table  class="card-area">
            <tr *ngFor="let row of cardViewModelSet" align="right" >
                <td *ngFor="let cardViewModel of row;">
                    <card-core [_viewModel]=cardViewModel (onCardFlipped)="handleCardFlipped($event)"></card-core> 
                </td>
            </tr>
        </table>
    `,

    styles: [''],
    
    directives : [ CardCoreComponent ] 
})

export class BoardComponent {
    @Input() cardViewModelSet : CardViewModel[][];
    @Input() id : number;


    @Output() onCardFlipped = new EventEmitter<CardStateChangedEvent>();
    
    handleCardFlipped( cardState : CardStateChangedEvent ) {
        this.onCardFlipped.emit(cardState);
    }
 }
 
