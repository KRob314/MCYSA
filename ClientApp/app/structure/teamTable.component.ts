import { Component } from '@angular/core';
import { Repository } from "../models/repository";import { Team } from "../models/team.model";@Component({    selector: "team-table",
    templateUrl: "./teamTable.component.html"
})

export class TeamTableComponent
{
    constructor(private repo: Repository)
    {

    }

    get teams(): Team[]
    {
        return this.repo.teams;
    }
}