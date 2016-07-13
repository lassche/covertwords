import { Injectable } from '@angular/core';
import { ApplicationState } from "../util/application-state";
import { Router } from '@angular/router-deprecated';

@Injectable()
export class CodeNamesStateMachine {

    _titleScreenState   : ApplicationState = new ApplicationState();
    _configurationState : ApplicationState = new ApplicationState();
    _inGameState        : ApplicationState = new ApplicationState();
    _endGameState       : ApplicationState = new ApplicationState();

     titleStateName         : string = "";
     configurationStateName : string = "";
     inGameStateName        : string = "";


     constructor(
        private _router:Router) {
    }

    navigateToTitleState() {
        this._router.navigate([this.titleStateName]);
    }

    navigateToConfigurationState() {
        this._router.navigate([this.configurationStateName]);
    }

    navigateToInGameState() {
        this._router.navigate([this.inGameStateName]);

    }


    notifyTitleScreenComplete() {
        this.handleCompletion( this. _titleScreenState );
    }
    
    notifyConfigurationComplete() {
        this.handleCompletion( this. _configurationState );
    }

    notifyGameComplete() {
        this.handleCompletion( this. _inGameState );
    }

    notifyGameEndComplete() {
        this.handleCompletion( this. _endGameState );
    }

    handleCompletion( state : ApplicationState ) {
        if ( state.onStateEnd != null ) {
            state.onStateEnd();
        }
        
        state.navigateToTarget( this._router );
    }

}
