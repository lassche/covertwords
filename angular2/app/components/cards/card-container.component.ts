import {Component, ViewChild, EventEmitter, Output, Input, OnChanges, SimpleChange} from '@angular/core';

import {CardStateChangedEvent} from './card-state-changed.event';
import { CardViewModel } from './card-viewmodel';


@Component ({
    selector : 'card-container',

    styles: [`
        .card-container {
            position: relative;
            perspective: 1000px;
            width: 168px;
            height: 128px;
        }

        .card-side-container-front {
            backface-visibility: hidden;
            position: absolute;
            transform: rotateY(0deg);
        }

        .card-side-container-back {
            backface-visibility: hidden;
            position: absolute;
            transform: rotateY(180deg);
        }
        

        .rotation-animation-back-to-front {
            transition: all 0.6s ease;
            transform-style: preserve-3d;
            transform: rotateY(180deg);
            animation-iteration-count:1;
            
        }

        .rotation-animation-front-to-back {
            transition: all 0.6s ease;
            transform-style: preserve-3d;
            transform: rotateY(0deg);
            animation-iteration-count:1;
        }

    `],

    template : `
        <div #_cardContainer class="card-container" (click)="flipCard()">
            <div class="card-side-container-front">
                <ng-content select="front-content"></ng-content>
            </div>

            <div class="card-side-container-back">
                <ng-content select="back-content"></ng-content>
            </div>
        </div> 
    `

})

export class CardContainer {

    @Input() _viewModel : CardViewModel;

    @ViewChild( '_cardContainer') _cardContainer;
    @Output() onCardFlipped = new EventEmitter<CardStateChangedEvent>();

     flipCard() {

        if  (!this._viewModel._isShowingFront ) {
            this._cardContainer.nativeElement.classList.add('rotation-animation-back-to-front');
            this._cardContainer.nativeElement.classList.remove('rotation-animation-front-to-back')
        }
        else
        {
            this._cardContainer.nativeElement.classList.remove('rotation-animation-back-to-front');
            this._cardContainer.nativeElement.classList.add('rotation-animation-front-to-back');
        }

        this._viewModel._isShowingFront = !this._viewModel._isShowingFront;

        this.onCardFlipped.emit( new CardStateChangedEvent(  this._viewModel._id,  this._viewModel._isShowingFront ) ) ;
    }

}