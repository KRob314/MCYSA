import { Component, OnInit } from '@angular/core';
import { Repository } from '../../models/repository';
import { StatsHitting } from '../../models/statsHitting.model';

@Component({
  selector: 'player-game-stats-editor',
  templateUrl: './player-game-stats-editor.component.html',
  styleUrls: ['./player-game-stats-editor.component.css']
})
export class PlayerGameStatsEditorComponent implements OnInit {

    constructor(private repo: Repository) { }

  ngOnInit() {
  }

    get playerHittingStats(): StatsHitting
    {
        return this.repo.playerHittingStats;
    }

}
