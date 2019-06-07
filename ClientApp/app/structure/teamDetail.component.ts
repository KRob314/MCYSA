import { Component } from "@angular/core";
import { Repository } from "../models/repository";
import { Team } from "../models/team.model";
import { Router, ActivatedRoute } from "@angular/router";
import { DatePipe } from "@angular/common";
import { StatsHitting } from "../models/statsHitting.model";


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
        {
            this.repo.getTeam(id);
            this.repo.getTeamCombinedHittingStats(id);
        }
        else
            router.navigateByUrl("/");
    }

    get team(): Team
	{
	
        return this.repo.team;
    }

    get teamCombinedHittingStats(): StatsHitting[]
    {
        return this.repo.teamCombinedHittingStats;
    }

}