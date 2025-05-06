"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Pet {
    constructor() {
        this.animais = [];
    }
    adicionaAnimal(animal) {
        this.animais.push(animal);
    }
    // exemplo de polimorfismo
    trataAnimais() {
        for (let index = 0; index < this.animais.length; index++) {
            this.animais[index].trata();
        }
    }
}
exports.default = Pet;
