"use strict";
function createRocket(code, numthrusters, thruster1, thruster2, thruster3, thruster4, thruster5, thruster6) {
    var rocket = new Rocket(code, numthrusters);
    rocket.addThruster(new Thruster(thruster1));
    rocket.addThruster(new Thruster(thruster2));
    rocket.addThruster(new Thruster(thruster3));
    if (numthrusters == 6) {
        rocket.addThruster(new Thruster(thruster4));
        rocket.addThruster(new Thruster(thruster5));
        rocket.addThruster(new Thruster(thruster6));
    }
    var i = 0;
    var powers = rocket.thrusters[i].power;
    i++;
    while (i < numthrusters) {
        powers = powers + ',' + rocket.thrusters[i].power;
        i++;
    }
    document.getElementById('Rocket1').innerHTML = 'Rocket ' + rocket.code + ' boosters max power: ' + powers;
}
function accelerateRocket() {
}
function breakRocket() {
}
function printRocket() {
}
