let rocket1 = "32WESSDS";
let thrusterspower1 = [10, 30, 80];
let rocket1velocity = [0, 0, 0];

let rocket2 = "LDSFJA32";
let thrusterspower2 = [30,40,50,50,30,10];
let rocket2velocity = [0,0,0,0,0,0];

function createRocket1() {
    let rocket=new Rocket(rocket1) ;
    var i = 0;
     while (i < 3) {
        rocket.addThruster(new Thruster(thrusterspower1[i]));
        i++;
     }  
    (<HTMLInputElement>document.getElementById('Rocket1')).innerHTML='Created rocket 1 with code: ' + rocket.code;
    (<HTMLInputElement>document.getElementById('Rocket2')).innerHTML='Has 3 boosters max power: ' + rocket.thrusters[0].power + ',' + rocket.thrusters[1].power + ',' + rocket.thrusters[2].power ;
}

function createRocket2() {
    let rocket=new Rocket(rocket2) ;
    var i = 0;
     while (i < 6) {
        rocket.addThruster(new Thruster(thrusterspower2[i]));
        i++;
     }  
    (<HTMLInputElement>document.getElementById('Rocket1')).innerHTML='Created rocket 2 with code: ' + rocket.code;
    (<HTMLInputElement>document.getElementById('Rocket2')).innerHTML='Has 6 boosters max power: ' + rocket.thrusters[0].power + ',' + rocket.thrusters[1].power + ',' + rocket.thrusters[2].power + ',' + rocket.thrusters[3].power + ',' + rocket.thrusters[4].power + ',' + rocket.thrusters[5].power ;
}

function accelerateRocket1(){
  var i = 0;
  while (i < 3) {
     if (rocket1velocity[i] == thrusterspower1[i]){ 
        rocket1velocity[i] = rocket1velocity[i];
     }
     else{
        rocket1velocity[i] = rocket1velocity[i] + 10;
     }
    i++;
  }
  printRocket1();
}

function accelerateRocket2(){
var i = 0;
  while (i < 6) {
     if (rocket2velocity[i] == thrusterspower2[i]){ 
        rocket2velocity[i] = rocket2velocity[i];
     }
     else{
        rocket2velocity[i] = rocket2velocity[i] + 10;
     }
    i++;
  }
  printRocket2();
}

function breakRocket1(){
var i = 0;
  while (i < 3) {
     if (rocket1velocity[i] == 0){ 
        rocket1velocity[i] = 0;
     }
     else{
        rocket1velocity[i] = rocket1velocity[i] - 10;
     }
    i++;
  }
  printRocket1();
}

function breakRocket2(){
var i = 0;
  while (i < 6) {
     if (rocket2velocity[i] == 0){ 
        rocket2velocity[i] = 0;
     }
     else{
        rocket2velocity[i] = rocket2velocity[i] - 10;
     }
    i++;
  }
  printRocket2();
}

function printRocket1(){
  (<HTMLInputElement>document.getElementById('Rocket1')).innerHTML='Rocket ' + rocket1 + ' boosters max power: ' + thrusterspower1;
  (<HTMLInputElement>document.getElementById('Rocket2')).innerHTML='Actual velocity: ' + rocket1velocity  + ' Total= ' + (rocket1velocity[0]+rocket1velocity[1]+rocket1velocity[2]) ;
}

function printRocket2(){
  (<HTMLInputElement>document.getElementById('Rocket1')).innerHTML='Rocket ' + rocket2 + ' boosters max power: ' + thrusterspower2;
  (<HTMLInputElement>document.getElementById('Rocket2')).innerHTML='Actual velocity: ' + rocket2velocity  + ' Total= ' + (rocket2velocity[0] + rocket2velocity[1] + rocket2velocity[2] + rocket2velocity[3] + rocket2velocity[4] + rocket2velocity[5]) ;
}

function printAllRocket(){
  (<HTMLInputElement>document.getElementById('Rocket1')).innerHTML='Rocket ' + rocket1 + ' velocity: ' + rocket1velocity  + ' Total= ' + (rocket1velocity[0]+rocket1velocity[1]+rocket1velocity[2]);
  (<HTMLInputElement>document.getElementById('Rocket2')).innerHTML='Rocket ' + rocket2 + ' velocity: ' + rocket2velocity  + ' Total= ' + (rocket2velocity[0] + rocket2velocity[1] + rocket2velocity[2] + rocket2velocity[3] + rocket2velocity[4] + rocket2velocity[5]) ;
}
   