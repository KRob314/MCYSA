﻿import { Component } from "@angular/core";
import { Repository } from "../models/repository";
import {Team} from "../models/team.model";
import { Tournament } from "../models/tournament.model";
import { State } from "../models/state.model";
import { AgeGroup } from "../models/agegroup.model";

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

	get ageGroups(): AgeGroup[]
	{
		return this.repo.ageGroups;
	}

	get tournaments(): Tournament[]
	{
		return this.repo.tournaments;
	}

	compareTournaments(t1: Tournament, t2: Tournament )
	{
		return t1 && t2 && t1.name == t2.name;
	}

	compareStates(s1: State, s2: State)
	{
		return s1 && s2 && s1.name == s2.name;
	}

	compareAgeGroups(ag1: AgeGroup, ag2: AgeGroup)
	{
		return ag1 && ag2 && ag1.age == ag2.age;
	}
}