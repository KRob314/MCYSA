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
var PlayerEditorComponent = /** @class */ (function () {
    function PlayerEditorComponent(repo) {
        this.repo = repo;
    }
    PlayerEditorComponent.prototype.ngOnInit = function () {
        this.player.dob = new Date().toISOString().split('T')[0];
    };
    Object.defineProperty(PlayerEditorComponent.prototype, "team", {
        get: function () {
            return this.repo.team;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PlayerEditorComponent.prototype, "teams", {
        get: function () {
            return this.repo.teams;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PlayerEditorComponent.prototype, "player", {
        get: function () {
            return this.repo.player;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PlayerEditorComponent.prototype, "states", {
        get: function () {
            return this.repo.states;
        },
        enumerable: true,
        configurable: true
    });
    PlayerEditorComponent.prototype.parseDate = function (dateString) {
        console.log("parseDate()");
        if (dateString) {
            return new Date(dateString);
        }
        else {
            return null;
        }
    };
    PlayerEditorComponent.prototype.compareStates = function (s1, s2) {
        return s1 && s2 && s1.name == s2.name;
    };
    PlayerEditorComponent.prototype.compareTeams = function (t1, t2) {
        return t1 && t2 && t1.teamName == t2.teamName;
    };
    PlayerEditorComponent = __decorate([
        core_1.Component({
            selector: "admin-player-editor",
            templateUrl: "playerEditor.component.html"
        }),
        __metadata("design:paramtypes", [repository_1.Repository])
    ], PlayerEditorComponent);
    return PlayerEditorComponent;
}());
exports.PlayerEditorComponent = PlayerEditorComponent;
//# sourceMappingURL=playerEditor.component.js.map