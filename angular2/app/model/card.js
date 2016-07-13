"use strict";
(function (CardType) {
    CardType[CardType["Points"] = 0] = "Points";
    CardType[CardType["EndOfTurn"] = 1] = "EndOfTurn";
    CardType[CardType["Loss"] = 2] = "Loss";
})(exports.CardType || (exports.CardType = {}));
var CardType = exports.CardType;
var Card = (function () {
    function Card() {
    }
    return Card;
}());
exports.Card = Card;
//# sourceMappingURL=card.js.map