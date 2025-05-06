"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Produtos_1 = __importDefault(require("../model/Produtos"));
const TipoProduto_1 = require("./TipoProduto");
class Verduras extends Produtos_1.default {
    constructor(nome, preco, qtd, vencimento) {
        super();
        this.setNome(nome);
        this.setPreco(preco);
        this.setQtd(qtd);
        this.setVencimento(vencimento);
        this.setTipo(TipoProduto_1.TipoProduto.Verdura);
    }
    verificaValidadeIProdutos() {
        let dataAtual = new Date();
        let dataVencimento = new Date(this.vencimento);
        let dataLimite = new Date(dataAtual);
        let vencimentoVerificado;
        dataLimite.setDate(dataAtual.getDate() + 15);
        if (dataVencimento < dataAtual) {
            vencimentoVerificado = `${this.getNome()} está vencido`;
        }
        else if (dataVencimento <= dataLimite) {
            vencimentoVerificado = `${this.getNome()} está para vencer`;
        }
        else {
            vencimentoVerificado = `${this.getNome()} está na validade`;
        }
        return vencimentoVerificado;
    }
}
exports.default = Verduras;
