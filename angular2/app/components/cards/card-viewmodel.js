"use strict";
var CardViewModel = (function () {
    function CardViewModel() {
        this._id = -1;
        this._text = "card";
        this._imageName = "assets/img/white.png";
        this._isShowingColor = true;
        this._svgColorName = "svg-color-not-initialized";
        this._isShowingFront = false;
    }
    return CardViewModel;
}());
exports.CardViewModel = CardViewModel;
//# sourceMappingURL=card-viewmodel.js.map