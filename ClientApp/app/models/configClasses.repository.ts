export class Filter
{
    state?: string;
	age?: number;
    tournamentId?: number;
    teamId?: number;
    search?: string;
    related: boolean = false;


    reset()
    {
        this.state = this.search = null;
		this.age = null;
		this.tournamentId = null;
        this.related = false;
        this.teamId = null;
    }
}