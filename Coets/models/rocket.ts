class Rocket{
    code:string;
    numthrusters:number;
    thrusters:Thruster[]=new Array();
    
    constructor(code:string,numthrusters:number){
        this.code=code;
        this.numthrusters=numthrusters;
    }
    
    addThruster(thruster:Thruster):void{
        this.thrusters.push(thruster);
    }
}