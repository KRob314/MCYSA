import { Routes, RouterModule } from "@angular/router";
import { TeamTableComponent } from "./structure/teamTable.component";
import { TeamDetailComponent } from "./structure/teamDetail.component";
import { AdminComponent } from "./admin/admin.component";
import { OverviewComponent } from "./admin/overview.component";
import { TeamAdminComponent } from "./admin/teamAdmin.component";
import { TournamentAdminComponent } from "./admin/tournamentAdmin.component";
import { BallparkAdminComponent } from "./admin/ballparkAdmin.component";
import { GameAdminComponent } from "./admin/gameAdmin.component";

const routes: Routes = 
    [
        {
            path: "admin", component: AdminComponent,
            children: [
                { path: "teams", component: TeamAdminComponent },
				{ path: "overview", component: OverviewComponent },
				{ path: "tournaments", component: TournamentAdminComponent }, 
				{ path: "ballparks", component: BallparkAdminComponent }, 
				{ path: "games", component: GameAdminComponent }
            ]
        },
        { path: "table", component: TeamTableComponent },
        { path: "detail/:id", component: TeamDetailComponent },
        { path: "detail", component: TeamDetailComponent },
        { path: "", component: TeamTableComponent }
    ]

export const RoutingConfig = RouterModule.forRoot(routes);