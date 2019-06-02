import { Component, OnInit } from '@angular/core';
import { Repository } from '../../models/repository';
import { StatsHitting } from '../../models/statsHitting.model';

@Component({
  selector: 'player-game-stats',
  templateUrl: './player-game-stats.component.html',
  styleUrls: ['./player-game-stats.component.css']
})
export class PlayerGameStatsComponent implements OnInit {

    constructor(private repo: Repository) { }

  ngOnInit() {
  }

    get gameStatsHitting(): StatsHitting[]
    {
        console.log('get gameStatsHitting()');
       //console.log(this.repo.gameStatsHitting);

        return this.repo.gameStatsHitting;
    }

}
