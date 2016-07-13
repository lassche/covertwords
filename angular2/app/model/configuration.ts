import { Injectable } from '@angular/core';
import { GameUtil } from '../util/game-util';
import { GameTypes } from './game-types';


export const DEFAULT_MISSION_NAME = "file 007: the spy";
export const DEFAULT_CARD_COUNT   = [8, 7];    
export const DEFAULT_BOARD_WIDTH  = 5;
export const DEFAULT_BOARD_HEIGHT = 5;

@Injectable()
export class Configuration {
   
    _localRole     : GameTypes.ClientRole;
    _missionName   : string;
    _boardWidth  : number = DEFAULT_BOARD_WIDTH;
    _boardHeight : number = DEFAULT_BOARD_HEIGHT;
    
    private teamCardCount : Array<number>;

    private startingTeam : GameTypes.StartingTeam = GameTypes.StartingTeam.Random;
    
    set startTeam( value : GameTypes.StartingTeam ) {
        this.startingTeam = value;
    }

    get startTeam( ) {
        return this.startingTeam;
    }

    constructor() {
        this._localRole     = GameTypes.ClientRole.Intelligence;
        this._missionName   = DEFAULT_MISSION_NAME;
        this.teamCardCount = DEFAULT_CARD_COUNT;
    }
    
    getStartCardCount( teamID : number ) {
        return this.teamCardCount[teamID];
    }

    swapStartCardCount() {
        var temp = this.teamCardCount[ 0 ];

        this.teamCardCount[ 0 ] = this.teamCardCount[ 1 ];

        this.teamCardCount[ 1 ] = temp;
    }

    setTeamCardCount( cardCount : Array<number>) {
        // assert cardCount.length == _teamCardCount.length
        
        for ( var i = 0; i < cardCount.length; ++i ) {
            this.teamCardCount[ i ] = cardCount[i];
        }
        
    }
}