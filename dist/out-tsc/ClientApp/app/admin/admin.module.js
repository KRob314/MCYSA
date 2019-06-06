"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var router_1 = require("@angular/router");
var forms_1 = require("@angular/forms");
var admin_component_1 = require("./admin.component");
var overview_component_1 = require("./overview.component");
var teamAdmin_component_1 = require("./teamAdmin.component");
var teamEditor_component_1 = require("./teamEditor.component");
var playerAdmin_component_1 = require("./playerAdmin.component");
var playerEditor_component_1 = require("./playerEditor.component");
var tournamentEditor_component_1 = require("./tournamentEditor.component");
var tournamentAdmin_component_1 = require("./tournamentAdmin.component");
var ballparkAdmin_component_1 = require("./ballparkAdmin.component");
var ballparkEditor_component_1 = require("./ballparkEditor.component");
var gameAdmin_component_1 = require("./gameAdmin.component");
var gameEditor_component_1 = require("./gameEditor.component");
//import { TournamentFilterComponent } from "../structure/tournamentFilter.component";
var shared_module_1 = require("../shared.module");
var game_stats_component_1 = require("./game-stats.component");
var player_game_stats_component_1 = require("./player-game-stats/player-game-stats.component");
var player_game_stats_editor_component_1 = require("./player-game-stats-editor/player-game-stats-editor.component");
var AdminModule = /** @class */ (function () {
    function AdminModule() {
    }
    AdminModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule, router_1.RouterModule, forms_1.FormsModule, shared_module_1.SharedModule],
            declarations: [admin_component_1.AdminComponent, overview_component_1.OverviewComponent,
                teamAdmin_component_1.TeamAdminComponent, teamEditor_component_1.TeamEditorComponent,
                playerAdmin_component_1.PlayerAdminComponent, playerEditor_component_1.PlayerEditorComponent,
                tournamentEditor_component_1.TournamentEditorComponent, tournamentAdmin_component_1.TournamentAdminComponent,
                ballparkAdmin_component_1.BallparkAdminComponent, ballparkEditor_component_1.BallparkEditorComponent,
                gameAdmin_component_1.GameAdminComponent, gameEditor_component_1.GameEditorComponent, game_stats_component_1.GameStatsComponent, player_game_stats_component_1.PlayerGameStatsComponent, player_game_stats_editor_component_1.PlayerGameStatsEditorComponent] //, TournamentFilterComponent]
        })
    ], AdminModule);
    return AdminModule;
}());
exports.AdminModule = AdminModule;
//# sourceMappingURL=admin.module.js.map