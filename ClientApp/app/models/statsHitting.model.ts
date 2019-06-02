import { Team } from "./team.model";
import { Game } from "./game.model";
import { Player } from "./player.model";


export class StatsHitting
{
    constructor(
        public gameId?: number,
        public playerId?: number,
        public teamId?: number,
        public ab?: number,
        public pa?: number,
        public singles?: number,
        public doubles?: number, 
        public triples?: number,
        public homeruns?: number,
        public hbp?: number,
        public bb?: number,
        public battingAverage?: number,
        public player?: Player,
        public team?: Team)
    { }
}