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
var GameEditorComponent = /** @class */ (function () {
    function GameEditorComponent(repo) {
        this.repo = repo;
    }
    Object.defineProperty(GameEditorComponent.prototype, "game", {
        get: function () {
            return this.repo.game;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GameEditorComponent.prototype, "ballparks", {
        get: function () {
            return this.repo.ballparks;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GameEditorComponent.prototype, "teams", {
        get: function () {
            return this.repo.teams;
        },
        enumerable: true,
        configurable: true
    });
    GameEditorComponent.prototype.compareTeams = function (t1, t2) {
        return t1 && t2 && t1.teamName == t2.teamName;
    };
    GameEditorComponent.prototype.compareBallparks = function (b1, b2) {
        return b1 && b2 && b1.name == b2.name;
    };
    GameEditorComponent = __decorate([
        core_1.Component({
            selector: "admin-game-editor",
            templateUrl: "gameEditor.component.html"
        }),
        __metadata("design:paramtypes", [repository_1.Repository])
    ], GameEditorComponent);
    return GameEditorComponent;
}());
exports.GameEditorComponent = GameEditorComponent;
//# sourceMappingURL=gameEditor.component.js.map