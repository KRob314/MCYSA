import { Component, OnInit } from '@angular/core';
import { Repository } from "../models/repository";
import { State } from '../models/state.model';

@Component({
    selector: "state-filter",
    templateUrl: "stateFilter.component.html"
})

export class StateFilterComponent implements OnInit
{

    ngOnInit(): void {
		this.repo.getStates();
	}

	constructor(private repo: Repository)
	{
	}

    setState(state: string)
    {
        this.repo.filter.state = state;
		this.repo.getTeams();

	}

	compareStates(s1: State, s2: State)
	{
		return s1 && s2 && s1.stateId == s2.stateId;
	}

	//get states()
	//{
	//	this.states = this.repo.states;
	//}
}