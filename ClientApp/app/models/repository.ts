﻿import { Team } from "./team.model";
import { State } from "./state.model";
import { AgeGroup } from "./agegroup.model";
import { Tournament } from "./tournament.model";
import { Injectable } from "@angular/core";
import { Http, RequestMethod, Request, Response} from "@angular/http";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/map";
import { Filter } from "./configClasses.repository";

const teamUrl = "/api/teams";
const statesUrl = "/api/states";
const ageGroupUrl = "/api/agegroups";
const tournamentUrl = "api/tournaments";

@Injectable()
export class Repository
{
    private filterObject = new Filter();
     team: Team;
	 teams: Team[];
	 states: State[] = [];
	 ageGroups: AgeGroup[] = [];
	 tournament: Tournament;
	 tournaments: Tournament[] = [];

    constructor(private http: Http)
    {
        //this.team = JSON.parse(document.getElementById("data").textContent);
       // this.getTeam(2);
        //this.filter.state = "va";
        this.filter.related = true;
        this.getTeams(true);
    }

    getTeam(id: number)
    {
        console.log("getTeam()");

        this.sendRequest(RequestMethod.Get, teamUrl + "/" + id)
            .subscribe(response =>
            {
                this.team = response;
                console.log(this.team);
			});
       
    }

    getTeams(related = false)
    {
        console.log("get teams()");

        let url = teamUrl + "?related=" + this.filter.related;

        if (this.filter.state)
            url += "&state=" + this.filter.state;

        if (this.filter.age)
            url += "&ageGroupId=" + this.filter.age;

        this.sendRequest(RequestMethod.Get, url).subscribe(response =>
            this.teams = response);
	}

	getStates()
	{
		console.log("get states()");

		this.sendRequest(RequestMethod.Get, statesUrl).subscribe(response => this.states = response);
	}

	getAgeGroups()
	{
		console.log("get ageGroups()");
		this.sendRequest(RequestMethod.Get, ageGroupUrl).subscribe(response => this.ageGroups = response);
	}

	getTournaments()
	{
		console.log("getTournaments()");
		this.sendRequest(RequestMethod.Get, tournamentUrl).subscribe(response => this.tournaments = response);
	}

	getTournament(id: number)
	{
		this.sendRequest(RequestMethod.Get, tournamentUrl + "/" + id).subscribe(response => this.tournament = response);
	}

    private sendRequest(verb: RequestMethod, url: string, data?: any): Observable<any>
    {
        return this.http.request(new Request({
            method: verb, url: url, body: data
        })).map(response =>
        {
            return response.headers.get("Content-Length") != "0" ? response.json() : null;
        });
    }

    get filter(): Filter
    {
        return this.filterObject;
    }

    createTeam(team: Team)
    {
        let data =
            {
                teamName: team.teamName,
                managerFirstname: team.managerFirstName,
                managerLastName: team.managerLastName,
                ageGroupId: team.ageGroupId,
                stateId: team.state.stateId,
                tournamentId: team.tournament.id
			};

		console.log("createTeam");
		console.log(data);

        this.sendRequest(RequestMethod.Post, teamUrl, data).subscribe(response =>
        {
            team.id = response;
            this.teams.push(team);
        });
    }

    replaceTeam(team: Team)
    {
        let data =
            {
                id: team.id,
                teamName: team.teamName,
                managerFirstname: team.managerFirstName,
                managerLastName: team.managerLastName,
                ageGroupId: team.ageGroup.id,
				stateId: team.state.stateId,
                tournamentId: team.tournamentId
            };

        console.log("in repo");
        console.log(data);

        this.sendRequest(RequestMethod.Put, teamUrl + "/" + team.id, data).subscribe(response => this.getTeams());
	}

	deleteTeam(id: number)
	{
		this.sendRequest(RequestMethod.Delete, teamUrl + "/" + id).subscribe(response =>
			this.getTeams());
	}

    //get team(): Team
    //{
    //    console.log("team data requested");
    //    return this.team;
    //}
}