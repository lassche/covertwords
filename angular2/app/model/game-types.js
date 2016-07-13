"use strict";
var GameTypes;
(function (GameTypes) {
    (function (StartingTeam) {
        StartingTeam[StartingTeam["Team1"] = 0] = "Team1";
        StartingTeam[StartingTeam["Team2"] = 1] = "Team2";
        StartingTeam[StartingTeam["Random"] = 2] = "Random";
    })(GameTypes.StartingTeam || (GameTypes.StartingTeam = {}));
    var StartingTeam = GameTypes.StartingTeam;
    (function (ClientRole) {
        ClientRole[ClientRole["Intelligence"] = 0] = "Intelligence";
        ClientRole[ClientRole["Operatives"] = 1] = "Operatives";
    })(GameTypes.ClientRole || (GameTypes.ClientRole = {}));
    var ClientRole = GameTypes.ClientRole;
})(GameTypes = exports.GameTypes || (exports.GameTypes = {}));
//# sourceMappingURL=game-types.js.map