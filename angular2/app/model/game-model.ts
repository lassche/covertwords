import {GameUtil} from '../util/game-util';

import {Card, CardType} from './card';
import {CardFactory} from './card-factory';
import {Configuration} from './configuration';
import {GameTypes} from './game-types';


export enum GameState {
    NotStarted,
    InProgress,
    Team1Won,
    Team2Won,
    BlackCardRevealed
}

export class GameModel {

    points        = [0, 0];
    
    missionName = "007 goes on vacation";
    seed = 0;

    localRole : GameTypes.ClientRole;
    
    team = 0;
    
    boardWidth = 5;
    boardHeight = 5;
    
    deck : Array<Card>;
    sessionCards = new Array<Array<Card>>();    
  
    state = GameState.NotStarted;

    round : number = 0;
  
    cardCount() : number {
        return this.boardWidth * this.boardHeight;
    }
    
    initializeGame( config : Configuration ) {
        this.round         = 0; 
        this.missionName   = config._missionName;
        this.seed          = GameUtil.crc32( this.missionName );
        this.localRole     = config._localRole;
    }

    beginRound( config : Configuration ) {
        
        this.seed += this.round;

        if ( this.resolveStartTeam( config.startTeam ) != GameTypes.StartingTeam.Team1 ) {
            config.swapStartCardCount();
        }
                
        this.points[0] = config.getStartCardCount(0);
        this.points[1] = config.getStartCardCount(1);
                
        this.deck = CardFactory.createShuffledCardDeck(config, this.cardCount(), this.seed );
        
        this.sessionCards = this.createDeck( this.boardWidth, this.boardHeight, this.localRole );    
        
        this.state        = GameState.InProgress;
    }

    endRound() {
        this.round++;        
    }

    resolveStartTeam( startTeamSetting : GameTypes.StartingTeam ) : GameTypes.StartingTeam {
        var result = GameTypes.StartingTeam.Team1;
        var rnd = GameUtil.randomIntFromInterval( 0, 1 );

        if ( startTeamSetting == GameTypes.StartingTeam.Random ) {
            result = rnd == 0
                ? GameTypes.StartingTeam.Team1
                : GameTypes.StartingTeam.Team2;
        }
        else {
            result =  startTeamSetting;
        }
        
        return result;
    }

     createDeck( width : number, height: number, localRole : GameTypes.ClientRole ) {
        
        var result = new Array<Array<Card>>();
        
        for ( var i = 0; i < height; ++i) {
            var row = this.deck.slice( i * width, i * width + width );
            row.forEach( x => x.isKnown = localRole === GameTypes.ClientRole.Intelligence );
            result.push(row);
        }
        
        return result;
    }
        
    onCardStateChanged( card : Card, isRevealed : boolean ) {
        switch ( card.type ) {
            case CardType.Points:
                this.points[card.team] -= isRevealed ? 1 : -1;

                if ( this.points[card.team] == 0) {
                    this.state = card.team == 0 ? GameState.Team1Won : GameState.Team2Won;
                }
                else {
                    this.state = GameState.InProgress;
                }
                
                break;
                
            case CardType.Loss:
                if ( isRevealed ) {
                    this.state = GameState.BlackCardRevealed;
                }
                else {
                    this.state = GameState.InProgress;
                }
                break;

            case CardType.EndOfTurn:
                break;
            default: 
                break;
        } 
        
        card.isRevealed = isRevealed;
    }
}