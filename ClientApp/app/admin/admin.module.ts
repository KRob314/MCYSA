import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser"
import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { AdminComponent } from "./admin.component";
import { OverviewComponent } from "./overview.component";
import { TeamAdminComponent } from "./teamAdmin.component";
import { TeamEditorComponent } from "./teamEditor.component";
import { PlayerAdminComponent } from "./playerAdmin.component";
import { PlayerEditorComponent } from "./playerEditor.component";
import { TournamentEditorComponent } from "./tournamentEditor.component";
import { TournamentAdminComponent } from "./tournamentAdmin.component";
import { BallparkAdminComponent } from "./ballparkAdmin.component";
import { BallparkEditorComponent } from "./ballparkEditor.component";
import { GameAdminComponent } from "./gameAdmin.component";
import { GameEditorComponent } from "./gameEditor.component";
//import { TournamentFilterComponent } from "../structure/tournamentFilter.component";
import { SharedModule } from "../shared.module";
import { GameStatsComponent } from './game-stats.component';
import { PlayerGameStatsComponent } from './player-game-stats/player-game-stats.component';

@NgModule({
    imports: [BrowserModule, RouterModule, FormsModule, SharedModule],
	declarations: [AdminComponent, OverviewComponent,
		TeamAdminComponent, TeamEditorComponent,
		PlayerAdminComponent, PlayerEditorComponent,
		TournamentEditorComponent, TournamentAdminComponent,
		BallparkAdminComponent, BallparkEditorComponent,
	GameAdminComponent, GameEditorComponent, GameStatsComponent, PlayerGameStatsComponent] //, TournamentFilterComponent]
})

export class AdminModule { }