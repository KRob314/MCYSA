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
var PlayerGameStatsEditorComponent = /** @class */ (function () {
    function PlayerGameStatsEditorComponent(repo) {
        this.repo = repo;
    }
    PlayerGameStatsEditorComponent.prototype.ngOnInit = function () {
    };
    Object.defineProperty(PlayerGameStatsEditorComponent.prototype, "playerHittingStats", {
        get: function () {
            return this.repo.playerHittingStats;
        },
        enumerable: true,
        configurable: true
    });
    PlayerGameStatsEditorComponent = __decorate([
        core_1.Component({
            selector: 'player-game-stats-editor',
            templateUrl: './player-game-stats-editor.component.html',
            styleUrls: ['./player-game-stats-editor.component.css']
        }),
        __metadata("design:paramtypes", [repository_1.Repository])
    ], PlayerGameStatsEditorComponent);
    return PlayerGameStatsEditorComponent;
}());
exports.PlayerGameStatsEditorComponent = PlayerGameStatsEditorComponent;
//# sourceMappingURL=player-game-stats-editor.component.js.map