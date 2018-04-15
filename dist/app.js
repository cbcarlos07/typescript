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
