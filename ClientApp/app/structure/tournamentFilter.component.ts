import { Component } from '@angular/core';
import { Repository } from "../models/repository";

@Component({
	selector: "tournament-filter",
	templateUrl: "tournamentFilter.component.html"
})

export class TournamentFilterComponent
{

	constructor(private repo: Repository) { }

	setTournament(id: number)
	{
		this.repo.filter.tournamentId = id;
		this.repo.getTeams();
		this.repo.getGames();
	}
}