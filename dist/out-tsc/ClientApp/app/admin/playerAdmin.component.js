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
var player_model_1 = require("../models/player.model");
var PlayerAdminComponent = /** @class */ (function () {
    function PlayerAdminComponent(repo) {
        this.repo = repo;
        this.tableMode = true;
        this.init();
    }
    Object.defineProperty(PlayerAdminComponent.prototype, "team", {
        get: function () {
            return this.repo.team;
        },
        enumerable: true,
        configurable: true
    });
    PlayerAdminComponent.prototype.selectTeam = function (id) {
        this.repo.getTeam(id);
    };
    Object.defineProperty(PlayerAdminComponent.prototype, "teams", {
        get: function () {
            return this.repo.teams;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PlayerAdminComponent.prototype, "player", {
        get: function () {
            return this.repo.player;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PlayerAdminComponent.prototype, "players", {
        get: function () {
            //console.log("getPlayers() playerAdmin.component");
            //console.log(this.repo.players);
            var _this = this;
            var data = this.repo.players;
            if (this.repo.team) {
                data = data.filter(function (p) { return p.teamId == _this.repo.team.id; });
            }
            return data;
        },
        enumerable: true,
        configurable: true
    });
    PlayerAdminComponent.prototype.init = function () {
        var url = window.location.href;
        if (url.indexOf("players") > -1) {
            this.repo.team = undefined;
        }
    };
    PlayerAdminComponent.prototype.selectPlayer = function (id) {
        return this.repo.getPlayer(id);
    };
    PlayerAdminComponent.prototype.deletePlayer = function (id) {
        this.repo.deletePlayer(id);
    };
    PlayerAdminComponent.prototype.savePlayer = function () {
        console.log("savePlayer()");
        console.log(this.repo.player);
        if (this.repo.player.id == null)
            this.repo.createPlayer(this.repo.player);
        else
            this.repo.replacePlayer(this.repo.player);
        this.clearPlayer();
    };
    PlayerAdminComponent.prototype.clearPlayer = function () {
        this.repo.player = new player_model_1.Player();
        this.tableMode = true;
    };
    PlayerAdminComponent.prototype.compareTeams = function (t1, t2) {
        return t1 && t2 && t1.teamName == t2.teamName;
    };
    PlayerAdminComponent = __decorate([
        core_1.Component({
            templateUrl: "playerAdmin.component.html",
            selector: "admin-player"
        }),
        __metadata("design:paramtypes", [repository_1.Repository])
    ], PlayerAdminComponent);
    return PlayerAdminComponent;
}());
exports.PlayerAdminComponent = PlayerAdminComponent;
//# sourceMappingURL=playerAdmin.component.js.map