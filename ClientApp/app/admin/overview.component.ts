import { Component } from "@angular/core";
import { Repository } from "../models/repository";
import { Team } from "../models/team.model";

@Component({
    templateUrl: "overview.component.html"
})

export class OverviewComponent
{
    constructor(private repo: Repository) { }

    get teams(): Team[]
    {
        return this.repo.teams;
    }
}