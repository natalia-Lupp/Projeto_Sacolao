"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Produtos_1 = __importDefault(require("../model/Produtos"));
const ControleDeVendas_1 = __importDefault(require("../model/ControleDeVendas"));
class ProdutosController {
    constructor(db) {
        this.db = db;
        this.controleDeVendas = new ControleDeVendas_1.default(db); // evitar erro?
    }
    // add produto
    getNovoProdutoController() {
        return new Produtos_1.default(); //acho que aqui vai um try catch
    }
    registerNovoProdutoController(produtoOrNome, preco, qtd, vencimento, tipo) {
        if (produtoOrNome instanceof Produtos_1.default) {
            // Caso seja um objeto Produto
            try {
                this.db.addProdutoDb(produtoOrNome);
                console.log("O produto foi registrado com sucesso!");
            }
            catch (error) {
                console.log(error);
            }
        }
        else {
            // Caso sejam parâmetros individuais
            const produto = new Produtos_1.default();
            produto.setNome(produtoOrNome);
            produto.setPreco(preco);
            produto.setQtd(qtd);
            produto.setVencimento(vencimento);
            produto.setTipo(tipo);
            try {
                this.db.addProdutoDb(produto);
                console.log("O produto foi registrado com sucesso!");
            }
            catch (error) {
                console.log(error);
            }
        }
    }
    // atualizar produto
    getAtualizaDadosController() {
        return new Produtos_1.default();
    }
    atualizarProdutoController(nome, novoProduto) {
        const sucesso = this.db.atualizarProdutoDb(nome, novoProduto);
        if (sucesso) {
            console.log(`Produto ${nome} foi atualizado com sucesso.`);
        }
        else {
            console.log(`Erro em atualizar o produto ${nome}.`);
        }
    }
    // listar produto
    getListaProdutosController() {
        return new Produtos_1.default();
    }
    listarSemSerPorTipo() {
        this.db.listarProdutos();
    }
    listarProdutosPorTipoController(tipo) {
        this.db.listarProdutosPorTipo(tipo);
    }
    listarTodosOsDadosController() {
        this.db.listarTodosOsDadosDosProdutos();
    }
    // produra produto por nome
    getProdutoPorNome(nome) {
        return this.db.getProcuraProdutoPorNome(nome); // Retorna o produto completo 
    }
    // garente existencia do produto    
    verificarProdutoExistente(nome) {
        const produto = this.db.getProcuraProdutoPorNome(nome); // Busca no banco
        return produto !== undefined; // Se encontrar, retorna true, senão false
    }
    // remover produto
    getRemoveProdutoController() {
        return new Produtos_1.default();
    }
    apagarProdutoController(nome) {
        this.db.removeProdutoDb(nome);
    }
    // Método para remover produto por índice
    removerProdutoPorIndexController(index) {
        try {
            this.db.removeProdutoPorIndexDb(index);
        }
        catch (error) {
            console.log(error);
        }
    }
    // venda do produto
    getDadosDeVendasController() {
        return new Produtos_1.default();
    }
    vendaDeProdutos(nomeProduto, qtdVendida) {
        this.controleDeVendas.vendaDeProduto(nomeProduto, qtdVendida);
    }
}
exports.default = ProdutosController;
