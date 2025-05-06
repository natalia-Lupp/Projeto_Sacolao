"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Animal_1 = __importDefault(require("./Animal"));
const Vegetal_1 = __importDefault(require("./Vegetal"));
class Supermercado {
    constructor() {
        this.animal = new Animal_1.default();
        this.vegetal = new Vegetal_1.default();
    }
}
exports.default = Supermercado;
