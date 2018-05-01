/*
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

console.log( `Is Falcon good for the job? ${goodForTheJob( falcon ) ? 'yes' : 'no'}` )*/
var message = "Helpe me, Obi-Wan Kenobi. You're my only hope!";
console.log(message);
var episode = 4;
//episode = '4'
console.log("This episode: " + episode);
episode = episode + 1;
console.log("Next episode: " + episode);
var favoriteDroid; // tipo any quando não informa o tipo na declaração
//let favoriteDroid // tipo any quando não informa o tipo na declaração
favoriteDroid = 'BB-8';
//favoriteDroid = 10
console.log('My favorite droid is: ' + favoriteDroid);
var isEnoughToBeatMF = function (parsecs) {
    return parsecs < 12;
};
var distance = 14;
console.log("is " + distance + " parsecs enough to beat Milenium Falcon? " + (isEnoughToBeatMF(distance) ? 'YES' : 'NO') + " ");
var call = function (name) { return console.log("Do you copy, " + name + "?"); };
call('R2');
function inc(speed, inc) {
    if (inc === void 0) { inc = 1; }
    return speed + inc;
}
console.log("inc (5, 1) = " + inc(5, 1));
console.log("inc (5) = " + inc(5));
