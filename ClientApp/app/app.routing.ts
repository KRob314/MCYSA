import { Routes, RouterModule } from "@angular/router";
import { TeamTableComponent } from "./structure/teamTable.component";
import { TeamDetailComponent } from "./structure/teamDetail.component";
import { GameTableComponent } from "./structure/gameTable.component";
import { AdminComponent } from "./admin/admin.component";
import { OverviewComponent } from "./admin/overview.component";
import { TeamAdminComponent } from "./admin/teamAdmin.component";
import { TournamentAdminComponent } from "./admin/tournamentAdmin.component";
import { BallparkAdminComponent } from "./admin/ballparkAdmin.component";
import { GameAdminComponent } from "./admin/gameAdmin.component";
import { BallparkDetailComponent } from "./structure/ballparkDetail.component";

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
        { path: "teamTable", component: TeamTableComponent },
        { path: "teamDetail/:id", component: TeamDetailComponent },
        { path: "teamDetail", component: TeamDetailComponent },
		{ path: "", component: TeamTableComponent }, 
		{ path: "games", component: GameTableComponent }, 
		{ path: "ballparkDetail/:id", component: BallparkDetailComponent }
		
    ]

export const RoutingConfig = RouterModule.forRoot(routes);