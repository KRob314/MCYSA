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
var tournament_model_1 = require("../models/tournament.model");
var TournamentAdminComponent = /** @class */ (function () {
    function TournamentAdminComponent(repo) {
        this.repo = repo;
        this.tableMode = true;
    }
    Object.defineProperty(TournamentAdminComponent.prototype, "tournament", {
        get: function () {
            return this.repo.tournament;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TournamentAdminComponent.prototype, "tournaments", {
        get: function () {
            return this.repo.tournaments;
        },
        enumerable: true,
        configurable: true
    });
    TournamentAdminComponent.prototype.selectTournament = function (id) {
        this.repo.getTournament(id);
    };
    TournamentAdminComponent.prototype.clearTournament = function () {
        this.repo.tournament = new tournament_model_1.Tournament();
        this.tableMode = true;
    };
    TournamentAdminComponent.prototype.saveTournament = function () {
        console.log("saveTournament()");
        console.log(this.repo.tournament);
        if (this.repo.tournament.id == null)
            this.repo.createTournament(this.repo.tournament);
        else
            this.repo.replaceTournament(this.repo.tournament);
        this.clearTournament();
        this.tableMode = true;
    };
    TournamentAdminComponent.prototype.deleteTournament = function (id) {
        this.repo.deleteTournament(id);
    };
    TournamentAdminComponent = __decorate([
        core_1.Component({
            templateUrl: "tournamentAdmin.component.html"
        }),
        __metadata("design:paramtypes", [repository_1.Repository])
    ], TournamentAdminComponent);
    return TournamentAdminComponent;
}());
exports.TournamentAdminComponent = TournamentAdminComponent;
//# sourceMappingURL=tournamentAdmin.component.js.map