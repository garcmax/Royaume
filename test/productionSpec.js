'use strict';
import WoodProducer from '../game/buildings/producers/wood-producer';
import * as fishProducer from '../game/buildings/producers/fish-producer';
import StoneCarry from '../game/buildings/producers/stone-producer';
import {res, production, debug_reset} from "../game/player/resources";

describe('wood production', function () {
  it('should produce 5 woods', function (done) {
    let woodCutter = new WoodProducer();
    for (let i = 0; i < 5; i++) {   
        woodCutter.produce();
    }
    res['wood'].should.equal(5);
    done();
  });
});

describe('fish production', function () {
  it('should produce 10 fishs by BoatFish', function (done) {
    let producer = new fishProducer.FishBoat();
    for (let i = 0; i < 5; i++) {   
        producer.produce();
    }
    res['fish'].should.equal(10);
    debug_reset();
    done();
  });  
  it('should produce 20 fishs by SuperBoatFish', function (done) {
    let producer = new fishProducer.SuperFishBoat();
    for (let i = 0; i < 5; i++) {   
        producer.produce();
    }
    res['fish'].should.equal(20);
    debug_reset();
    done();
  });
});

describe('stone production', function () {
  it('should produce 1 stone', function (done) {
    let stoneCarry = new StoneCarry();
    for (let i = 0; i < 5; i++) {   
        stoneCarry.produce();
    }
    res['stone'].should.equal(1);
    done();
  });
});