import { Component } from "@angular/core";
import { Repository } from "../models/repository";
import { Team } from "../models/team.model";
import { State } from "../models/state.model";
import { Player } from "../models/player.model";


@Component({
	selector: "admin-player-editor",
	templateUrl: "playerEditor.component.html"
})

export class PlayerEditorComponent
{
	constructor(private repo: Repository) { }

	ngOnInit()
	{
		this.player.dob = new Date().toISOString().split('T')[0];
	}

	get team(): Team
	{
		return this.repo.team;
	}

	get teams(): Team[]
	{
		return this.repo.teams;
	}

	get player(): Player
	{
		return this.repo.player;
	}

	get states(): State[]
	{
		return this.repo.states;
	}

	parseDate(dateString: string): Date
	{
		console.log("parseDate()");

		if (dateString)
		{
			return new Date(dateString);
		} else
		{
			return null;
		}
	}

	compareStates(s1: State, s2: State)
	{
		return s1 && s2 && s1.name == s2.name;
	}

	compareTeams(t1: Team, t2: Team)
	{
		return t1 && t2 && t1.teamName == t2.teamName;
	}
}