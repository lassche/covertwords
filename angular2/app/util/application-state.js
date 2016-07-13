"use strict";
var ApplicationState = (function () {
    function ApplicationState() {
    }
    ApplicationState.prototype.navigateToTarget = function (router) {
        router.navigate([this.navigationTarget]);
    };
    return ApplicationState;
}());
exports.ApplicationState = ApplicationState;
//# sourceMappingURL=application-state.js.map