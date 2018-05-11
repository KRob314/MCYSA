import { Component } from "@angular/core";
import { Repository } from "../models/repository";
import { Ballpark } from "../models/ballpark.model";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
	selector: "ballpark-detail",
	templateUrl: "ballparkDetail.component.html"
})

export class BallparkDetailComponent
{
	constructor(private repo: Repository, router: Router, activeRoute: ActivatedRoute)
	{
		let id = Number.parseInt(activeRoute.snapshot.params["id"]);

		if (id)
			this.repo.getBallpark(id);
		else
			router.navigateByUrl("/");
	}

	get ballpark(): Ballpark
	{
		return this.repo.ballpark
	}
}