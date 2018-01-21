import { Component } from "@angular/core";
import { Repository } from "../models/repository";
import { Tournament } from "../models/tournament.model";

@Component({
	selector: "admin-tournament-editor",
	templateUrl: "tournamentEditor.component.html"
})

export class TournamentEditorComponent
{
	constructor(private repo: Repository) { }

	get tournament(): Tournament
	{
		return this.repo.tournament;
	}

}