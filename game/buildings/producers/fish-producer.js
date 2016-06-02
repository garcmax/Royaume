import Producer from "./producer";
import {production} from "../../player/resources";

class FishProducer extends Producer {
    constructor(newQuantity) {
        super(newQuantity, 'fish');
    }
}


export class FishBoat extends FishProducer {
    constructor() {
        super(production['fish']);
    }
}

export class SuperFishBoat extends FishProducer {
    constructor() {
        super(production['fish'] + 2);
    }
}  