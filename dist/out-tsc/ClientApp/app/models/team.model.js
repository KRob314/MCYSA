"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Team = /** @class */ (function () {
    function Team(id, tournamentId, ageGroupId, stateId, teamName, managerFirstName, managerLastName, wins, losses, record, state, ageGroup, tournament, players) {
        this.id = id;
        this.tournamentId = tournamentId;
        this.ageGroupId = ageGroupId;
        this.stateId = stateId;
        this.teamName = teamName;
        this.managerFirstName = managerFirstName;
        this.managerLastName = managerLastName;
        this.wins = wins;
        this.losses = losses;
        this.record = record;
        this.state = state;
        this.ageGroup = ageGroup;
        this.tournament = tournament;
        this.players = players;
        record = wins + "-" + losses;
    }
    return Team;
}());
exports.Team = Team;
//# sourceMappingURL=team.model.js.map