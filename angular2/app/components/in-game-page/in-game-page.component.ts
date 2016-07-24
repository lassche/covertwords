import { Component, Input, ViewChild, AfterViewChecked } from '@angular/core';
import { Router } from '@angular/router-deprecated';

import { Card, Configuration, GameTypes, GameModel, GameState, StateNames} from '../../model';
import { CardStateChangedEvent, CardViewModel } from '../cards';
import { GameUtil } from '../../util/game-util';

import { ScoreBadgeComponent } from './score-badge.component';
import { GameStateOverlayComponent } from './game-state-overlay.component';
import { PostGameResultOverlayComponent } from './post-game-result-overlay.component';
import { BoardComponent } from './board.component';
import { GameResultViewModel } from './game-result-view-model';


@Component({
    selector    : 'in-game-page',

    directives  : [BoardComponent, ScoreBadgeComponent, GameStateOverlayComponent, PostGameResultOverlayComponent],

    styleUrls   : [ 'app/components/styles/colors.css'
                 , 'app/components/styles/page.css'
                 , 'app/components/styles/badge.css'
                 , 'app/components/styles/button.css'
                 , 'app/components/styles/layout.css'
                 , 'app/components/title-page/title-page.css'
    ],

    templateUrl : "app/components/in-game-page/in-game-page.html",
})

export class InGamePageComponent implements AfterViewChecked {

    @ViewChild('_board') board : BoardComponent;
    @ViewChild('gameStateOverlay') gameStateOverlay; 
    @ViewChild('postResultOverlay') postResultOverlay; 
    @ViewChild('gameStateOverlayContainer') gameStateOverlayContainer; 
    @ViewChild('postResultOverlayContainer') postResultOverlayContainer; 
    
    private cards              : Array<Array<Card>>
    private hasGameBeenDecided : boolean; 

    _imageNameMap = {
        'red'  : 'assets/img/red.png',
        'blue' : 'assets/img/blue.png',
        'black' : 'assets/img/black.png',
        'white' : 'assets/img/white.png'
    }

    _svgColorMap = {
        'red'   : 'svg-color-B',
        'blue'  : 'svg-color-A',
        'black' : 'svg-color-D',
        'white' : 'svg-color-C'
    }

    constructor( private router  : Router
               , private configuration : Configuration
               , private gameModel     : GameModel ) {
    }

    createCardViewModel( card : Card, id: number, isShowingColor : boolean ) : CardViewModel {
        var result = new CardViewModel();

        result._text = card.word;
        result._imageName = this._imageNameMap[card.color];
        result._svgColorName = this._svgColorMap[card.color];
        result._isShowingColor = isShowingColor;
        result._id = id;

        return result;  
    }

    ngAfterViewChecked() {

        // ng2 'feature': can't change the binding here so set a time out
        setTimeout( () => {
            if ( this.cards == null ) {
                this.gameModel.initializeGame( this.configuration );        
                this.beginRound();
            }    
        });
    }

    beginRound() {
                
        this.gameModel.beginRound( this.configuration );    
        
        this.cards = this.gameModel.createDeck(this.configuration._boardWidth, this.configuration._boardHeight, this.configuration._localRole );

        var shouldCardShowColor = this.configuration._localRole == GameTypes.ClientRole.Intelligence;
        var viewModel = [];
        
        for ( var i = 0; i < this.cards.length; ++i ) {
            var row = [];

            viewModel.push( row );
            for ( var j = 0; j < this.cards[i].length; ++j ) {
                var card = this.cards[i][j];
                
                row.push( this.createCardViewModel( card, i * this.configuration._boardWidth + j, shouldCardShowColor  ) );
            }
        } 

        this.board.cardViewModelSet = viewModel;
        this.hasGameBeenDecided     = false;
    }

    handleOnCardFlipped( cardState : CardStateChangedEvent) {
        
        var x = Math.floor( cardState.id / this.configuration._boardWidth );
        var y = Math.floor( cardState.id % this.configuration._boardWidth );

        this.gameModel.onCardStateChanged( this.cards[x][y], cardState.isFront );
    
        // players can continue the game. to track if the game has already ended
        // we keep track of the game state. only check the game model state if
        // the game hasn't already been decided   
        if ( !this.hasGameBeenDecided  ) {
    
            if ( this.gameModel.state != GameState.InProgress ) {
                this.gameStateOverlay. setResult( this.gameModel.state );
                this.postResultOverlay.setResult( this.gameModel.state );

                this.gameStateOverlayContainer.nativeElement.classList.remove('hidden');
                this.hasGameBeenDecided = true;
            }
        }
    }

    continueGame(evt) {
         this.gameStateOverlayContainer.nativeElement.classList.add('hidden');
         this.postResultOverlayContainer.nativeElement.classList.remove('hidden');
    } 
    
    nextRound(evt) {
        this.gameStateOverlayContainer.nativeElement.classList.add('hidden');
        this.postResultOverlayContainer.nativeElement.classList.add('hidden');        

        this.gameModel.endRound( );
        this.beginRound();
    } 
    
    mainMenu(evt) {
        this.router.navigate([StateNames.title]);
    }
}