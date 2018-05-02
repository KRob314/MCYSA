import { Component } from '@angular/core';
import { Repository } from "../models/repository";

@Component({
    selector: "state-filter",
    templateUrl: "stateFilter.component.html"
})

export class StateFilterComponent
{
    //public state = "va";


	constructor(private repo: Repository)
	{
	}

    setState(state: string)
    {
        this.repo.filter.state = state;
		this.repo.getTeams();

	}

	//get states()
	//{
	//	this.states = this.repo.states;
	//}
}