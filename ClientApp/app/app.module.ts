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

@NgModule({
    declarations: [
        AppComponent, TeamTableComponent, StateFilterComponent, AgeFilterComponent, TeamDetailComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        ModelModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
