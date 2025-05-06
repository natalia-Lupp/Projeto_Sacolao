"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Database_1 = __importDefault(require("../db/Database"));
const PrimayScreen_1 = __importDefault(require("../view/PrimayScreen"));
const ProdutosController_1 = __importDefault(require("./ProdutosController"));
const ControleDeVendas_1 = __importDefault(require("../model/ControleDeVendas"));
class Router {
    constructor() {
        this.db = new Database_1.default();
        this.ps = new PrimayScreen_1.default(this);
        this.produtosController = new ProdutosController_1.default(this.db);
        this.controleDeVendas = new ControleDeVendas_1.default(this.db);
        this.ps.FirstScreen();
    }
    // funções de CRUD: ADD, ATUALIZAR, LISTAR, APAGAR
    // adiciona produto
    getNovoProdutoRouter() {
        return this.produtosController.getNovoProdutoController(); // produto vem vazio pra o metodo de baixo fazer verificações e ate onde entendi não quebra o codigo em caso de erro e tbm por baixo acoplamento de dados
    }
    registrarProdutoRouter(produto) {
        this.produtosController.registerNovoProdutoController(produto);
    }
    // atualiza o produto
    getAtualizaDadosrouter() {
        return this.produtosController.getAtualizaDadosController();
    }
    atualizarProdutoRouter(nome, novoProduto) {
        this.produtosController.atualizarProdutoController(nome, novoProduto);
    }
    // lista o produto
    listarProdutosRouter() {
        this.db.listarProdutos();
    }
    listarProdutosSemSerPorTipoRouter() {
        this.produtosController.listarSemSerPorTipo();
    }
    // Método refatorado para listar produtos por tipo
    listarProdutosPorTipoRouter(tipo) {
        this.produtosController.listarProdutosPorTipoController(tipo);
    }
    // remover produto
    getRemoveProdutoController() {
        return this.produtosController.getRemoveProdutoController();
    }
    apagarProdutoRouter(nome) {
        this.produtosController.apagarProdutoController(nome);
    }
    // Método no Router para remover produto por índice
    removerProdutoPorIndexRouter(index) {
        this.produtosController.removerProdutoPorIndexController(index);
    }
    // Chama vendas
    vendaDeProdutosRouter() {
        this.db.listarProdutos();
    }
    vendaProduto(nomeProduto, qtdVendida) {
        this.produtosController.vendaDeProdutos(nomeProduto, qtdVendida);
    }
}
exports.default = Router;
