import { Car } from './car';

export class Oldcar extends Car{
    oldcarPotential?: number

    constructor(name: string, speed: number, oldcarPotential: number){
        super(name, speed);
        this.oldcarPotential= oldcarPotential;
    }

    override greet(value: string) {
        super.greet(`Oldcar: ${value}`)
    }
}