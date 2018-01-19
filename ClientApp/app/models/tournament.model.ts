
export class Tournament
  {
    constructor(
		public id?: number, 
		public name?: string,
		public startDate?: Date, 
		public endDate?: Date,
		public isCurrent?: boolean
		) {}
  }