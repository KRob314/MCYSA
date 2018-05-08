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
var game_model_1 = require("../models/game.model");
var GameAdminComponent = /** @class */ (function () {
    function GameAdminComponent(repo) {
        this.repo = repo;
        this.tableMode = true;
    }
    Object.defineProperty(GameAdminComponent.prototype, "game", {
        get: function () {
            return this.repo.game;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GameAdminComponent.prototype, "ballpark", {
        get: function () {
            return this.repo.ballpark;
        },
        enumerable: true,
        configurable: true
    });
    GameAdminComponent.prototype.selectGame = function (id) {
        this.repo.getGame(id);
    };
    GameAdminComponent.prototype.saveGame = function () {
        console.log("saveGame()");
        console.log(this.repo.game);
        if (this.repo.game.id == null)
            this.repo.createGame(this.repo.game);
        else
            this.repo.replaceGame(this.repo.game);
        this.clearGame();
        this.tableMode = true;
    };
    GameAdminComponent.prototype.clearGame = function () {
        this.repo.game = new game_model_1.Game();
        this.tableMode = true;
    };
    Object.defineProperty(GameAdminComponent.prototype, "games", {
        get: function () {
            return this.repo.games;
        },
        enumerable: true,
        configurable: true
    });
    GameAdminComponent = __decorate([
        core_1.Component({
            templateUrl: "gameAdmin.component.html"
        }),
        __metadata("design:paramtypes", [repository_1.Repository])
    ], GameAdminComponent);
    return GameAdminComponent;
}());
exports.GameAdminComponent = GameAdminComponent;
//# sourceMappingURL=gameAdmin.component.js.map