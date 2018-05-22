import { AgeGroup } from "./agegroup.model";
import { State } from "./state.model";
import { Team } from "./team.model";


export class Player
{
	constructor(
		public id?: number,
		public teamId?: number,
		public firstName?: string,
		public lastName?: string,
		public stateId?: string,
		public state?: State,
		public team?: Team)
	{ }
}