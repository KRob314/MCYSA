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
var http_1 = require("@angular/http");
require("rxjs/add/operator/map");
var configClasses_repository_1 = require("./configClasses.repository");
var teamUrl = "/api/teams";
var statesUrl = "/api/states";
var ageGroupUrl = "/api/agegroups";
var tournamentUrl = "api/tournaments";
var Repository = /** @class */ (function () {
    function Repository(http) {
        this.http = http;
        this.filterObject = new configClasses_repository_1.Filter();
        this.states = [];
        this.ageGroups = [];
        this.tournaments = [];
        //this.team = JSON.parse(document.getElementById("data").textContent);
        // this.getTeam(2);
        //this.filter.state = "va";
        this.filter.related = true;
        this.getTeams(true);
    }
    Repository.prototype.getTeam = function (id) {
        var _this = this;
        console.log("getTeam()");
        this.sendRequest(http_1.RequestMethod.Get, teamUrl + "/" + id)
            .subscribe(function (response) {
            _this.team = response;
            console.log(_this.team);
        });
    };
    Repository.prototype.getTeams = function (related) {
        var _this = this;
        if (related === void 0) { related = false; }
        console.log("get teams()");
        var url = teamUrl + "?related=" + this.filter.related;
        if (this.filter.state)
            url += "&state=" + this.filter.state;
        if (this.filter.age)
            url += "&ageGroupId=" + this.filter.age;
        this.sendRequest(http_1.RequestMethod.Get, url).subscribe(function (response) {
            return _this.teams = response;
        });
    };
    Repository.prototype.getStates = function () {
        var _this = this;
        console.log("get states()");
        this.sendRequest(http_1.RequestMethod.Get, statesUrl).subscribe(function (response) { return _this.states = response; });
    };
    Repository.prototype.getAgeGroups = function () {
        var _this = this;
        console.log("get ageGroups()");
        this.sendRequest(http_1.RequestMethod.Get, ageGroupUrl).subscribe(function (response) { return _this.ageGroups = response; });
    };
    Repository.prototype.getTournaments = function () {
        var _this = this;
        console.log("getTournaments()");
        this.sendRequest(http_1.RequestMethod.Get, tournamentUrl).subscribe(function (response) { return _this.tournaments = response; });
    };
    Repository.prototype.getTournament = function (id) {
        var _this = this;
        this.sendRequest(http_1.RequestMethod.Get, tournamentUrl + "/" + id).subscribe(function (response) { return _this.tournament = response; });
    };
    Repository.prototype.sendRequest = function (verb, url, data) {
        return this.http.request(new http_1.Request({
            method: verb, url: url, body: data
        })).map(function (response) {
            return response.headers.get("Content-Length") != "0" ? response.json() : null;
        });
    };
    Object.defineProperty(Repository.prototype, "filter", {
        get: function () {
            return this.filterObject;
        },
        enumerable: true,
        configurable: true
    });
    Repository.prototype.createTeam = function (team) {
        var _this = this;
        var data = {
            teamName: team.teamName,
            managerFirstname: team.managerFirstName,
            managerLastName: team.managerLastName,
            ageGroupId: team.ageGroupId,
            stateId: team.state.stateId,
            tournamentId: team.tournament.id
        };
        console.log("createTeam");
        console.log(data);
        this.sendRequest(http_1.RequestMethod.Post, teamUrl, data).subscribe(function (response) {
            team.id = response;
            _this.teams.push(team);
        });
    };
    Repository.prototype.replaceTeam = function (team) {
        var _this = this;
        var data = {
            id: team.id,
            teamName: team.teamName,
            managerFirstname: team.managerFirstName,
            managerLastName: team.managerLastName,
            ageGroupId: team.ageGroup.id,
            stateId: team.state.stateId,
            tournamentId: team.tournamentId
        };
        console.log("in repo");
        console.log(data);
        this.sendRequest(http_1.RequestMethod.Put, teamUrl + "/" + team.id, data).subscribe(function (response) { return _this.getTeams(); });
    };
    Repository.prototype.deleteTeam = function (id) {
        var _this = this;
        this.sendRequest(http_1.RequestMethod.Delete, teamUrl + "/" + id).subscribe(function (response) {
            return _this.getTeams();
        });
    };
    Repository = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], Repository);
    return Repository;
}());
exports.Repository = Repository;
//# sourceMappingURL=repository.js.map