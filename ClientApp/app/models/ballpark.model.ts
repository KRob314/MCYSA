import { State } from "./state.model";
import { Tournament } from "./tournament.model";

export class Ballpark
{
	constructor(
		public id?: number,
		public name?: string,
		public street?: string,
		public city?: string,
		public stateId?: string,
		public state?: State,
	    public zip?: string) { }
}