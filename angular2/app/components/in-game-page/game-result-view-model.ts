import {GameState} from '../../model/game-model';


export class GameResultViewModel {

    text : string = "";
    imageName : string ="";
    colorCSS : string = "";

    setResult( result : GameState ) {
        switch ( result ) {
            case GameState.BlackCardRevealed : 
                this.text = "Operative was assasinated";
                this.colorCSS = "background-dark";
                this.imageName = "assets/img/assasin-victory.png";
                break;
            case GameState.Team1Won:
                this.text = "Red team wins";
                this.colorCSS = "background-red";
                this.imageName = "assets/img/red-team-victory.png";
                break;
            case GameState.Team2Won:
                this.text = "Blue team wins";
                this.colorCSS = "background-blue";
                this.imageName = "assets/img/blue-team-victory.png";
                break;
            default: 
                break;
        }
    }
}