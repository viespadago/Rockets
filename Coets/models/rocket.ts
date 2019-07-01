class Rocket{
    code:string;
    thrusters:Thruster[]=new Array();
    
    constructor(code:string){
        this.code=code;
    }
    
    addThruster(thruster:Thruster):void{
        this.thrusters.push(thruster);
    }
}