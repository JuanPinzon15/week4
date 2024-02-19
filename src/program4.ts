import { Newcar } from "./newcar";
import { Oldcar } from "./oldcar";
import { Car } from "./car";

let oldcar = new Oldcar('Mercedes Benz SL' , 90, 120);
let newcar = new Newcar('BMW M4 Competition', 170, 220);

logOldcar(oldcar);
logNewcar(newcar);

function logOldcar(car: Oldcar){
    console.log(` ${car.getType()} ${car.name} ${car.speed} ${oldcar.oldcarPotential}`)
}

function logNewcar(car: Newcar){
    console.log(` ${car.getType()} ${car.name} ${car.speed} ${newcar.newcarPotential}`)
}