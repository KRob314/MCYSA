﻿import { Component } from "@angular/core";
import { Repository } from "../models/repository";

@Component({
    templateUrl: "admin.component.html"
})

export class AdminComponent
{
    constructor(private repo: Repository)
    {
        repo.filter.reset();
        repo.filter.related = true;
		this.repo.getTeams();
		this.repo.getStates();
		this.repo.getAgeGroups();
		this.repo.getTournaments();
		this.repo.getBallparks();
		this.repo.getGames();
		this.repo.getPlayers(0);
    }
}