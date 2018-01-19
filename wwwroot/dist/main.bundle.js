webpackJsonp([1],{

/***/ 103:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(34);
module.exports = __webpack_require__(116);


/***/ }),

/***/ 116:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_app_module__ = __webpack_require__(131);


var bootApplication = function () {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_app_module__["a" /* AppModule */]);
};
if (true) {
    module["hot"].accept();
    module["hot"].dispose(function () {
        var oldRootElem = document.querySelector("app-root");
        var newRootElem = document.createElement("app-root");
        oldRootElem.parentNode.insertBefore(newRootElem, oldRootElem);
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().destroy();
    });
}
if (document.readyState === "complete") {
    bootApplication();
}
else {
    document.addEventListener("DOMContentLoaded", bootApplication);
}
//# sourceMappingURL=boot.js.map

/***/ }),

/***/ 131:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__models_model_module__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__structure_teamTable_component__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__structure_stateFilter_component__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__structure_ageFilter_component__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__structure_teamDetail_component__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_routing__ = __webpack_require__(177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__admin_admin_module__ = __webpack_require__(181);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */], __WEBPACK_IMPORTED_MODULE_6__structure_teamTable_component__["a" /* TeamTableComponent */], __WEBPACK_IMPORTED_MODULE_7__structure_stateFilter_component__["a" /* StateFilterComponent */], __WEBPACK_IMPORTED_MODULE_8__structure_ageFilter_component__["a" /* AgeFilterComponent */], __WEBPACK_IMPORTED_MODULE_9__structure_teamDetail_component__["a" /* TeamDetailComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_5__models_model_module__["a" /* ModelModule */],
            __WEBPACK_IMPORTED_MODULE_10__app_routing__["a" /* RoutingConfig */],
            __WEBPACK_IMPORTED_MODULE_11__admin_admin_module__["a" /* AdminModule */]
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 135:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_repository__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_team_model__ = __webpack_require__(85);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = (function () {
    //title = 'app works!';
    function AppComponent(repo) {
        this.repo = repo;
        console.log("AppComponent constructor");
    }
    Object.defineProperty(AppComponent.prototype, "team", {
        get: function () {
            return this.repo.team;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppComponent.prototype, "teams", {
        get: function () {
            return this.repo.teams;
        },
        enumerable: true,
        configurable: true
    });
    AppComponent.prototype.createTeam = function () {
        this.repo.createTeam(new __WEBPACK_IMPORTED_MODULE_2__models_team_model__["a" /* Team */](0, 1, 2, "MD", "St. Louis Cardinals", "Kyle", "Markley"));
    };
    AppComponent.prototype.replaceTeam = function () {
        var t = this.repo.teams[0];
        t.teamName = "Modified Team Name";
        console.log("in app.component");
        console.log(t);
        this.repo.replaceTeam(t);
    };
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(138),
        styles: [__webpack_require__(139)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__models_repository__["a" /* Repository */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__models_repository__["a" /* Repository */]) === "function" && _a || Object])
], AppComponent);

var _a;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 137:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Filter; });
var Filter = (function () {
    function Filter() {
        this.related = false;
    }
    Filter.prototype.reset = function () {
        this.state = this.search = null;
        this.age = null;
        this.related = false;
    };
    return Filter;
}());

//# sourceMappingURL=configClasses.repository.js.map

/***/ }),

/***/ 138:
/***/ (function(module, exports) {

module.exports = "<article>\r\n    <div class=\"row\">\r\n        <div class=\"col-md-2\">\r\n            <button class=\"btn btn-block btn-outline-info\" routerLink=\"/\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact: true}\"> Home</button>\r\n            <button class=\"btn btn-block btn-outline-info\" routerLink=\"/admin\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact: true}\"> Admin</button>\r\n        </div>\r\n        <div class=\"col-md-10\">\r\n            <router-outlet></router-outlet>\r\n        </div>\r\n    </div>\r\n</article>"

/***/ }),

/***/ 139:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(46)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 140:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModelModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__repository__ = __webpack_require__(7);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var ModelModule = (function () {
    function ModelModule() {
    }
    return ModelModule;
}());
ModelModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        providers: [__WEBPACK_IMPORTED_MODULE_1__repository__["a" /* Repository */]]
    })
], ModelModule);

//# sourceMappingURL=model.module.js.map

/***/ }),

/***/ 171:
/***/ (function(module, exports) {

module.exports = "\r\n<state-filter></state-filter>\r\n<age-filter></age-filter>\r\n\r\n<table class=\"table table-striped marginT-15\">\r\n    <tr>\r\n        <th>Team Name</th>\r\n        <th>Age Group</th>\r\n        <th>Manager First Name</th>\r\n        <th>Manager Last Name</th>\r\n        <th>State</th>\r\n        <th></th>\r\n    </tr>\r\n    <tr *ngFor=\"let team of teams\">\r\n        <td>{{team?.teamName || 'Loading Data...'}}</td>\r\n        <td>{{team?.ageGroup.name || 'Loading data ...'}}</td>\r\n        <td>{{team?.managerFirstName}}</td>\r\n        <td>{{team?.managerLastName}}</td>\r\n        <td>{{team?.state.name}}</td>\r\n        <td> <button class=\"btn btn-default btn-sm\" [routerLink]=\"['/detail', team.id]\">Details</button></td>\r\n    </tr>\r\n</table>\r\n\r\n<!-- (click)=\"selectTeam(team.id)\" data-toggle=\"modal\" data-target=\"#myModal\"-->"

/***/ }),

/***/ 172:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StateFilterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_repository__ = __webpack_require__(7);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var StateFilterComponent = (function () {
    //public state = "va";
    function StateFilterComponent(repo) {
        this.repo = repo;
    }
    StateFilterComponent.prototype.setState = function (state) {
        this.repo.filter.state = state;
        this.repo.getTeams();
    };
    return StateFilterComponent;
}());
StateFilterComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: "state-filter",
        template: __webpack_require__(173)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__models_repository__["a" /* Repository */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__models_repository__["a" /* Repository */]) === "function" && _a || Object])
], StateFilterComponent);

var _a;
//# sourceMappingURL=stateFilter.component.js.map

/***/ }),

/***/ 173:
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"btn-group\" role=\"group\" aria-label=\"...\" >\r\n    <button class=\"btn btn-info\" (click)=\"setState('va')\">VA</button>\r\n    <button class=\"btn btn-info\" (click)=\"setState('md')\">MD</button>\r\n    <button class=\"btn btn-info\" (click)=\"setState(null)\">All</button>\r\n</div>"

/***/ }),

/***/ 174:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AgeFilterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_repository__ = __webpack_require__(7);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AgeFilterComponent = (function () {
    function AgeFilterComponent(repo) {
        this.repo = repo;
    }
    AgeFilterComponent.prototype.setAge = function (age) {
        this.repo.filter.age = age;
        this.repo.getTeams();
    };
    return AgeFilterComponent;
}());
AgeFilterComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: "age-filter",
        template: __webpack_require__(175)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__models_repository__["a" /* Repository */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__models_repository__["a" /* Repository */]) === "function" && _a || Object])
], AgeFilterComponent);

var _a;
//# sourceMappingURL=ageFilter.component.js.map

/***/ }),

/***/ 175:
/***/ (function(module, exports) {

module.exports = "\r\n\r\n<div class=\"btn-group pull-right\" role=\"group\" aria-label=\"...\" >\r\n    <button class=\"btn btn-info\" (click)=\"setAge(1)\">11u</button>\r\n    <button class=\"btn btn-info\" (click)=\"setAge(2)\">12u</button>\r\n    <button class=\"btn btn-info\" (click)=\"setAge(null)\">All</button>\r\n</div>"

/***/ }),

/***/ 176:
/***/ (function(module, exports) {

module.exports = "<!--<div class=\"modal fade\" id=\"myModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\">\r\n    <div class=\"modal-dialog\" role=\"document\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\" routerLink=\"/table\"><span aria-hidden=\"true\">&times;</span></button>\r\n                <h4 class=\"modal-title\" id=\"myModalLabel\">{{team?.teamName}} Details</h4>\r\n            </div>\r\n            <div class=\"modal-body\">-->\r\n<table class=\"table table-striped table-condensed table-responsive marginT-15\">\r\n    <tr><th>Team Name</th> <td>{{team?.teamName}}</td></tr>\r\n    <tr><th>Age Group</th> <td>{{team?.ageGroup.name }}</td></tr>\r\n    <!--<tr><th>Tournament</th></tr>-->\r\n    <tr><th>Manager First Name</th>  <td>{{team?.managerFirstName}} </td></tr>\r\n    <tr><th>Manager Last Name</th> <td>{{team?.managerLastName}}</td> </tr>\r\n    <tr><th>Email</th>  <td>{{team?.email}} </td></tr>\r\n    <tr><th>Phone </th> <td>{{team?.phone}} </td></tr>\r\n    <tr><th>Street </th> <td>{{team?.street}} </td></tr>\r\n    <tr><th>City </th><td>{{team?.city}} </td></tr>\r\n    <tr><th>State</th> <td>{{team?.state.name}}</td>  </tr>\r\n    <tr><th>Zip</th>  <td>{{team?.zip}} </td></tr>\r\n    <tr><th>POC First Name</th><td>{{team?.pocFirstName}} </td></tr>\r\n    <tr><th>POC Last Name </th> <td>{{team?.pocLastName}} </td></tr>\r\n    <tr><th>POC Email </th><td>{{team?.pocEmail}} </td></tr>\r\n    <tr><th>POC Phone </th><td>{{team?.pocPhone}} </td></tr>\r\n</table>\r\n<div class=\"text-center\">\r\n    <button class=\"btn btn-primary\" routerLink=\"/table\">Back</button>\r\n    <button class=\"btn btn-info\" routerLink=\"/admin\">Admin</button>\r\n</div>\r\n<!--</div>\r\n            <div class=\"modal-footer\">\r\n                <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\" routerLink=\"/table\">Close</button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>-->\r\n"

/***/ }),

/***/ 177:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RoutingConfig; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__structure_teamTable_component__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__structure_teamDetail_component__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__admin_admin_component__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__admin_overview_component__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__admin_teamAdmin_component__ = __webpack_require__(90);






var routes = [
    {
        path: "admin", component: __WEBPACK_IMPORTED_MODULE_3__admin_admin_component__["a" /* AdminComponent */],
        children: [
            { path: "teams", component: __WEBPACK_IMPORTED_MODULE_5__admin_teamAdmin_component__["a" /* TeamAdminComponent */] },
            { path: "overview", component: __WEBPACK_IMPORTED_MODULE_4__admin_overview_component__["a" /* OverviewComponent */] }
        ]
    },
    { path: "table", component: __WEBPACK_IMPORTED_MODULE_1__structure_teamTable_component__["a" /* TeamTableComponent */] },
    { path: "detail/:id", component: __WEBPACK_IMPORTED_MODULE_2__structure_teamDetail_component__["a" /* TeamDetailComponent */] },
    { path: "detail", component: __WEBPACK_IMPORTED_MODULE_2__structure_teamDetail_component__["a" /* TeamDetailComponent */] },
    { path: "", component: __WEBPACK_IMPORTED_MODULE_1__structure_teamTable_component__["a" /* TeamTableComponent */] }
];
var RoutingConfig = __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* RouterModule */].forRoot(routes);
//# sourceMappingURL=app.routing.js.map

/***/ }),

/***/ 178:
/***/ (function(module, exports) {

module.exports = "\r\n\r\n<div class=\"row\">\r\n    <div class=\"col-3\">\r\n        <button class=\"btn btn-block btn-outline-info\" routerLink=\"/admin\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact: true}\"> Overview</button>\r\n        <button class=\"btn btn-block btn-outline-info\" routerLink=\"/admin/teams\" routerLinkActive=\"active\"> Teams </button>\r\n    </div>\r\n    <div class=\"col p-2\">\r\n        <router-outlet></router-outlet>\r\n    </div>\r\n</div>"

/***/ }),

/***/ 179:
/***/ (function(module, exports) {

module.exports = "<table class=\"table m-1\">\r\n    <tr>\r\n        <td>There are {{teams?.length || 0}} Teams</td>\r\n        <td>\r\n            <button class=\"btn btn-sm btn-info btn-block\" routerLink=\"/admin/teams\"> Manage Teams</button>\r\n        </td>\r\n    </tr>\r\n    <tr>\r\n        <td>There are  orders</td>\r\n        <td>\r\n            <button class=\"btn btn-sm btn-info btn-block\"\r\n                    routerLink=\"/admin/orders\">\r\n                Manage Orders\r\n            </button>\r\n        </td>\r\n    </tr>\r\n</table>"

/***/ }),

/***/ 180:
/***/ (function(module, exports) {

module.exports = "\r\n<h4> Team Admin Placeholder</h4>\r\n\r\n<table *ngIf=\"tableMode; else create\" class=\"table table-sm table-striped\">\r\n    <tr>\r\n        <th>ID</th>\r\n        <th>Tournament Id</th>\r\n        <th>Name</th>\r\n        <th>Tournament</th>\r\n        <th>Manager First Name</th>\r\n        <th>Manager Last Name</th>\r\n        <th>State</th>\r\n        <th>Age Group</th>\r\n        <th></th>\r\n    </tr>\r\n    <tr *ngFor=\"let t of teams\">\r\n        <ng-template [ngIf]=\"team?.id != t.id\" [ngIfElse]=\"edit\">\r\n            <td>{{t.id}}</td>\r\n            <td>{{t.tournamentId}}</td>\r\n            <td>{{t.teamName}}</td>\r\n            <td>{{t.tournament?.name || '(None)'}}</td>\r\n            <td>{{t.managerFirstName}}</td>\r\n            <td>{{t.managerLastName}}</td>\r\n            <td>{{t.state.name}}</td>\r\n            <td>{{t.agegroup}}</td>\r\n            <td>\r\n                <button class=\"btn btn-sm btn-primary\" (click)=\"selectTeam(t.id)\"> Edit</button>\r\n                <button class=\"btn btn-sm btn-danger\" (click)=\"deleteTeam(t.id)\"> Delete </button>\r\n            </td>\r\n        </ng-template>\r\n    </tr>\r\n    <tfoot>\r\n        <tr>\r\n            <td colspan=\"6\" class=\"text-center\">\r\n                <button class=\"btn btn-primary\" (click)=\"clearTeam(); tableMode = false\"> Create </button>\r\n            </td>\r\n        </tr>\r\n    </tfoot>\r\n</table>\r\n\r\n<ng-template #edit>\r\n    <td colspan=\"6\">\r\n        <admin-team-editor></admin-team-editor>\r\n        <div class=\"text-center\">\r\n            <button class=\"btn btn-sm btn-primary\" (click)=\"saveTeam()\">  Save</button>\r\n            <button class=\"btn btn-sm btn-info\" (click)=\"clearTeam()\"> Cancel</button>\r\n        </div>\r\n    </td>\r\n</ng-template>\r\n<ng-template #create>\r\n    <admin-team-editor></admin-team-editor>\r\n    <button class=\"btn btn-primary\" (click)=\"saveTeam()\">  Save </button>\r\n    <button class=\"btn btn-info\" (click)=\"clearTeam()\"> Cancel</button>\r\n</ng-template>"

/***/ }),

/***/ 181:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__admin_component__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__overview_component__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__teamAdmin_component__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__teamEditor_component__ = __webpack_require__(182);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var AdminModule = (function () {
    function AdminModule() {
    }
    return AdminModule;
}());
AdminModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* RouterModule */], __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */]],
        declarations: [__WEBPACK_IMPORTED_MODULE_4__admin_component__["a" /* AdminComponent */], __WEBPACK_IMPORTED_MODULE_5__overview_component__["a" /* OverviewComponent */], __WEBPACK_IMPORTED_MODULE_6__teamAdmin_component__["a" /* TeamAdminComponent */], __WEBPACK_IMPORTED_MODULE_7__teamEditor_component__["a" /* TeamEditorComponent */]]
    })
], AdminModule);

//# sourceMappingURL=admin.module.js.map

/***/ }),

/***/ 182:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TeamEditorComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_repository__ = __webpack_require__(7);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TeamEditorComponent = (function () {
    function TeamEditorComponent(repo) {
        this.repo = repo;
    }
    Object.defineProperty(TeamEditorComponent.prototype, "team", {
        get: function () {
            return this.repo.team;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TeamEditorComponent.prototype, "states", {
        get: function () {
            return this.repo.states;
        },
        enumerable: true,
        configurable: true
    });
    TeamEditorComponent.prototype.compareTournaments = function (t1, t2) {
        return t1 && t2 && t1.name == t2.name;
    };
    TeamEditorComponent.prototype.compareStates = function (s1, s2) {
        return s1 && s2 && s1.name == s2.name;
    };
    return TeamEditorComponent;
}());
TeamEditorComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: "admin-team-editor",
        template: __webpack_require__(183)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__models_repository__["a" /* Repository */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__models_repository__["a" /* Repository */]) === "function" && _a || Object])
], TeamEditorComponent);

var _a;
//# sourceMappingURL=teamEditor.component.js.map

/***/ }),

/***/ 183:
/***/ (function(module, exports) {

module.exports = "<div class=\"form-group\">\r\n    <label>Id</label>\r\n    <input class=\"form-control\" [(ngModel)]=\"team.id\" />\r\n</div>\r\n<div class=\"form-group\">\r\n    <label>Tournament Id</label>\r\n    <input class=\"form-control\" [(ngModel)]=\"team.tournamentId\" />\r\n</div>\r\n<div class=\"form-group\">\r\n    <label>Tournaments</label>\r\n    <select class=\"form-control\" [(ngModel)]=\"team.tournament\" [compareWith]=\"compareTournaments\">\r\n        <option *ngFor=\"let t of tournaments\" [ngValue]=\"t\">{{t.id}}</option>\r\n    </select>\r\n</div>\r\n<div class=\"form-group\">\r\n    <label>Team Name</label>\r\n    <textarea class=\"form-control\" [(ngModel)]=\"team.teamName\"></textarea>\r\n</div>\r\n<div class=\"form-group\">\r\n    <label>Manager First Name</label>\r\n    <input class=\"form-control\" [(ngModel)]=\"team.managerFirstName\" />\r\n</div>\r\n<div class=\"form-group\">\r\n    <label>Manager Last Name</label>\r\n    <input class=\"form-control\" [(ngModel)]=\"team.managerLastName\" />\r\n</div>\r\n<!--<div class=\"form-group\">\r\n    <label>State</label>\r\n    <input class=\"form-control\" [(ngModel)]=\"team.state.name\" />\r\n</div>-->\r\n<div class=\"form-group\">\r\n    <label>State</label>\r\n    <select class=\"form-control\" [(ngModel)]=\"team.state\" [compareWith]=\"compareStates\">\r\n        <option *ngFor=\"let s of states\" [ngValue]=\"s.stateId\">{{s.name}}</option>\r\n    </select>\r\n</div>\r\n<div class=\"form-group\">\r\n    <label>Age Group</label>\r\n    <input class=\"form-control\" [(ngModel)]=\"team.agegroup\" />\r\n</div>"

/***/ }),

/***/ 7:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Repository; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__configClasses_repository__ = __webpack_require__(137);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var teamUrl = "/api/teams";
var statesUrl = "/api/states";
var Repository = (function () {
    function Repository(http) {
        this.http = http;
        this.filterObject = new __WEBPACK_IMPORTED_MODULE_3__configClasses_repository__["a" /* Filter */]();
        this.states = [];
        //this.team = JSON.parse(document.getElementById("data").textContent);
        // this.getTeam(2);
        //this.filter.state = "va";
        this.filter.related = true;
        this.getTeams(true);
    }
    Repository.prototype.getTeam = function (id) {
        var _this = this;
        console.log("getTeam()");
        this.sendRequest(__WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestMethod */].Get, teamUrl + "/" + id)
            .subscribe(function (response) {
            _this.team = response;
            console.log(_this.team);
        });
    };
    Repository.prototype.getTeams = function (related) {
        var _this = this;
        if (related === void 0) { related = false; }
        console.log("get teams()");
        var url = teamUrl + "?related=" + this.filter.related;
        if (this.filter.state)
            url += "&state=" + this.filter.state;
        if (this.filter.age)
            url += "&ageGroupId=" + this.filter.age;
        this.sendRequest(__WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestMethod */].Get, url).subscribe(function (response) {
            return _this.teams = response;
        });
    };
    Repository.prototype.getStates = function () {
        var _this = this;
        console.log("get states()");
        this.sendRequest(__WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestMethod */].Get, statesUrl).subscribe(function (response) { return _this.states = response; });
    };
    Repository.prototype.sendRequest = function (verb, url, data) {
        return this.http.request(new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Request */]({
            method: verb, url: url, body: data
        })).map(function (response) {
            return response.headers.get("Content-Length") != "0" ? response.json() : null;
        });
    };
    Object.defineProperty(Repository.prototype, "filter", {
        get: function () {
            return this.filterObject;
        },
        enumerable: true,
        configurable: true
    });
    Repository.prototype.createTeam = function (team) {
        var _this = this;
        var data = {
            teamName: team.teamName,
            managerFirstname: team.managerFirstName,
            managerLastName: team.managerLastName,
            ageGroupId: team.ageGroupId,
            stateId: team.stateId,
            tournamentId: team.tournamentId
        };
        console.log("createTeam");
        console.log(data);
        this.sendRequest(__WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestMethod */].Post, teamUrl, data).subscribe(function (response) {
            team.id = response;
            _this.teams.push(team);
        });
    };
    Repository.prototype.replaceTeam = function (team) {
        var _this = this;
        var data = {
            id: team.id,
            teamName: team.teamName,
            managerFirstname: team.managerFirstName,
            managerLastName: team.managerLastName,
            ageGroupId: team.ageGroupId,
            stateId: team.stateId,
            tournamentId: team.tournamentId
        };
        console.log("in repo");
        console.log(data);
        this.sendRequest(__WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestMethod */].Put, teamUrl + "/" + team.id, data).subscribe(function (response) { return _this.getTeams(); });
    };
    return Repository;
}());
Repository = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
], Repository);

var _a;
//# sourceMappingURL=repository.js.map

/***/ }),

/***/ 80:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 80;

/***/ }),

/***/ 85:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Team; });
var Team = (function () {
    function Team(id, tournamentId, ageGroupId, stateId, teamName, managerFirstName, managerLastName, state, agegroup, tournament) {
        this.id = id;
        this.tournamentId = tournamentId;
        this.ageGroupId = ageGroupId;
        this.stateId = stateId;
        this.teamName = teamName;
        this.managerFirstName = managerFirstName;
        this.managerLastName = managerLastName;
        this.state = state;
        this.agegroup = agegroup;
        this.tournament = tournament;
    }
    return Team;
}());

//# sourceMappingURL=team.model.js.map

/***/ }),

/***/ 86:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TeamTableComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_repository__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(28);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TeamTableComponent = (function () {
    function TeamTableComponent(repo, router) {
        this.repo = repo;
        this.router = router;
    }
    Object.defineProperty(TeamTableComponent.prototype, "teams", {
        get: function () {
            return this.repo.teams;
        },
        enumerable: true,
        configurable: true
    });
    TeamTableComponent.prototype.selectTeam = function (id) {
        this.repo.getTeam(id);
        this.router.navigateByUrl("/detail");
    };
    return TeamTableComponent;
}());
TeamTableComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: "team-table",
        template: __webpack_require__(171)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__models_repository__["a" /* Repository */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__models_repository__["a" /* Repository */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object])
], TeamTableComponent);

var _a, _b;
//# sourceMappingURL=teamTable.component.js.map

/***/ }),

/***/ 87:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TeamDetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_repository__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(28);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TeamDetailComponent = (function () {
    function TeamDetailComponent(repo, router, activeRoute) {
        this.repo = repo;
        var id = Number.parseInt(activeRoute.snapshot.params["id"]);
        if (id)
            this.repo.getTeam(id);
        else
            router.navigateByUrl("/");
    }
    Object.defineProperty(TeamDetailComponent.prototype, "team", {
        get: function () {
            return this.repo.team;
        },
        enumerable: true,
        configurable: true
    });
    return TeamDetailComponent;
}());
TeamDetailComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: "team-detail",
        template: __webpack_require__(176)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__models_repository__["a" /* Repository */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__models_repository__["a" /* Repository */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object])
], TeamDetailComponent);

var _a, _b, _c;
//# sourceMappingURL=teamDetail.component.js.map

/***/ }),

/***/ 88:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_repository__ = __webpack_require__(7);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AdminComponent = (function () {
    function AdminComponent(repo) {
        this.repo = repo;
        repo.filter.reset();
        repo.filter.related = true;
        this.repo.getTeams();
        this.repo.getStates();
    }
    return AdminComponent;
}());
AdminComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        template: __webpack_require__(178)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__models_repository__["a" /* Repository */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__models_repository__["a" /* Repository */]) === "function" && _a || Object])
], AdminComponent);

var _a;
//# sourceMappingURL=admin.component.js.map

/***/ }),

/***/ 89:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OverviewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_repository__ = __webpack_require__(7);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var OverviewComponent = (function () {
    function OverviewComponent(repo) {
        this.repo = repo;
    }
    Object.defineProperty(OverviewComponent.prototype, "teams", {
        get: function () {
            return this.repo.teams;
        },
        enumerable: true,
        configurable: true
    });
    return OverviewComponent;
}());
OverviewComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        template: __webpack_require__(179)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__models_repository__["a" /* Repository */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__models_repository__["a" /* Repository */]) === "function" && _a || Object])
], OverviewComponent);

var _a;
//# sourceMappingURL=overview.component.js.map

/***/ }),

/***/ 90:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TeamAdminComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_repository__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_team_model__ = __webpack_require__(85);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TeamAdminComponent = (function () {
    function TeamAdminComponent(repo) {
        this.repo = repo;
        this.tableMode = true;
    }
    Object.defineProperty(TeamAdminComponent.prototype, "team", {
        get: function () {
            return this.repo.team;
        },
        enumerable: true,
        configurable: true
    });
    TeamAdminComponent.prototype.selectTeam = function (id) {
        this.repo.getTeam(id);
    };
    TeamAdminComponent.prototype.saveTeam = function () {
        console.log(this.repo.team);
        if (this.repo.team.id == null)
            this.repo.createTeam(this.repo.team);
        else
            this.repo.replaceTeam(this.repo.team);
        this.clearTeam();
        this.tableMode = true;
    };
    //deleteTeam(id: number)
    //{
    //    this.repo.deleteTeam(id);
    //}
    TeamAdminComponent.prototype.clearTeam = function () {
        this.repo.team = new __WEBPACK_IMPORTED_MODULE_2__models_team_model__["a" /* Team */]();
        this.tableMode = true;
    };
    Object.defineProperty(TeamAdminComponent.prototype, "teams", {
        get: function () {
            return this.repo.teams;
        },
        enumerable: true,
        configurable: true
    });
    return TeamAdminComponent;
}());
TeamAdminComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        template: __webpack_require__(180)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__models_repository__["a" /* Repository */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__models_repository__["a" /* Repository */]) === "function" && _a || Object])
], TeamAdminComponent);

var _a;
//# sourceMappingURL=teamAdmin.component.js.map

/***/ })

},[103]);
//# sourceMappingURL=main.bundle.js.map