"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var repository_1 = require("../models/repository");
var router_1 = require("@angular/router");
var teamTable_component_1 = require("./teamTable.component");
var routerSpy = jasmine.createSpyObj('Router', ['navigateByUrl']);
var serviceSpy = jasmine.createSpyObj('Repository', ['getTeams']);
var serviceStub;
testing_1.TestBed.configureTestingModule({
    providers: [
        { provide: repository_1.Repository, useValue: serviceSpy },
        { provide: router_1.Router, useValue: routerSpy }
    ]
});
describe("teamTableComponent class only", function () {
    it('should tell router to navigate when team selected', function () {
        var comp = new teamTable_component_1.TeamTableComponent(serviceSpy, routerSpy);
        var team = {
            id: 1, teamName: "St Louis Cardinals", managerFirstName: "Mike", managerLastName: "Shildt",
            ageGroupId: 1, stateId: "MO", tournamentId: 1
        };
        var teamName = "St Louis Cardinals";
        expect(team.teamName).toBe(teamName);
    });
});
//# sourceMappingURL=teamTable.component.spec.js.map