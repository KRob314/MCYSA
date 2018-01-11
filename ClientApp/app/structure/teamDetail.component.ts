import { Component } from "@angular/core";
import { Repository } from "../models/repository";
import { Team } from "../models/team.model";

@Component({
    selector: "team-detail",
    templateUrl: "teamDetail.component.html"
})

export class TeamDetailComponent
{
    constructor(private repo: Repository) { }

    get team(): Team
    {
        return this.repo.team;
    }
}