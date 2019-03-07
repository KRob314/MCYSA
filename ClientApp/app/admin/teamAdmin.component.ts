import { Component } from "@angular/core";
import { Repository } from "../models/repository";
import { Team } from "../models/team.model";


@Component({
	templateUrl: "teamAdmin.component.html"
})

export class TeamAdminComponent
{
	constructor(private repo: Repository) { }

	tableMode: boolean = true;

	get team(): Team
	{
		return this.repo.team;
	}

	selectTeam(id: number)
	{
		this.repo.getTeam(id);
		this.onlyShowSelectedTeam(id);
	}

	saveTeam()
	{
		//console.log("saveTeam()");


		this.repo.team.stateId = this.repo.team.state.stateId;
		this.repo.team.ageGroupId = this.repo.team.ageGroup.id;


		//console.log(this.repo.team);


		if (this.repo.team.id == null)
			this.repo.createTeam(this.repo.team)
		else
			this.repo.replaceTeam(this.repo.team);

		this.clearTeam();
		this.tableMode = true;
	}

	deleteTeam(id: number)
	{
		this.repo.deleteTeam(id);
	}

	clearTeam()
	{
		this.repo.team = new Team();
		this.tableMode = true;
	}

	get teams(): Team[] 
	{
		//console.log("getTeams() teamAdmin.component")
		//console.log(this.repo.teams);

		return this.repo.teams;
	}

	onlyShowSelectedTeam(id)
	{
		console.log("onlyShowSelectedTeam()");
		//function FindByAttributeValue(attribute, value, element_type)
		//{
		var element_type = "td";
		var attribute = "data-teamid";
		var value = id;

		element_type = element_type || "*";
		var All = document.getElementsByTagName(element_type);
	
		for (var i = 0; i < All.length; i++)
		{
			console.log(All[i].getAttribute(attribute));

			if (All[i].getAttribute(attribute) == value)
			{
				//return All[i];
				console.log(All[i]);
			}

		}
		//}
	}
}