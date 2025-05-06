"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const MyError_1 = __importDefault(require("../service/MyError"));
const Frutas_1 = __importDefault(require("../model/Frutas"));
const Legumes_1 = __importDefault(require("../model/Legumes"));
const Verduras_1 = __importDefault(require("../model/Verduras"));
class Database {
    constructor() {
        this.produtosDb = [];
        this.iniciarProdutosDb();
    }
    iniciarProdutosDb() {
        const uva = new Frutas_1.default("uva", 3.5, 10.00, "2023-12-21");
        const acelga = new Verduras_1.default("acelga", 7.50, 35.00, "2025-12-31");
        const beteraba = new Legumes_1.default("beteraba", 4.20, 13.17, "2024-11-20");
        this.produtosDb.push(uva, acelga, beteraba);
        console.log("Produtos iniciais carregados no banco de dados.");
    }
    //add
    addProdutoDb(produto) {
        // Validação do nome
        if (produto.getNome().trim() === "") {
            throw new MyError_1.default("Não pode ser um nome vazio");
        }
        // Validação do preço (não pode ser menor ou igual a zero)
        if (produto.getPreco() <= 0) {
            throw new MyError_1.default("O preço deve ser maior que zero");
        }
        // Validação da quantidade (não pode ser menor ou igual a zero, e deve ser em quilos)
        if (produto.getQtd() <= 0) {
            throw new MyError_1.default("A quantidade deve ser maior que zero e em quilos");
        }
        // Validação da data de vencimento (não pode ser menor que a data atual)
        const dataAtual = new Date();
        const dataVencimento = new Date(produto.getVencimento());
        if (dataVencimento < dataAtual) {
            throw new MyError_1.default("A data de vencimento não pode ser menor que a data atual");
        }
        this.produtosDb.push(produto);
    }
    // remove
    removeProdutoDb(nome) {
        const index = this.produtosDb.findIndex((produto) => produto.getNome() === nome);
        if (index !== -1) {
            this.produtosDb.splice(index, 1);
            console.log(`${nome} foi removido do estoque.`);
        }
        else {
            console.log(`${nome} não encontrado no estoque.`);
        }
    }
    removeProdutoPorIndexDb(index) {
        if (index >= 0 && index < this.produtosDb.length) {
            const produtoRemovido = this.produtosDb.splice(index, 1);
            console.log(`${produtoRemovido[0].getNome()} foi removido do estoque.`);
        }
        else {
            console.log(`Índice inválido: Nenhum produto encontrado.`);
        }
    }
    //localiza
    getProdutosPorIndexDb(index) {
        return this.produtosDb[index];
    }
    getProcuraProdutoPorNome(nome) {
        for (let i = 0; i < this.produtosDb.length; i++) {
            if (this.produtosDb[i].getNome() === nome) {
                return this.produtosDb[i];
            }
        }
        console.log("Produto não encontrado.");
        return undefined;
    }
    //lista
    listarProdutos() {
        if (this.produtosDb.length === 0) {
            console.log("Sem estoque");
        }
        else {
            this.produtosDb.forEach((produto) => {
                console.log(produto.getNome());
            });
        }
    }
    listarTodosOsDadosDosProdutos() {
        if (this.produtosDb.length === 0) {
            console.log("Sem estoque");
        }
        else {
            this.produtosDb.forEach((produto) => {
                console.log(`Nome: ${produto.getNome()}, Preço: ${produto.getPreco()}, Quantidade: ${produto.getQtd()}, Vencimento: ${produto.getVencimento()}, Tipo: ${produto.getTipo()}`);
            });
        }
    }
    listarProdutosPorTipo(tipo) {
        const produtosFiltrados = this.produtosDb.filter(produto => produto.getTipo() === tipo);
        if (produtosFiltrados.length === 0) {
            console.log(`Nenhum produto encontrado do tipo: ${tipo}`);
        }
        else {
            produtosFiltrados.forEach(produto => {
                console.log(produto.getNome());
            });
        }
    }
    // Atualiza um produto no banco de dados
    atualizarProdutoDb(nome, novoProduto) {
        const index = this.produtosDb.findIndex((produto) => produto.getNome() === nome);
        if (index !== -1) {
            // Aqui, garantimos que estamos substituindo corretamente os dados
            this.produtosDb[index] = novoProduto;
            console.log(`Produto ${nome} foi atualizado com sucesso.`);
            return true;
        }
        else {
            console.log(`Erro: Produto com o nome ${nome} não encontrado.`);
            return false;
        }
    }
}
exports.default = Database;
