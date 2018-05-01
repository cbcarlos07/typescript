"use strict";
exports.__esModule = true;
var base_ships_1 = require("./base-ships");
var starfighters_1 = require("./starfighters");
var _ = require("lodash");
console.log(_.pad("Typescript examples", 40, "="));
var ship = new base_ships_1.SpaceCraft('hiperdrive');
ship.jumpIntoMyperspace();
var falcon = new starfighters_1.MilleniumFalcon();
falcon.jumpIntoMyperspace();
var goodForTheJob = function (ship) { return ship.cargoContainers > 2; };
console.log("Is Falcon good for the job? " + (goodForTheJob(falcon) ? 'yes' : 'no'));
/*

let message = "Helpe me, Obi-Wan Kenobi. You're my only hope!"
console.log( message )

let episode: number = 4
//episode = '4'
console.log( "This episode: "+episode )

episode = episode + 1
console.log( "Next episode: "+episode )

let favoriteDroid : string // tipo any quando não informa o tipo na declaração
//let favoriteDroid // tipo any quando não informa o tipo na declaração
favoriteDroid = 'BB-8'
//favoriteDroid = 10
console.log( 'My favorite droid is: '+favoriteDroid )

let isEnoughToBeatMF = function ( parsecs : number ) : boolean {
    return parsecs < 12
}
let distance = 14
console.log( `is ${distance} parsecs enough to beat Milenium Falcon? ${isEnoughToBeatMF(distance) ? 'YES': 'NO' } `)

let call = (name: string) => console.log( `Do you copy, ${name}?` )
call( 'R2' )

function inc ( speed: number, inc: number = 1 ) : number{
    return speed + inc
}
console.log( `inc (5, 1) = ${inc(5,1)}` )
console.log( `inc (5) = ${inc(5)}` )*/
