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
var ballparkUrl = "api/ballparks";
var gameUrl = "api/games";
var playerUrl = "api/players";
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
        this.getGames(false);
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
        if (this.filter.tournamentId != null)
            url += "&tournamentId=" + this.filter.tournamentId;
        this.sendRequest(http_1.RequestMethod.Get, url).subscribe(function (response) {
            return _this.teams = response;
        });
    };
    Repository.prototype.getPlayer = function (id) {
        var _this = this;
        console.log("getPlayer()");
        this.sendRequest(http_1.RequestMethod.Get, playerUrl + "/" + id).subscribe(function (response) {
            _this.player = response;
            console.log(_this.player);
        });
    };
    Repository.prototype.getPlayers = function (teamId, related) {
        var _this = this;
        if (teamId === void 0) { teamId = 0; }
        if (related === void 0) { related = true; }
        console.log("getPlayers()");
        console.log("team selected");
        console.log(this.team);
        var url = playerUrl + "?related=" + related;
        if (teamId != 0)
            url += "&teamId=" + teamId;
        this.sendRequest(http_1.RequestMethod.Get, url).subscribe(function (response) {
            return _this.players = response;
        });
    };
    Repository.prototype.getBallpark = function (id) {
        var _this = this;
        console.log("getBallpark()");
        this.sendRequest(http_1.RequestMethod.Get, ballparkUrl + "/" + id).subscribe(function (response) {
            _this.ballpark = response;
            console.log(_this.ballpark);
        });
    };
    Repository.prototype.getBallparks = function (related) {
        var _this = this;
        if (related === void 0) { related = false; }
        console.log("getBallparks()");
        var url = ballparkUrl + "?related=" + this.filter.related;
        this.sendRequest(http_1.RequestMethod.Get, url).subscribe(function (response) {
            return _this.ballparks = response;
        });
    };
    Repository.prototype.getGame = function (id) {
        var _this = this;
        console.log("getGame()");
        this.sendRequest(http_1.RequestMethod.Get, gameUrl + "/" + id).subscribe(function (response) {
            _this.game = response;
            console.log(_this.game);
        });
    };
    Repository.prototype.getGames = function (related) {
        var _this = this;
        if (related === void 0) { related = false; }
        console.log("getGames()");
        var url = gameUrl + "?related=" + this.filter.related;
        this.sendRequest(http_1.RequestMethod.Get, url).subscribe(function (response) { return _this.games = response; });
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
            tournamentId: team.tournament.id
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
    Repository.prototype.createPlayer = function (player) {
        var _this = this;
        var data = {
            firstName: player.firstName,
            lastName: player.lastName,
            dob: player.dob,
            stateId: player.stateId,
            teamId: player.teamId
        };
        console.log("createPlayer()");
        console.log(data);
        this.sendRequest(http_1.RequestMethod.Post, playerUrl, data).subscribe(function (response) {
            player.id = response;
            _this.players.push(player);
        });
    };
    Repository.prototype.replacePlayer = function (player) {
        var _this = this;
        var data = {
            id: player.id,
            firstName: player.firstName,
            lastName: player.lastName,
            dob: player.dob,
            teamId: player.teamId,
            email: player.email
        };
        console.log("replacePlayer()");
        console.log(data);
        console.log(player);
        this.sendRequest(http_1.RequestMethod.Put, playerUrl + "/" + player.id, data).subscribe(function (response) { return _this.getPlayers(); });
    };
    Repository.prototype.deletePlayer = function (id) {
        var _this = this;
        this.sendRequest(http_1.RequestMethod.Delete, playerUrl + "/" + id).subscribe(function (response) { return _this.getPlayers(); }); //TODO: get teamid
    };
    Repository.prototype.createBallpark = function (ballpark) {
        var _this = this;
        var data = {
            name: ballpark.name,
            street: ballpark.street,
            city: ballpark.city,
            stateId: ballpark.state.stateId,
            zip: ballpark.zip
        };
        console.log("createBallpark()");
        console.log(data);
        this.sendRequest(http_1.RequestMethod.Post, ballparkUrl, data).subscribe(function (response) {
            ballpark.id = response;
            _this.ballparks.push(ballpark);
        });
    };
    Repository.prototype.replaceBallpark = function (ballpark) {
        var _this = this;
        var data = {
            id: ballpark.id,
            name: ballpark.name,
            street: ballpark.street,
            city: ballpark.city,
            stateId: ballpark.stateId,
            zip: ballpark.zip
        };
        this.sendRequest(http_1.RequestMethod.Put, ballparkUrl + "/" + ballpark.id, data).subscribe(function (response) { return _this.getBallparks(); });
    };
    Repository.prototype.deleteBallpark = function (id) {
        var _this = this;
        this.sendRequest(http_1.RequestMethod.Delete, ballparkUrl + "/" + id).subscribe(function (response) { return _this.getBallparks(); });
    };
    Repository.prototype.createGame = function (game) {
        var _this = this;
        var data = {
            homeTeamId: game.homeTeamId,
            awayTeamId: game.awayTeamId,
            homeTeamRuns: game.homeTeamRuns,
            awayTeamRuns: game.awayTeamRuns,
            gameDate: game.gameDate,
            ballparkId: game.ballparkId
        };
        console.log("createGame()");
        console.log(data);
        this.sendRequest(http_1.RequestMethod.Post, gameUrl, data).subscribe(function (response) {
            game.id = response;
            _this.games.push(game);
        });
    };
    Repository.prototype.replaceGame = function (game) {
        var _this = this;
        var data = {
            id: game.id,
            homeTeamId: game.homeTeamId,
            awayTeamId: game.awayTeamId,
            homeTeamRuns: game.homeTeamRuns,
            awayTeamRuns: game.awayTeamRuns,
            gameDate: game.gameDate,
            ballparkId: game.ballparkId
        };
        console.log("replaceGame()");
        console.log(data);
        this.sendRequest(http_1.RequestMethod.Put, gameUrl + "/" + game.id, data).subscribe(function (response) { return _this.getGames(); });
    };
    Repository.prototype.deleteGame = function (id) {
        var _this = this;
        this.sendRequest(http_1.RequestMethod.Delete, gameUrl + "/" + id).subscribe(function (response) { return _this.getGames(); });
    };
    Repository.prototype.createTournament = function (tournament) {
        var _this = this;
        var data = {
            id: tournament.id,
            startDate: tournament.startDate,
            endDate: tournament.endDate,
            isCurrent: tournament.isCurrent,
            name: tournament.name
        };
        console.log("createTournament()");
        console.log(tournament);
        this.sendRequest(http_1.RequestMethod.Post, tournamentUrl, data).subscribe(function (response) {
            tournament.id = response;
            _this.tournaments.push(tournament);
        });
    };
    Repository.prototype.replaceTournament = function (tournament) {
        var _this = this;
        var data = {
            id: tournament.id,
            startDate: tournament.startDate,
            endDate: tournament.endDate,
            isCurrent: tournament.isCurrent,
            name: tournament.name
        };
        this.sendRequest(http_1.RequestMethod.Put, tournamentUrl + "/" + tournament.id, data).subscribe(function (response) { return _this.getTournaments(); });
    };
    Repository.prototype.deleteTournament = function (id) {
        var _this = this;
        if (confirm("Are you sure you want to delete this?")) {
            this.sendRequest(http_1.RequestMethod.Delete, tournamentUrl + "/" + id).subscribe(function (response) { return _this.getTournaments(); });
        }
    };
    Repository = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], Repository);
    return Repository;
}());
exports.Repository = Repository;
//# sourceMappingURL=repository.js.map