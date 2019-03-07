"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//describe('AppComponent', () =>
//{
//	beforeEach(async(() =>
//	{
//		TestBed.configureTestingModule({
//			declarations: [
//				AppComponent
//			],
//		}).compileComponents();
//	}));
//	it('should create the app', async(() =>
//	{
//		const fixture = TestBed.createComponent(AppComponent);
//		const app = fixture.debugElement.componentInstance;
//		expect(app).toBeTruthy();
//	}));
//});
describe("normalizeData", function () {
    // The 'it' function of Jasmine defined an individual test. The first argument is
    // a description of the test that's appended to the module name. Because a module name
    // is typically a noun, like the name of the function being tested, the description for
    // an individual test is typically written in an action-data format.
    function normalizeData(jsonIn) {
        var data = JSON.parse(jsonIn);
        return {
            name: data.Name,
            id: data.PersonalIdentifier
        };
    }
    it("accepts golden path data", function () {
        // Invoke the unit being tested as necessary
        var json = '{"Name": "Maria", "PersonalIdentifier": 2111858}';
        var norm = normalizeData(json);
        // Check the results; "expect" and toEqual are Jasmine methods.
        expect(norm.name).toEqual("Maria");
        expect(norm.id).toEqual(2111858);
    });
});
//# sourceMappingURL=ballparkTests.spec.js.map