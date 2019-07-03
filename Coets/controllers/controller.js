"use strict";
var rocket1 = "32WESSDS";
var thrusterspower1 = [10, 30, 80];
var rocket1velocity = [0, 0, 0];
var rocket2 = "LDSFJA32";
var thrusterspower2 = [30, 40, 50, 50, 30, 10];
var rocket2velocity = [0, 0, 0, 0, 0, 0];
function createRocket(rockete, thrusterspower) {
    var rocket = new Rocket(rockete);
    var i = 0;
    while (thrusterspower[i] != undefined) {
        rocket.addThruster(new Thruster(thrusterspower[i]));
        i++;
    }
    document.getElementById('Rocket1').innerHTML = 'Created rocket with code: ' + rocket.code;
    document.getElementById('Rocket2').innerHTML = 'Has ' + i + ' boosters max power: ' + thrusterspower;
}
function createRocket1() {
    createRocket(rocket1, thrusterspower1);
}
function createRocket2() {
    createRocket(rocket2, thrusterspower2);
}
function accelerateRocket(rockete, thrusterspower, rocketvelocity) {
    var i = 0;
    while (thrusterspower[i] != undefined) {
        if (rocketvelocity[i] == thrusterspower[i]) {
            rocketvelocity[i] = rocketvelocity[i];
        }
        else {
            rocketvelocity[i] = rocketvelocity[i] + 10;
        }
        i++;
    }
    if (rockete == rocket1) {
        rocket1velocity = rocketvelocity;
    }
    else {
        rocket2velocity = rocketvelocity;
    }
}
function accelerateRocket1() {
    accelerateRocket(rocket1, thrusterspower1, rocket1velocity);
    printRocket1();
}
function accelerateRocket2() {
    accelerateRocket(rocket2, thrusterspower2, rocket2velocity);
    printRocket2();
}
function breakRocket(rockete, thrusterspower, rocketvelocity) {
    var i = 0;
    while (thrusterspower[i] != undefined) {
        if (rocketvelocity[i] == 0) {
            rocketvelocity[i] = 0;
        }
        else {
            rocketvelocity[i] = rocketvelocity[i] - 10;
        }
        i++;
    }
    if (rockete == rocket1) {
        rocket1velocity = rocketvelocity;
    }
    else {
        rocket2velocity = rocketvelocity;
    }
}
function breakRocket1() {
    breakRocket(rocket1, thrusterspower1, rocket1velocity);
    printRocket1();
}
function breakRocket2() {
    breakRocket(rocket2, thrusterspower2, rocket2velocity);
    printRocket2();
}
function printRocket(rockete, thrusterspower, rocketvelocity) {
    document.getElementById('Rocket1').innerHTML = 'Rocket ' + rockete + ' boosters max power: ' + thrusterspower;
    var suma = 0;
    var i = 0;
    while (thrusterspower[i] != undefined) {
        suma = suma + rocketvelocity[i];
        i++;
    }
    document.getElementById('Rocket2').innerHTML = 'Actual velocity: ' + rocketvelocity + ' Total= ' + suma;
}
function printRocket1() {
    printRocket(rocket1, thrusterspower1, rocket1velocity);
}
function printRocket2() {
    printRocket(rocket2, thrusterspower2, rocket2velocity);
}
function printAllRocket() {
    document.getElementById('Rocket1').innerHTML = 'Rocket ' + rocket1 + ' actual velocity: ' + rocket1velocity;
    document.getElementById('Rocket2').innerHTML = 'Rocket ' + rocket2 + ' actual velocity: ' + rocket2velocity;
}
