import { Component } from "@angular/core";
import { Repository } from "../models/repository";
import { Ballpark } from "../models/ballpark.model";

@Component({
	templateUrl: "ballparkAdmin.component.html"
})

export class BallparkAdminComponent
{
	constructor(private repo: Repository) { }

	tableMode: boolean = true;

	get ballpark(): Ballpark
	{
		return this.repo.ballpark;
	}

	selectBallpark(id: number)
	{
		this.repo.getBallpark(id);
	}

	saveBallpark()
	{
		console.log("saveBallpark()");
		console.log(this.repo.ballpark);

		if (this.repo.ballpark.id == null)
			this.repo.createBallpark(this.repo.ballpark);
		else
			this.repo.replaceBallpark(this.repo.ballpark);

		this.clearBallpark();
		this.tableMode = true;
	}

	clearBallpark()
	{
		this.repo.ballpark = new Ballpark();
		this.tableMode = true;
	}

	get ballparks(): Ballpark[]
	{
		return this.repo.ballparks;
	}
}