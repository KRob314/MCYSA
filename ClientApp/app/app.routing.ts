import { Routes, RouterModule } from "@angular/router";
import { TeamTableComponent } from "./structure/teamTable.component";
import { TeamDetailComponent } from "./structure/teamDetail.component";
import { AdminComponent } from "./admin/admin.component";
import { OverviewComponent } from "./admin/overview.component";
import { TeamAdminComponent } from "./admin/teamAdmin.component";


const routes: Routes = 
    [
        {
            path: "admin", component: AdminComponent,
            children: [
                { path: "teams", component: TeamAdminComponent },
                {path: "overview", component: OverviewComponent}
            ]
        },
        { path: "table", component: TeamTableComponent },
        { path: "detail/:id", component: TeamDetailComponent },
        { path: "detail", component: TeamDetailComponent },
        { path: "", component: TeamTableComponent }
    ]

export const RoutingConfig = RouterModule.forRoot(routes);