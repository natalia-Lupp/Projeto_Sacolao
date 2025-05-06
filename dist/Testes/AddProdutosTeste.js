"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Frutas_1 = __importDefault(require("../model/Frutas"));
const Database_1 = __importDefault(require("../db/Database"));
const ProdutosController_1 = __importDefault(require("../control/ProdutosController"));
const TipoProduto_1 = require("../model/TipoProduto");
// Função de teste para adicionar produtos
describe('Teste Jester - Adicionar Produtos', () => {
    let db;
    let produtosController;
    beforeEach(() => {
        // Inicializando banco de dados e controller antes de cada teste
        db = new Database_1.default();
        produtosController = new ProdutosController_1.default(db);
    });
    it('Deve adicionar corretamente um produto tipo Fruta', () => {
        const maca = new Frutas_1.default("Maçã", 2.5, 10.00, "2023-12-31");
        // Adicionar o produto ao banco de dados via controller
        produtosController.registerNovoProdutoController(maca);
        // Verificar se o produto foi adicionado no banco de dados
        const produtosRegistrados = db.produtosDb;
        expect(produtosRegistrados).toHaveLength(1); // Deve ter 1 produto
        expect(produtosRegistrados[0].getNome()).toBe("Maçã");
        expect(produtosRegistrados[0].getTipo()).toBe(TipoProduto_1.TipoProduto.Fruta);
    });
});
