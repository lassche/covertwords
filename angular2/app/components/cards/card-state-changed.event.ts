export class CardStateChangedEvent {

    get id() {
        return this._id;
    }

    get isFront() { 
        return this._isFront;
    }

    constructor( private _id  : number, private _isFront : boolean ) {
    }
}