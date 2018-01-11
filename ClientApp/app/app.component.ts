import { Component } from '@angular/core';
import { Repository } from "./models/repository";
import { Team } from "./models/team.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent
{

    //title = 'app works!';

    constructor(private repo: Repository)
    {
        console.log("AppComponent constructor");
    }

    get team(): Team
    {
        return this.repo.team;
    }

    get teams(): Team[]
    {
        return this.repo.teams;
    }

    createTeam()
    {
        this.repo.createTeam(new Team(0, 1, 2, "MD", "St. Louis Cardinals", "Kyle", "Markley"));
    }

    replaceTeam()
    {
        let t = this.repo.teams[0];
        t.teamname = "Modified Team Name";

        console.log("in app.component");
        console.log(t);
        this.repo.replaceTeam(t);
    }
}
