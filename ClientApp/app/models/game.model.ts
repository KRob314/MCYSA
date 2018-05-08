import { Team } from "./team.model";
import { Ballpark } from "./ballpark.model";

export class Game
{
	constructor(
		public id?: number,
		public homeTeamId?: number,
		public awayTeamId?: number,
		public ballparkId?: number,
		public homeTeamRuns?: number,
		public awayTeamRuns?: number,
		public gameDate?: string,
		public homeTeam?: Team,
		public awayTeam?: Team,
		public ballpark?: Ballpark) { }
}