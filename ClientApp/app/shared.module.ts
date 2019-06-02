import { NgModule,  CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA  } from '@angular/core';
import { CommonModule } from '@angular/common';

//import { SortDirective } from './sort-directive';
import { TournamentFilterComponent } from "../app/structure/tournamentFilter.component";


@NgModule({
	imports: [CommonModule],
	declarations: [TournamentFilterComponent],
	exports: [TournamentFilterComponent], 
	schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
})

export class SharedModule { }