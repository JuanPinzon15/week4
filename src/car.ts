export class Car{
    name? : string;
    speed? : number;

    constructor(name: string, speed: number){
        this.name= name
        this.speed= speed
    }

    greet(value: string){
        console.log(`${value} ${this.speed}`)
    }
    
    getType(): string{
        return `Car:`
    }
}