import { Component } from "@angular/core";
import { Repository } from "../models/repository";
import { Ballpark } from "../models/ballpark.model";
import { Team } from "../models/team.model";
import { Game } from "../models/game.model";

@Component({
	templateUrl: "gameAdmin.component.html"
})

export class GameAdminComponent
{
	constructor(private repo: Repository) { }

	tableMode: boolean = true;

	get game(): Game
	{
		return this.repo.game;
	}

	get ballpark(): Ballpark
	{
		return this.repo.ballpark;
	}

	selectGame(id: number)
	{
		this.repo.getGame(id);
	}

	saveGame()
	{
		console.log("saveGame()");
		console.log(this.repo.game);

		if (this.repo.game.id == null)
			this.repo.createGame(this.repo.game);
		else
			this.repo.replaceGame(this.repo.game);

		this.clearGame();
		this.tableMode = true;
	}

	clearGame()
	{
		this.repo.game = new Game();
		this.tableMode = true;
	}

	get games(): Game[]
	{
		return this.repo.games;
	}
}