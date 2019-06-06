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
var GameStatsComponent = /** @class */ (function () {
    function GameStatsComponent(repo) {
        this.repo = repo;
    }
    GameStatsComponent.prototype.ngOnInit = function () {
    };
    Object.defineProperty(GameStatsComponent.prototype, "game", {
        get: function () {
            return this.repo.game;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GameStatsComponent.prototype, "games", {
        get: function () {
            //console.log("get games");
            console.log(this.repo.games);
            return this.repo.games;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GameStatsComponent.prototype, "ballparks", {
        get: function () {
            return this.repo.ballparks;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GameStatsComponent.prototype, "teams", {
        get: function () {
            // console.log('selected team');
            //console.log(this.repo.teams);
            return this.repo.teams;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GameStatsComponent.prototype, "tournaments", {
        get: function () {
            return this.repo.tournaments;
        },
        enumerable: true,
        configurable: true
    });
    GameStatsComponent.prototype.setTeam = function (id) {
        console.log('set team: ' + id);
        this.repo.filter.teamId = id;
        this.repo.getGames();
    };
    GameStatsComponent.prototype.setGame = function (id) {
        console.log('set game: ' + id);
        this.repo.getGameStatsHitting(id, this.repo.filter.teamId);
    };
    GameStatsComponent = __decorate([
        core_1.Component({
            selector: 'app-game-stats',
            templateUrl: './game-stats.component.html',
            styleUrls: ['./game-stats.component.css']
        }),
        __metadata("design:paramtypes", [repository_1.Repository])
    ], GameStatsComponent);
    return GameStatsComponent;
}());
exports.GameStatsComponent = GameStatsComponent;
//# sourceMappingURL=game-stats.component.js.map