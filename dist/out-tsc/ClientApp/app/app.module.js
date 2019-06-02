"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var admin_module_1 = require("./admin/admin.module");
var model_module_1 = require("./models/model.module");
var app_component_1 = require("./app.component");
var teamTable_component_1 = require("./structure/teamTable.component");
var stateFilter_component_1 = require("./structure/stateFilter.component");
var ageFilter_component_1 = require("./structure/ageFilter.component");
//import { TournamentFilterComponent } from "./structure/tournamentFilter.component";
//import { PlayerTableComponent } from "./structure/playerTable.component";
var teamDetail_component_1 = require("./structure/teamDetail.component");
var gameTable_component_1 = require("./structure/gameTable.component");
var ballparkDetail_component_1 = require("./structure/ballparkDetail.component");
var app_routing_1 = require("./app.routing");
var shared_module_1 = require("./shared.module");
var stateFilter_pipe_1 = require("./structure/stateFilter.pipe");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent, teamTable_component_1.TeamTableComponent, stateFilter_component_1.StateFilterComponent, ageFilter_component_1.AgeFilterComponent, teamDetail_component_1.TeamDetailComponent, gameTable_component_1.GameTableComponent, ballparkDetail_component_1.BallparkDetailComponent, stateFilter_pipe_1.StateFilterPipe //, TournamentFilterComponent  //, PlayerTableComponent //
            ],
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                http_1.HttpModule,
                model_module_1.ModelModule,
                app_routing_1.RoutingConfig,
                admin_module_1.AdminModule,
                shared_module_1.SharedModule
            ],
            providers: [],
            bootstrap: [app_component_1.AppComponent],
            exports: [shared_module_1.SharedModule]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map