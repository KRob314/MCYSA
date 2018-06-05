import { Team } from "./team.model";
import { Ballpark } from "./ballpark.model";
import { State } from "./state.model";
import { AgeGroup } from "./agegroup.model";
import { Tournament } from "./tournament.model";
import { Game } from "./game.model";
import { Player } from "./player.model";
import { Injectable } from "@angular/core";
import { Http, RequestMethod, Request, Response} from "@angular/http";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/map";
import { Filter } from "./configClasses.repository";

const teamUrl = "/api/teams";
const statesUrl = "/api/states";
const ageGroupUrl = "/api/agegroups";
const tournamentUrl = "api/tournaments";
const ballparkUrl = "api/ballparks";
const gameUrl = "api/games";
const playerUrl = "api/players";

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
	ballpark: Ballpark;
	ballparks: Ballpark[];
	game: Game;
	games: Game[];
	player: Player;
	players: Player[];

    constructor(private http: Http)
    {
        //this.team = JSON.parse(document.getElementById("data").textContent);
       // this.getTeam(2);
        //this.filter.state = "va";
        this.filter.related = true;
		this.getTeams(true);
		this.getGames(false);
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

		if (this.filter.tournamentId != null)
			url += "&tournamentId=" + this.filter.tournamentId;

        this.sendRequest(RequestMethod.Get, url).subscribe(response =>
            this.teams = response);
	}

	getPlayer(id: number)
	{
		console.log("getPlayer()");

		this.sendRequest(RequestMethod.Get, playerUrl + "/" + id).subscribe(response =>
		{
			this.player = response;
			console.log(this.player);
		});
	}

	getPlayers(teamId : number = 0, related: boolean = true)
	{
		console.log("getPlayers()");
		console.log("team selected");
		console.log(this.team);

		let url = playerUrl + "?related=" + related;

		if (teamId != 0)
			url += "&teamId=" + teamId;

		this.sendRequest(RequestMethod.Get, url).subscribe(response =>
			this.players = response);
	}

	getBallpark(id: number)
	{
		console.log("getBallpark()");

		this.sendRequest(RequestMethod.Get, ballparkUrl + "/" + id).subscribe(response =>
		{
			this.ballpark = response;
			console.log(this.ballpark);
		})
	}

	getBallparks(related = false)
	{
		console.log("getBallparks()");

		let url = ballparkUrl + "?related=" + this.filter.related;

		this.sendRequest(RequestMethod.Get, url).subscribe(response =>
			this.ballparks = response);
		
	}

	getGame(id: number)
	{
		console.log("getGame()");

		this.sendRequest(RequestMethod.Get, gameUrl + "/" + id).subscribe(response =>
		{
			this.game = response;
			console.log(this.game);
		});
	}

	getGames(related = false)
	{
		console.log("getGames()");

		let url = gameUrl + "?related=" + this.filter.related;

		this.sendRequest(RequestMethod.Get, url).subscribe(response => this.games = response);
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
                tournamentId: team.tournament.id
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

	createPlayer(player: Player)
	{
		let data =
			{
				firstName: player.firstName,
				lastName: player.lastName,
				dob: player.dob, 
				stateId: player.stateId,
				teamId: player.teamId
			};

		console.log("createPlayer()");
		console.log(data);

		this.sendRequest(RequestMethod.Post, playerUrl, data).subscribe(response =>
		{
			player.id = response;
			this.players.push(player);
		})
	}

	replacePlayer(player: Player)
	{
		let data =
			{
				id: player.id,
				firstName: player.firstName,
				lastName: player.lastName,
				dob: player.dob,
				teamId: player.teamId,
				email: player.email
			};

		console.log("replacePlayer()");
		console.log(data);
		console.log(player);

		this.sendRequest(RequestMethod.Put, playerUrl + "/" + player.id, data).subscribe(response => this.getPlayers());
	}

	deletePlayer(id: number)
	{
		this.sendRequest(RequestMethod.Delete, playerUrl + "/" + id).subscribe(response => this.getPlayers()); //TODO: get teamid
	}

	createBallpark(ballpark: Ballpark)
	{
		let data =
			{
				name: ballpark.name,
				street: ballpark.street,
				city: ballpark.city,
				stateId: ballpark.state.stateId,
				zip: ballpark.zip
			};

		console.log("createBallpark()");
		console.log(data);

		this.sendRequest(RequestMethod.Post, ballparkUrl, data).subscribe(response =>
		{
			ballpark.id = response;
			this.ballparks.push(ballpark);
		})
	}

	replaceBallpark(ballpark: Ballpark)
	{
		let data =
			{
				id: ballpark.id,
				name: ballpark.name,
				street: ballpark.street,
				city: ballpark.city,
				stateId: ballpark.stateId,
				zip: ballpark.zip
			};

		this.sendRequest(RequestMethod.Put, ballparkUrl + "/" + ballpark.id, data).subscribe(response => this.getBallparks());
	}

	deleteBallpark(id: number)
	{
		this.sendRequest(RequestMethod.Delete, ballparkUrl + "/" + id).subscribe(response => this.getBallparks());
	}

	createGame(game: Game)
	{
		let data =
			{
				homeTeamId: game.homeTeamId,
				awayTeamId: game.awayTeamId,
				homeTeamRuns: game.homeTeamRuns,
				awayTeamRuns: game.awayTeamRuns,
				gameDate: game.gameDate,
				ballparkId: game.ballparkId
			};

		console.log("createGame()");
		console.log(data);

		this.sendRequest(RequestMethod.Post, gameUrl, data).subscribe(response =>
		{
			game.id = response;
			this.games.push(game);
		})
	}

	replaceGame(game: Game)
	{
		let data =
			{
				id: game.id,
				homeTeamId: game.homeTeamId,
				awayTeamId: game.awayTeamId,
				homeTeamRuns: game.homeTeamRuns,
				awayTeamRuns: game.awayTeamRuns,
				gameDate: game.gameDate,
				ballparkId: game.ballparkId
			};

		console.log("replaceGame()");
		console.log(data);

			this.sendRequest(RequestMethod.Put, gameUrl + "/" + game.id, data).subscribe(response => this.getGames());
	}

	deleteGame(id: number)
	{
		this.sendRequest(RequestMethod.Delete, gameUrl + "/" + id).subscribe(response => this.getGames());
	}

	createTournament(tournament: Tournament)
	{
		let data =
			{
				id: tournament.id,
				startDate: tournament.startDate,
				endDate: tournament.endDate,
				isCurrent: tournament.isCurrent,
				name: tournament.name
			};

		console.log("createTournament()");
		console.log(tournament);

		this.sendRequest(RequestMethod.Post, tournamentUrl, data).subscribe(response =>
		{
			tournament.id = response;
			this.tournaments.push(tournament);
		});
	}

	replaceTournament(tournament: Tournament)
	{
		let data =
			{
				id: tournament.id,
				startDate: tournament.startDate,
				endDate: tournament.endDate,
				isCurrent: tournament.isCurrent,
				name: tournament.name
			};

		this.sendRequest(RequestMethod.Put, tournamentUrl + "/" + tournament.id, data).subscribe(response => this.getTournaments());
	}

	deleteTournament(id: number)
	{
		if (confirm("Are you sure you want to delete this?"))
		{
			this.sendRequest(RequestMethod.Delete, tournamentUrl + "/" + id).subscribe(response => this.getTournaments());
		}
	}

    //get team(): Team
    //{
    //    console.log("team data requested");
    //    return this.team;
    //}
}