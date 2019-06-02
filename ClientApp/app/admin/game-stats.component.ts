import { Component, OnInit } from '@angular/core';
import { Repository } from "../models/repository";
import { Game } from "../models/game.model";
import { Ballpark } from "../models/ballpark.model";
import { Team } from "../models/team.model";
import { Tournament } from "../models/tournament.model";
import { Player } from "../models/player.model";

@Component({
  selector: 'app-game-stats',
  templateUrl: './game-stats.component.html',
  styleUrls: ['./game-stats.component.css']
})
export class GameStatsComponent implements OnInit {

    constructor(private repo: Repository) { }

    ngOnInit()
    {
    }

    get game(): Game
    {
        return this.repo.game;
    }

    get games(): Game[]
    {
        console.log("get games");
        console.log(this.repo.games);

        return this.repo.games;
    }

    get ballparks(): Ballpark[]
    {
        return this.repo.ballparks;
    }


    get teams(): Team[]
    {
        console.log('selected team');
        console.log(this.repo.teams);
        return this.repo.teams;
    }

    get tournaments(): Tournament[]
    {       
        return this.repo.tournaments;
    }

    

    setTeam(id)
    {
        console.log('set team: ' + id);
        this.repo.filter.teamId = id;
        this.repo.getGames();
    }

    setGame(id)
    {
        console.log('set game: ' + id);
        this.repo.getGameStatsHitting(id, this.repo.filter.teamId);

    }
}
