"use strict";
var Rocket = /** @class */ (function () {
    function Rocket(code, numthrusters) {
        this.thrusters = new Array();
        this.code = code;
        this.numthrusters = numthrusters;
    }
    Rocket.prototype.addThruster = function (thruster) {
        this.thrusters.push(thruster);
    };
    return Rocket;
}());
