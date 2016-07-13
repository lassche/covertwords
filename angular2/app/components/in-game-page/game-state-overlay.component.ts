import { Component, Input, Output, EventEmitter } from '@angular/core';

import { CardCoreComponent, CardStateChangedEvent, CardViewModel } from '../cards';

import { GameResultViewModel } from './game-result-view-model';


@Component({
    selector: 'game-state-overlay',
    
    styleUrls : [ 'app/components/styles/colors.css'
                , 'app/components/styles/page.css'
                , 'app/components/styles/badge.css'
                , 'app/components/styles/button.css'
                , 'app/components/styles/label.css'
    ],


    styles: [`

        .overlay-container {
            width: 100%;
            height: 100%;
            position: absolute;
            top: 0;
            left: 0;
            z-index:3;
            display: flex;
            flex-direction:column;

            -webkit-user-select: none;  
            -moz-user-select: none;    
            -ms-user-select: none;      
            user-select: none;  
        }

        .overlay {
            position: absolute;
            top: 35%;
            width: 100%;
            height: 30%;
            display: flex;
            align-items: center;
            justify-content: center;
            background: #343434;
            z-index:3;
            display: flex;
            flex-direction:column;  
             box-shadow: 0px 5px 4px #282828;
        }

        .victory-image-layout {
            position:relative;
            top: -80px;
        }
    `],

    template: `
        <div *ngIf="viewModel"  class="overlay-container background-transparent-primary">

            <div class="overlay label-large-bold color-primary">
                <div class="badge-large victory-image-layout {{viewModel.colorCSS}}">
                    <div class="badge-large-content border-yellow">
                        <img src="{{viewModel.imageName}}" width="138" height="138" />
                    </div>
                </div>
                
                {{viewModel.text}}

                <div class="button-component-horizontal-container">
                    <div class="button-component-small color-dark background-primary-hover" (click)="onContinueGame.emit(null)">
                        CONTINUE GAME
                    </div>

                    <div class="button-component-small color-dark background-primary-hover" (click)="onNextRound.emit(null)">
                        NEXT ROUND
                    </div>

                    <div class="button-component-small color-dark background-primary-hover" (click)="onMainMenu.emit(null)">
                        MAIN  MENU
                    </div>
                </div>
            </div>
        </div>
    `,
})

export class GameStateOverlayComponent {
    @Input() viewModel : GameResultViewModel = new GameResultViewModel();

    @Output() onContinueGame = new EventEmitter<any>();
    @Output() onNextRound    = new EventEmitter<any>();
    @Output() onMainMenu     = new EventEmitter<any>();

    setResult( result ) {
        this.viewModel.setResult( result );
    }
}
 
