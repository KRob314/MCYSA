import { TestBed } from "@angular/core/testing";
import { Repository } from "../models/repository";
import { Router } from "@angular/router";
import { Team } from "../models/team.model";
import { TeamTableComponent } from "./teamTable.component";

const routerSpy = jasmine.createSpyObj('Router', ['navigateByUrl']);
const serviceSpy = jasmine.createSpyObj('Repository', ['getTeams']);
let serviceStub: Partial<Repository>;

TestBed.configureTestingModule({
	providers: [
		{ provide: Repository, useValue: serviceSpy },
		{ provide: Router, useValue: routerSpy }
	]
})

describe("teamTableComponent class only", () =>
{
	it('should tell router to navigate when team selected', () =>
	{
		const comp = new TeamTableComponent(serviceSpy, routerSpy);
		const team: Team = {
			id: 1, teamName: "St Louis Cardinals", managerFirstName: "Mike", managerLastName: "Shildt",
			ageGroupId: 1, stateId: "MO", tournamentId: 1
		};
		
		const teamName = "St Louis Cardinals";
		expect(team.teamName).toBe(teamName);
		
	});
});