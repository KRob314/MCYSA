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
var repository_1 = require("../../models/repository");
var PlayerGameStatsComponent = /** @class */ (function () {
    function PlayerGameStatsComponent(repo) {
        this.repo = repo;
    }
    PlayerGameStatsComponent.prototype.ngOnInit = function () {
    };
    Object.defineProperty(PlayerGameStatsComponent.prototype, "gameStatsHitting", {
        get: function () {
            console.log('get gameStatsHitting()');
            //console.log(this.repo.gameStatsHitting);
            return this.repo.gameStatsHitting;
        },
        enumerable: true,
        configurable: true
    });
    PlayerGameStatsComponent = __decorate([
        core_1.Component({
            selector: 'player-game-stats',
            templateUrl: './player-game-stats.component.html',
            styleUrls: ['./player-game-stats.component.css']
        }),
        __metadata("design:paramtypes", [repository_1.Repository])
    ], PlayerGameStatsComponent);
    return PlayerGameStatsComponent;
}());
exports.PlayerGameStatsComponent = PlayerGameStatsComponent;
//# sourceMappingURL=player-game-stats.component.js.map