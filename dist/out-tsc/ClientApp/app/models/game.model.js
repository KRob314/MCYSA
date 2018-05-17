"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Game = /** @class */ (function () {
    function Game(id, homeTeamId, awayTeamId, ballparkId, homeTeamRuns, awayTeamRuns, gameDate, homeTeam, awayTeam, ballpark) {
        this.id = id;
        this.homeTeamId = homeTeamId;
        this.awayTeamId = awayTeamId;
        this.ballparkId = ballparkId;
        this.homeTeamRuns = homeTeamRuns;
        this.awayTeamRuns = awayTeamRuns;
        this.gameDate = gameDate;
        this.homeTeam = homeTeam;
        this.awayTeam = awayTeam;
        this.ballpark = ballpark;
    }
    return Game;
}());
exports.Game = Game;
//# sourceMappingURL=game.model.js.map