import { Component } from '@angular/core';
import { Repository } from "../models/repository";
import { Player } from "../models/player.model";
import { Router } from "@angular/router";

@Component({
	selector: "player-table",
	templateUrl: "./playerTable.component.html"
})

export class PlayerTableComponent
{
	constructor(private repo: Repository, private router: Router)
	{

	}

	get players(): Player[]
	{
		return this.repo.players;
	}

	selectPlayer(id: number)
	{

		this.repo.getPlayer(id);
		//this.router.navigateByUrl("/detail");
	}
}