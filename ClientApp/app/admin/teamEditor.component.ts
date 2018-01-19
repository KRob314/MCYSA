import { Component } from "@angular/core";
import { Repository } from "../models/repository";
import {Team} from "../models/team.model";
import { Tournament } from "../models/tournament.model";
import { State } from "../models/state.model";

@Component({
    selector: "admin-team-editor",
    templateUrl: "teamEditor.component.html"
})

export class TeamEditorComponent
{
    constructor(private repo: Repository) {}

    get team(): Team
    {
        return this.repo.team;
	}

	get states(): State[]
	{
		return this.repo.states;
	}

	compareTournaments(t1: Tournament, t2: Tournament )
	{
		return t1 && t2 && t1.name == t2.name;
	}

	compareStates(s1: State, s2: State)
	{
		//console.log("compareStates()");
		//console.log(s1.name);
		//console.log(s2.name);
		return s1 && s2 && s1.name == s2.name;
	}
    
}