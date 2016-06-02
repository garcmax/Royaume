import {res} from "../../player/resources";

export default class Producer {
    constructor(quantity, type) {
        this.quantity = quantity;
        this.type = type;
    }
    produce() {        
        res[this.type] += this.quantity;
        console.log(`on produit ${this.quantity} de ${this.type}`);
    }
}