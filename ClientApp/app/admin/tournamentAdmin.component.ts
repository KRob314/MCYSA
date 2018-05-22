import { Component } from "@angular/core";
import { Repository } from "../models/repository";
import { Tournament } from "../models/tournament.model";
import { Router } from "@angular/router";


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

	saveTournament()
	{
		console.log("saveTournament()");

		console.log(this.repo.tournament);


		if (this.repo.tournament.id == null)
			this.repo.createTournament(this.repo.tournament);
		else
			this.repo.replaceTournament(this.repo.tournament);

		this.clearTournament();
		this.tableMode = true;
	}

	deleteTournament(id: number)
	{
		this.repo.deleteTournament(id);
	}
}