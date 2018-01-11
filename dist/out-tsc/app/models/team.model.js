"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Team = /** @class */ (function () {
    function Team(id, tournamentId, ageGroupId, stateId, teamname, managerFirstName, managerLastName, state, agegroup) {
        this.id = id;
        this.tournamentId = tournamentId;
        this.ageGroupId = ageGroupId;
        this.stateId = stateId;
        this.teamname = teamname;
        this.managerFirstName = managerFirstName;
        this.managerLastName = managerLastName;
        this.state = state;
        this.agegroup = agegroup;
    }
    return Team;
}());
exports.Team = Team;
//# sourceMappingURL=team.model.js.map