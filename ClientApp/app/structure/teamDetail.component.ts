import { Component } from "@angular/core";
import { Repository } from "../models/repository";
import { Team } from "../models/team.model";
import { Router, ActivatedRoute } from "@angular/router";
import { DatePipe } from "@angular/common";


@Component({
    selector: "team-detail",
    templateUrl: "teamDetail.component.html"
})

export class TeamDetailComponent
{
    constructor(private repo: Repository, router: Router, activeRoute: ActivatedRoute)
    {
        let id = Number.parseInt(activeRoute.snapshot.params["id"]);

        if (id)
            this.repo.getTeam(id);
        else
            router.navigateByUrl("/");
    }

    get team(): Team
	{
	
        return this.repo.team;
    }
}