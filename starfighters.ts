import { SpaceCraft, ContainerShip } from "./base-ships";

export class MilleniumFalcon extends SpaceCraft implements ContainerShip{
    cargoContainers : number
    constructor(){
        super('hyperdrive')
        this.cargoContainers = 2
    }
    jumpIntoMyperspace(){
        if(Math.random() >= 0.5){
            super.jumpIntoMyperspace()
        }else{
            console.log(`Failed to jump into hiperspace`)
        }
    }
}