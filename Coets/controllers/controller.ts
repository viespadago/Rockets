
function createRocket(code:string, numthrusters:number, thruster1:number, thruster2:number, thruster3:number, thruster4:number, thruster5:number, thruster6:number) {
    let rocket=new Rocket(code, numthrusters) ;
    rocket.addThruster(new Thruster(thruster1));
    rocket.addThruster(new Thruster(thruster2));
    rocket.addThruster(new Thruster(thruster3));
     if (numthrusters == 6) {
      rocket.addThruster(new Thruster(thruster4));
      rocket.addThruster(new Thruster(thruster5));
      rocket.addThruster(new Thruster(thruster6));
     } 
    var i = 0;
     var powers:string = rocket.thrusters[i].power;
     i++;
     while (i < numthrusters) {
        powers = powers + ',' + rocket.thrusters[i].power;
        i++;
     }  
    (<HTMLInputElement>document.getElementById('Rocket1')).innerHTML='Rocket ' + rocket.code + ' boosters max power: ' + powers;
}

function accelerateRocket(){
}

function breakRocket(){
}

function printRocket(){
}
   