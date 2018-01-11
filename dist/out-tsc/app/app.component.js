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
var repository_1 = require("./models/repository");
var team_model_1 = require("./models/team.model");
var AppComponent = /** @class */ (function () {
    //title = 'app works!';
    function AppComponent(repo) {
        this.repo = repo;
        console.log("AppComponent constructor");
    }
    Object.defineProperty(AppComponent.prototype, "team", {
        get: function () {
            return this.repo.team;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppComponent.prototype, "teams", {
        get: function () {
            return this.repo.teams;
        },
        enumerable: true,
        configurable: true
    });
    AppComponent.prototype.createTeam = function () {
        this.repo.createTeam(new team_model_1.Team(0, 1, 2, "MD", "St. Louis Cardinals", "Kyle", "Markley"));
    };
    AppComponent.prototype.replaceTeam = function () {
        var t = this.repo.teams[0];
        t.teamname = "Modified Team Name";
        console.log("in app.component");
        console.log(t);
        this.repo.replaceTeam(t);
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.css']
        }),
        __metadata("design:paramtypes", [repository_1.Repository])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map