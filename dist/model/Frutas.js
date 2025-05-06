"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Produtos_1 = __importDefault(require("../model/Produtos"));
const TipoProduto_1 = require("./TipoProduto");
class Frutas extends Produtos_1.default {
    constructor(nome, preco, qtd, vencimento) {
        super();
        this.setNome(nome);
        this.setPreco(preco);
        this.setQtd(qtd);
        this.setVencimento(vencimento);
        this.setTipo(TipoProduto_1.TipoProduto.Fruta);
    }
    verificaValidadeIProdutos() {
        let dataAtual = new Date();
        let dataVencimento = new Date(this.vencimento);
        let dataLimite = new Date(dataAtual);
        dataLimite.setDate(dataAtual.getDate() + 25);
        if (dataVencimento < dataAtual) {
            return "Produto vencido";
        }
        else if (dataVencimento <= dataLimite) {
            return "Produto está para vencer";
        }
        return "Produto está na validade";
    }
}
exports.default = Frutas;
