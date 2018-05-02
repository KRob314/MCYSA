import { Component } from "@angular/core";
import { Repository } from "../models/repository";
import { State } from "../models/state.model";
import { Ballpark } from "../models/ballpark.model";


@Component({
	selector: "admin-ballpark-editor",
	templateUrl: "ballparkEditor.component.html"
})

export class BallparkEditorComponent
{
	constructor(private repo: Repository) { }

	get ballpark(): Ballpark
	{
		return this.repo.ballpark;
	}

	get states(): State[]
	{
		return this.repo.states;
	}

	compareStates(s1: State, s2: State)
	{
		//console.log("compareStates()");
		//console.log(s1.name);
		//console.log(s2.name);
		return s1 && s2 && s1.name == s2.name;
	}

}