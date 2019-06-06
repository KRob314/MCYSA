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

    tableMode: boolean = true;
    isEdit: boolean = false;

  ngOnInit() {
  }

    get gameStatsHitting(): StatsHitting[]
    {
       // console.log('get gameStatsHitting()');
       //console.log(this.repo.gameStatsHitting);

        return this.repo.gameStatsHitting;
    }

    get playerHittingStats(): StatsHitting
    {
        return this.repo.playerHittingStats;
    }

    selectHittingStats(playerId: number, gameId: number)
    {
       
        console.log('selectHittingStats()');
        this.repo.getHittingStatsByGame(playerId, gameId);

        console.log("selectHittingStats() 2 ");
        console.log(this.repo.playerHittingStats);

        if (this.repo.playerHittingStats.playerId != 0)
        {
            this.isEdit = true;
        }
        
    }

    clearHittingStats()
    {
        this.repo.playerHittingStats = new StatsHitting();
        this.tableMode = true;
        this.isEdit = false;
    }

    saveHittingStats()
    {
        console.log('saveHittingStats()');
        console.log(this.repo.playerHittingStats);

        if (this.repo.playerHittingStats.playerId != null)
            this.repo.updateHittingStats(this.repo.playerHittingStats);

       
        this.clearHittingStats();
    }
}
