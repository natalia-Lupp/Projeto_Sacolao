"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
class RemoverScreen {
    constructor(router) {
        this.prompt = (0, prompt_sync_1.default)();
        this.router = router;
    }
    apagarProdutosScreen() {
        const escolha = this.prompt("Deseja remover o produto pelo nome ou índice? (N/I): ").toUpperCase();
        if (escolha === "N") {
            this.removerProdutoPorNome();
        }
        else if (escolha === "I") {
            this.removerProdutoPorIndice();
        }
        else {
            console.log("Opção inválida. Escolha 'N' para nome ou 'I' para índice.");
        }
    }
    removerProdutoPorNome() {
        const nomeDoProduto = this.prompt("Qual nome do produto? ");
        const produtoRemovido = this.router.produtosController.getRemoveProdutoController();
        produtoRemovido.setNome(nomeDoProduto);
        // Verifica se o produto existe
        if (this.router.produtosController.verificarProdutoExistente(nomeDoProduto)) {
            // Pergunta ao usuário se ele tem certeza
            const confirmar = this.prompt(`Tem certeza que deseja remover o produto "${nomeDoProduto}"? (S/N) `);
            if (confirmar.toUpperCase() === 'S') {
                // Chama o método para apagar o produto
                this.router.apagarProdutoRouter(nomeDoProduto);
                console.log(`${nomeDoProduto} foi removido com sucesso.`);
            }
            else {
                console.log("A operação de remoção foi cancelada.");
            }
        }
        else {
            console.log(`Produto "${nomeDoProduto}" não encontrado.`);
        }
    }
    removerProdutoPorIndice() {
        // Listando os produtos disponíveis para o usuário selecionar pelo índice
        console.log("Produtos disponíveis para remoção por índice:");
        this.router.db.listarProdutos(); // Exibe todos os produtos
        const indice = parseInt(this.prompt("Informe o índice do produto a ser removido: "), 10);
        // Verificando se o índice é válido e removendo o produto
        if (!isNaN(indice) && indice >= 0) {
            this.router.removerProdutoPorIndexRouter(indice); // Chama o método do Router para remover pelo índice
        }
        else {
            console.log("Índice inválido. Tente novamente.");
        }
    }
}
exports.default = RemoverScreen;
