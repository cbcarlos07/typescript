/*export*/ class SpaceCraft {
    constructor (public propulsor : string){}

    jumpIntoMyperspace(){
        console.log( `Entering hiperspace with ${this.propulsor}` )
    }
}

/*export*/ interface ContainerShip{
    cargoContainers : number
}

export { SpaceCraft, ContainerShip }