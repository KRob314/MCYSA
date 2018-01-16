import { Component } from '@angular/core';
import { Repository } from "../models/repository";
import { Team } from "../models/team.model";
import { Router } from "@angular/router";

@Component({
    selector: "team-table",
    templateUrl: "./teamTable.component.html"
})

export class TeamTableComponent
{
    constructor(private repo: Repository, private router: Router)
    {

    }

    get teams(): Team[]
    {
        return this.repo.teams;
    }

    selectTeam(id: number)
    {
       
        this.repo.getTeam(id);
        this.router.navigateByUrl("/detail");
    }
}