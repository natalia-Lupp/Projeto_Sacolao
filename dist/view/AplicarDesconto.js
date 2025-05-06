"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
class AplicarDesconto {
    constructor(router) {
        this.prompt = (0, prompt_sync_1.default)();
        this.router = router;
    }
    // Método para exibir e aplicar desconto ou desativar desconto
    aplicaDescontoScreen() {
        const escolhaBusca = this.prompt("Escolha a forma de procurar o produto:\n1 - Buscar por nome\n2 - Buscar por índice\nDigite 1 ou 2: ");
        if (escolhaBusca === "1") {
            const nomeProduto = this.prompt("Digite o nome do produto: ");
            const produto = this.router.db.getProcuraProdutoPorNome(nomeProduto);
            if (produto) {
                this.aplicarDescontoOuRemover(produto);
            }
            else {
                console.log("Produto não encontrado.");
            }
        }
        else if (escolhaBusca === "2") {
            const indexProduto = parseInt(this.prompt("Digite o índice do produto: "), 10);
            const produto = this.router.db.getProdutosPorIndexDb(indexProduto);
            if (produto) {
                this.aplicarDescontoOuRemover(produto);
            }
            else {
                console.log("Índice inválido ou produto não encontrado.");
            }
        }
        else {
            console.log("Opção inválida!");
        }
    }
    // Método auxiliar para aplicar ou remover desconto
    aplicarDescontoOuRemover(produto) {
        console.log(`Produto encontrado: ${produto.getNome()} - Preço atual: R$ ${produto.getPreco().toFixed(2)}`);
        // Exibindo opções para o usuário
        const opcao = this.prompt("Escolha uma opção: \n1 - Aplicar desconto \n2 - Desativar desconto \nDigite 1 ou 2: ");
        if (opcao === "1") {
            // Aplicando desconto
            produto.aplicarDesconto();
            console.log(`Desconto aplicado! Novo preço: R$ ${produto.getPreco().toFixed(2)}`);
        }
        else if (opcao === "2") {
            // Desativando desconto
            produto.desativarDesconto();
            console.log(`Desconto removido. Preço restaurado: R$ ${produto.getPreco().toFixed(2)}`);
        }
        else {
            console.log("Opção inválida!");
        }
    }
    // Método para consultar o preço de um produto
    consultarPrecoProduto(nomeProduto) {
        const produto = this.router.db.getProcuraProdutoPorNome(nomeProduto);
        if (produto) {
            console.log(`Produto: ${produto.getNome()} - Preço: R$ ${produto.getPreco().toFixed(2)}`);
        }
        else {
            console.log("Produto não encontrado.");
        }
    }
}
exports.default = AplicarDesconto;
