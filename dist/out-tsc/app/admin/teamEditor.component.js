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
var TeamEditorComponent = /** @class */ (function () {
    function TeamEditorComponent(repo) {
        this.repo = repo;
    }
    Object.defineProperty(TeamEditorComponent.prototype, "team", {
        get: function () {
            return this.repo.team;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TeamEditorComponent.prototype, "states", {
        get: function () {
            return this.repo.states;
        },
        enumerable: true,
        configurable: true
    });
    TeamEditorComponent.prototype.compareTournaments = function (t1, t2) {
        return t1 && t2 && t1.name == t2.name;
    };
    TeamEditorComponent.prototype.compareStates = function (s1, s2) {
        //console.log("compareStates()");
        //console.log(s1.name);
        //console.log(s2.name);
        return s1 && s2 && s1.name == s2.name;
    };
    TeamEditorComponent = __decorate([
        core_1.Component({
            selector: "admin-team-editor",
            templateUrl: "teamEditor.component.html"
        }),
        __metadata("design:paramtypes", [repository_1.Repository])
    ], TeamEditorComponent);
    return TeamEditorComponent;
}());
exports.TeamEditorComponent = TeamEditorComponent;
//# sourceMappingURL=teamEditor.component.js.map