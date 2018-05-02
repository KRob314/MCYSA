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
var ballpark_model_1 = require("../models/ballpark.model");
var BallparkAdminComponent = /** @class */ (function () {
    function BallparkAdminComponent(repo) {
        this.repo = repo;
        this.tableMode = true;
    }
    Object.defineProperty(BallparkAdminComponent.prototype, "ballpark", {
        get: function () {
            return this.repo.ballpark;
        },
        enumerable: true,
        configurable: true
    });
    BallparkAdminComponent.prototype.selectBallpark = function (id) {
        this.repo.getBallpark(id);
    };
    BallparkAdminComponent.prototype.saveBallpark = function () {
        console.log("saveBallpark()");
        console.log(this.repo.ballpark);
        if (this.repo.ballpark.id == null)
            this.repo.createBallpark(this.repo.ballpark);
        else
            this.repo.replaceBallpark(this.repo.ballpark);
        this.clearBallpark();
        this.tableMode = true;
    };
    BallparkAdminComponent.prototype.clearBallpark = function () {
        this.repo.ballpark = new ballpark_model_1.Ballpark();
        this.tableMode = true;
    };
    Object.defineProperty(BallparkAdminComponent.prototype, "ballparks", {
        get: function () {
            return this.repo.ballparks;
        },
        enumerable: true,
        configurable: true
    });
    BallparkAdminComponent = __decorate([
        core_1.Component({
            templateUrl: "ballparkAdmin.component.html"
        }),
        __metadata("design:paramtypes", [repository_1.Repository])
    ], BallparkAdminComponent);
    return BallparkAdminComponent;
}());
exports.BallparkAdminComponent = BallparkAdminComponent;
//# sourceMappingURL=ballparkAdmin.component.js.map