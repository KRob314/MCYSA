import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AdminModule } from "./admin/admin.module";
import { ModelModule } from "./models/model.module";

import { AppComponent } from './app.component';
import { TeamTableComponent } from "./structure/teamTable.component";
import { StateFilterComponent } from "./structure/stateFilter.component";
import { AgeFilterComponent } from "./structure/ageFilter.component";
//import { TournamentFilterComponent } from "./structure/tournamentFilter.component";
//import { PlayerTableComponent } from "./structure/playerTable.component";
import { TeamDetailComponent } from "./structure/teamDetail.component";
import { GameTableComponent } from "./structure/gameTable.component";
import { BallparkDetailComponent } from "./structure/ballparkDetail.component";
import { RoutingConfig } from "./app.routing";
import { SharedModule } from "./shared.module";

import { StateFilterPipe } from "./structure/stateFilter.pipe";

@NgModule({
    declarations: [
		AppComponent, TeamTableComponent, StateFilterComponent, AgeFilterComponent, TeamDetailComponent, GameTableComponent, BallparkDetailComponent, StateFilterPipe   //, TournamentFilterComponent  //, PlayerTableComponent //
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        ModelModule,
        RoutingConfig, 
		AdminModule,
		SharedModule
    ],
    providers: [],
	bootstrap: [AppComponent],
	exports: [SharedModule]
})
export class AppModule { }
