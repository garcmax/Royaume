import Producer from "./producer";
import {production} from "../../player/resources";

export default class WoodProducer extends Producer {
    constructor() {
        super(production['wood'], 'wood');
    }
}