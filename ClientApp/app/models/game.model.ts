import { Team } from "./team.model";
import { Ballpark } from "./ballpark.model";

export class Game
{
	constructor(
		public id?: number,
		public tournamentId? : number,
		public homeTeamId?: number,
		public awayTeamId?: number,
		public ballparkId?: number,
		public homeTeamRuns?: number,
		public awayTeamRuns?: number,
		public gameDate?: Date,
		public homeTeam?: Team,
		public awayTeam?: Team,
		public ballpark?: Ballpark) { }
}