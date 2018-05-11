"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var teamTable_component_1 = require("./structure/teamTable.component");
var teamDetail_component_1 = require("./structure/teamDetail.component");
var gameTable_component_1 = require("./structure/gameTable.component");
var admin_component_1 = require("./admin/admin.component");
var overview_component_1 = require("./admin/overview.component");
var teamAdmin_component_1 = require("./admin/teamAdmin.component");
var tournamentAdmin_component_1 = require("./admin/tournamentAdmin.component");
var ballparkAdmin_component_1 = require("./admin/ballparkAdmin.component");
var gameAdmin_component_1 = require("./admin/gameAdmin.component");
var ballparkDetail_component_1 = require("./structure/ballparkDetail.component");
var routes = [
    {
        path: "admin", component: admin_component_1.AdminComponent,
        children: [
            { path: "teams", component: teamAdmin_component_1.TeamAdminComponent },
            { path: "overview", component: overview_component_1.OverviewComponent },
            { path: "tournaments", component: tournamentAdmin_component_1.TournamentAdminComponent },
            { path: "ballparks", component: ballparkAdmin_component_1.BallparkAdminComponent },
            { path: "games", component: gameAdmin_component_1.GameAdminComponent }
        ]
    },
    { path: "teamTable", component: teamTable_component_1.TeamTableComponent },
    { path: "teamDetail/:id", component: teamDetail_component_1.TeamDetailComponent },
    { path: "teamDetail", component: teamDetail_component_1.TeamDetailComponent },
    { path: "", component: teamTable_component_1.TeamTableComponent },
    { path: "games", component: gameTable_component_1.GameTableComponent },
    { path: "ballparkDetail/:id", component: ballparkDetail_component_1.BallparkDetailComponent }
];
exports.RoutingConfig = router_1.RouterModule.forRoot(routes);
//# sourceMappingURL=app.routing.js.map