import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ModelModule } from "./models/model.module";
import { TeamTableComponent } from "./structure/teamTable.component";
import { StateFilterComponent } from "./structure/stateFilter.component";
import { AgeFilterComponent } from "./structure/ageFilter.component";
import { TeamDetailComponent } from "./structure/teamDetail.component";
import { GameTableComponent } from "./structure/gameTable.component";
import { BallparkDetailComponent } from "./structure/ballparkDetail.component";
import { RoutingConfig } from "./app.routing";
import { AdminModule } from "./admin/admin.module";

@NgModule({
    declarations: [
        AppComponent, TeamTableComponent, StateFilterComponent, AgeFilterComponent, TeamDetailComponent, GameTableComponent, BallparkDetailComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        ModelModule,
        RoutingConfig, 
        AdminModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
