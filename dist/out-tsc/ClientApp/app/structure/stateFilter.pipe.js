"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var StateFilterPipe = /** @class */ (function () {
    function StateFilterPipe() {
    }
    StateFilterPipe.prototype.transform = function (value, args) {
        console.log("stateFilterUnique");
        // Remove the duplicate elements
        //let uniqueArray = value.filter(function (el, index, array)
        //{
        //	return array.indexOf(el) == index;
        //});
        var states = [];
        var uniqueArray = Array.from(new Set(value));
        for (var i = 0; i < value.length; i++) {
            if (states.indexOf(value[i].stateId) == -1) {
                console.log(value[i].stateId);
                states.push(value[i].stateId);
            }
        }
        console.log(uniqueArray);
        return states;
    };
    StateFilterPipe = __decorate([
        core_1.Pipe({
            name: 'filterUniqueStates',
            pure: false
        })
    ], StateFilterPipe);
    return StateFilterPipe;
}());
exports.StateFilterPipe = StateFilterPipe;
//# sourceMappingURL=stateFilter.pipe.js.map