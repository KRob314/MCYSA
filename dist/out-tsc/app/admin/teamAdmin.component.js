"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var repository_1 = require("../models/repository");
var team_model_1 = require("../models/team.model");
var TeamAdminComponent = /** @class */ (function () {
    function TeamAdminComponent(repo) {
        this.repo = repo;
        this.tableMode = true;
    }
    Object.defineProperty(TeamAdminComponent.prototype, "team", {
        get: function () {
            return this.repo.team;
        },
        enumerable: true,
        configurable: true
    });
    TeamAdminComponent.prototype.selectTeam = function (id) {
        this.repo.getTeam(id);
    };
    TeamAdminComponent.prototype.saveTeam = function () {
        console.log("saveTeam()");
        this.repo.team.stateId = this.repo.team.state.stateId;
        this.repo.team.ageGroupId = this.repo.team.ageGroup.id;
        console.log(this.repo.team);
        if (this.repo.team.id == null)
            this.repo.createTeam(this.repo.team);
        else
            this.repo.replaceTeam(this.repo.team);
        this.clearTeam();
        this.tableMode = true;
    };
    TeamAdminComponent.prototype.deleteTeam = function (id) {
        this.repo.deleteTeam(id);
    };
    TeamAdminComponent.prototype.clearTeam = function () {
        this.repo.team = new team_model_1.Team();
        this.tableMode = true;
    };
    Object.defineProperty(TeamAdminComponent.prototype, "teams", {
        get: function () {
            return this.repo.teams;
        },
        enumerable: true,
        configurable: true
    });
    TeamAdminComponent = __decorate([
        core_1.Component({
            templateUrl: "teamAdmin.component.html"
        }),
        __metadata("design:paramtypes", [repository_1.Repository])
    ], TeamAdminComponent);
    return TeamAdminComponent;
}());
exports.TeamAdminComponent = TeamAdminComponent;
//# sourceMappingURL=teamAdmin.component.js.map