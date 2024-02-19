import { Car } from './car';

export class Newcar extends Car{
    newcarPotential?: number

    constructor(name: string, speed: number, newcarPotential: number){
        super(name, speed);
        this.newcarPotential= newcarPotential;
    }

    override greet(value: string) {
        super.greet(`Newcar: ${value}`)
    }
}