
export enum CardType {
    Points,
    EndOfTurn,
    Loss
}


export class Card {
    
    type       : CardType;
    team       : number;
    color      : string;
    word       : string;
    isRevealed : boolean;
    isKnown    : boolean;
    
}