import { Component } from '@angular/core';
import { Repository } from "../models/repository";
import { Team } from "../models/team.model";
import { Game } from "../models/game.model";
import { Router } from "@angular/router";

@Component({
	selector: "game-table",
	templateUrl: "./gameTable.component.html"
})

export class GameTableComponent
{
	constructor(private repo: Repository, private router: Router)
	{

	}

	get teams(): Team[]
	{
		return this.repo.teams;
	}

	get games(): Game[]
	{
		return this.repo.games;
	}

	selectGame(id: number)
	{

		this.repo.getGame(id);
		//this.router.navigateByUrl("/detail");
	}
}