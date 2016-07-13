"use strict";
var CardStateChangedEvent = (function () {
    function CardStateChangedEvent(_id, _isFront) {
        this._id = _id;
        this._isFront = _isFront;
    }
    Object.defineProperty(CardStateChangedEvent.prototype, "id", {
        get: function () {
            return this._id;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CardStateChangedEvent.prototype, "isFront", {
        get: function () {
            return this._isFront;
        },
        enumerable: true,
        configurable: true
    });
    return CardStateChangedEvent;
}());
exports.CardStateChangedEvent = CardStateChangedEvent;
//# sourceMappingURL=card-state-changed.event.js.map