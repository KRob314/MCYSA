import { Component} from "@angular/core";
import { Repository } from "../models/repository";
import { Team } from "../models/team.model";
import { Player } from "../models/player.model";


@Component({
	templateUrl: "playerAdmin.component.html", 
	selector: "admin-player"
})

export class PlayerAdminComponent 
{

	constructor(private repo: Repository)
	{
		this.init();		
	}

	tableMode: boolean = true;

	get team(): Team
	{
		return this.repo.team;
	}

	selectTeam(id: number)
	{
		this.repo.getTeam(id);
	}

	get teams(): Team[] 
	{
		return this.repo.teams;
	}

	get player(): Player
	{
		return this.repo.player;
	}

	get players(): Player[]
	{		
		//console.log("getPlayers() playerAdmin.component");
		//console.log(this.repo.players);

		var data = this.repo.players;

		if (this.repo.team)
		{
			data = data.filter(p => p.teamId == this.repo.team.id);
		}

		return data;
	}

	init() //if on players view, clear selected team to view all players
	{
		var url = window.location.href;

		if (url.indexOf("players") > -1)
		{
			this.repo.team = undefined;
		}
	}

	selectPlayer(id: number)
	{
		return this.repo.getPlayer(id);
	}

	deletePlayer(id: number)
	{
		this.repo.deletePlayer(id);

	}

	savePlayer()
	{
		console.log("savePlayer()");
		console.log(this.repo.player);

		if (this.repo.player.id == null)
			this.repo.createPlayer(this.repo.player);
		else
			this.repo.replacePlayer(this.repo.player);

		this.clearPlayer();
	}

	clearPlayer()
	{
		this.repo.player = new Player();
		this.tableMode = true;
	}


	compareTeams(t1: Team, t2: Team)
	{
		return t1 && t2 && t1.teamName == t2.teamName;
	}


}