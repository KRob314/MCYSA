"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Team = /** @class */ (function () {
    function Team(id, tournamentId, ageGroupId, stateId, teamName, managerFirstName, managerLastName, state, ageGroup, tournament) {
        this.id = id;
        this.tournamentId = tournamentId;
        this.ageGroupId = ageGroupId;
        this.stateId = stateId;
        this.teamName = teamName;
        this.managerFirstName = managerFirstName;
        this.managerLastName = managerLastName;
        this.state = state;
        this.ageGroup = ageGroup;
        this.tournament = tournament;
    }
    return Team;
}());
exports.Team = Team;
//# sourceMappingURL=team.model.js.map