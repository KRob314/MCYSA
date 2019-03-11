import { Component } from "@angular/core";
import { Repository } from "../models/repository";
import { Game } from "../models/game.model";
import { Ballpark } from "../models/ballpark.model";
import { Team } from "../models/team.model";
import { Tournament } from "../models/tournament.model";

@Component({
	selector: "admin-game-editor",
	templateUrl: "gameEditor.component.html"
})

export class GameEditorComponent
{
	constructor(private repo: Repository) { }

	get game(): Game
	{
		return this.repo.game;
	}

	get ballparks(): Ballpark[]
	{
		return this.repo.ballparks;
	}

	get teams(): Team[]
	{
		return this.repo.teams;
	}

	get tournaments(): Tournament[]
	{
		return this.repo.tournaments;
	}

	compareTeams(t1: Team, t2: Team)
	{
		console.log("compareTeam() ")
		console.log(t1);
		console.log(t2);
		console.log(t1 && t2 && t1.teamName == t2.teamName);

		return t1 && t2 && t1.teamName == t2.teamName;
	}

	compareBallparks(b1: Ballpark, b2: Ballpark)
	{
		return b1 && b2 && b1.name == b2.name;
	}

}