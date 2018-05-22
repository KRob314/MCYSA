"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Filter = /** @class */ (function () {
    function Filter() {
        this.related = false;
    }
    Filter.prototype.reset = function () {
        this.state = this.search = null;
        this.age = null;
        this.tournamentId = null;
        this.related = false;
    };
    return Filter;
}());
exports.Filter = Filter;
//# sourceMappingURL=configClasses.repository.js.map