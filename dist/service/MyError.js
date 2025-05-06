"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class MyError extends Error {
    constructor(message) {
        super(message);
        //this.name = "MyError";  // Definindo o nome da classe de erro
    }
}
exports.default = MyError;
