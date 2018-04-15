import { SpaceCraft } from "./base-ships";
import { MilleniumFalcon } from "./starfighters";
import * as _ from 'lodash'

console.log( _.pad("Typescript examples", 40, "=") )

let ship = new SpaceCraft('hiperdrive')
ship.jumpIntoMyperspace()


let falcon  = new MilleniumFalcon()
falcon.jumpIntoMyperspace()

interface ContainerShip{
    cargoContainers : number
}

let goodForTheJob  = ( ship : ContainerShip ) => ship.cargoContainers > 2

console.log( `Is Falcon good for the job? ${goodForTheJob( falcon ) ? 'yes' : 'no'}` )