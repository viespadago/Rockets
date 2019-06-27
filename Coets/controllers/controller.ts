function createRocket(code:string, thrusters:number){
    let rocket=new Rocket(code);
    rocket.addThruster(new Thruster(thrusters));
    document.body.innerText='Rocket ' + rocket.code + ' has ' + JSON.stringify(rocket.thrusters) + ' thrusters.';
}
   