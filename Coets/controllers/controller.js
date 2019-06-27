"use strict";
function createRocket(code, thrusters) {
    var rocket = new Rocket(code);
    rocket.addThruster(new Thruster(thrusters));
    document.body.innerText = 'Rocket ' + rocket.code + ' has ' + JSON.stringify(rocket.thrusters) + ' thrusters.';
}
