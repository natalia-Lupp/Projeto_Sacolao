"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Animal {
    constructor() {
        console.log("oi ");
        this.fazAlgo();
    }
    trata() {
        console.log("animal generico sendo tratado");
    }
    fazAlgo() {
        console.log("fazendo algo");
    }
}
exports.default = Animal;
