import { Component } from "@angular/core";
import { Repository } from "../models/repository";
import { Tournament } from "../models/tournament.model";


@Component({
	templateUrl: "tournamentAdmin.component.html"
})

export class TournamentAdminComponent
{
	constructor(private repo: Repository) { }

	tableMode: boolean = true;

	get tournament(): Tournament
	{
		return this.repo.tournament;
	}

	get tournaments(): Tournament[]
	{
		return this.repo.tournaments;
	}

	selectTournament(id: number)
	{
		this.repo.getTournament(id);
	}

	clearTournament()
	{
		this.repo.tournament = new Tournament();
		this.tableMode = true;
	}
}