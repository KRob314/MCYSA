"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Tournament = /** @class */ (function () {
    function Tournament(id, teamId, gameId, name, startDate, endDate, isCurrent) {
        this.id = id;
        this.teamId = teamId;
        this.gameId = gameId;
        this.name = name;
        this.startDate = startDate;
        this.endDate = endDate;
        this.isCurrent = isCurrent;
    }
    return Tournament;
}());
exports.Tournament = Tournament;
//# sourceMappingURL=tournament.model.js.map