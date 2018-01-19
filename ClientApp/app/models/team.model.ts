import { AgeGroup } from "./agegroup.model";
import { State } from "./state.model";
import {Tournament} from "./tournament.model";

export class Team
{
    constructor(
        public id?: number,
        public tournamentId?: number, 
        public ageGroupId?: number, 
        public stateId?: string,
        public teamName?: string,
        public managerFirstName?: string, 
        public managerLastName?: string,
        public state?: State,
        public agegroup?: AgeGroup,
		public tournament?: Tournament) { }
}