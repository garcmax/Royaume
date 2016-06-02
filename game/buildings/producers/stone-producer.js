import Producer from "./producer";
import {production} from "../../player/resources";

export default class StoneProducer extends Producer {
    constructor() {
        super(production['stone'], 'stone');
    }
} 