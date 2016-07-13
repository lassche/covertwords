import { Component, Input, Output, EventEmitter } from '@angular/core';

import { CardCoreComponent } from '../cards/card-core.component';
import { CardViewModel } from '../cards/card-viewmodel';

import {CardStateChangedEvent} from '../cards/card-state-changed.event';

import { GameResultViewModel } from './game-result-view-model';


@Component({
    selector: 'post-game-result-overlay',
    
    styleUrls : [ 'app/components/styles/colors.css'
                , 'app/components/styles/page.css'
                , 'app/components/styles/badge.css'
                , 'app/components/styles/button.css'
                , 'app/components/styles/label.css'
    ],


    styles: [`

        .overlay-container {
            width: 100%;
            height: 100px;
            position: absolute;
            bottom: 0;
            left: 0;
            z-index:3;
            display: flex;
            flex-direction:column;

            align-items: center;
            justify-content: center;

             background: #343434;

            -webkit-user-select: none;  
            -moz-user-select: none;    
            -ms-user-select: none;      
            user-select: none;  
        }

    `],

    template: `
        <div *ngIf="viewModel" class="overlay-container background--dark label-large-bold color-primary">
            
            {{viewModel.text}}

            <div class="button-component-horizontal-container">

                <div class="button-component-small color-dark background-primary-hover" (click)="onNextRound.emit(null)">
                    NEXT ROUND
                </div>

                <div class="button-component-small color-dark background-primary-hover" (click)="onMainMenu.emit(null)">
                    MAIN  MENU
                </div>
            </div>
        </div>
    `,
})

export class PostGameResultOverlayComponent {
    @Input() viewModel : GameResultViewModel = new GameResultViewModel();

    @Output() onNextRound    = new EventEmitter<any>();
    @Output() onMainMenu     = new EventEmitter<any>();

    setResult( result ) {
        this.viewModel.setResult( result );
    }

}
 
