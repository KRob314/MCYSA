import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser"
import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { AdminComponent } from "./admin.component";
import { OverviewComponent } from "./overview.component";
import { TeamAdminComponent } from "./teamAdmin.component";
import { TeamEditorComponent } from "./teamEditor.component";
import { TournamentEditorComponent } from "./tournamentEditor.component";
import { TournamentAdminComponent } from "./tournamentAdmin.component";
import { BallparkAdminComponent } from "./ballparkAdmin.component";
import { BallparkEditorComponent } from "./ballparkEditor.component";

@NgModule({
    imports: [BrowserModule, RouterModule, FormsModule],
    declarations: [AdminComponent, OverviewComponent, TeamAdminComponent, TeamEditorComponent, TournamentEditorComponent, TournamentAdminComponent, BallparkAdminComponent, BallparkEditorComponent]
})

export class AdminModule { }