"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const TipoProduto_1 = require("../model/TipoProduto");
class ListaScreen {
    constructor(router) {
        this.prompt = (0, prompt_sync_1.default)();
        this.router = router;
    }
    listarProdutoScreen() {
        let continuarListando = true;
        while (continuarListando) {
            console.log("Opções de listagem de produtos:");
            console.log("1. Listar todos os produtos");
            console.log("2. Listar produtos por nome");
            console.log("3. Listar produtos por tipo");
            console.log("4. Listar produto por índice");
            console.log("5. Voltar para a tela principal");
            const opcao = this.prompt("Escolha uma opção: ");
            if (opcao === '1') {
                // Lista todos os produtos
                this.router.produtosController.listarTodosOsDadosController();
            }
            else if (opcao === '2') {
                // Lista produtos por nome
                this.listarPorNome();
            }
            else if (opcao === '3') {
                // Lista produtos por tipo
                this.listarPorTipo();
            }
            else if (opcao === '4') {
                // Lista produto por índice
                this.listarPorIndice();
            }
            else if (opcao === '5') {
                console.log("Voltando para a tela principal...");
                continuarListando = false; // Volta para a tela principal
                this.router.ps.FirstScreen(); // Retorna para a tela principal
            }
            else {
                console.log("Opção inválida.");
            }
            // Caso o usuário não queira continuar, volta para a tela principal
            if (opcao !== '5') {
                console.log("");
                const escolha = this.prompt("Deseja realizar outra listagem ou voltar para a tela principal? (s/n): ");
                if (escolha.toLowerCase() === 'n') {
                    continuarListando = false; // Voltar para a tela principal
                    this.router.ps.FirstScreen(); // Retorna para a tela principal
                }
                else if (escolha.toLowerCase() !== 's') {
                    console.log("Opção inválida. Voltando para a tela principal.");
                    continuarListando = false; // Voltar para a tela principal
                    this.router.ps.FirstScreen(); // Retorna para a tela principal
                }
            }
        }
    }
    listarPorNome() {
        console.log("Produtos listados por nome:");
        this.router.produtosController.db.produtosDb.sort((a, b) => a.getNome().localeCompare(b.getNome()));
        this.router.produtosController.db.produtosDb.forEach((produto, index) => {
            console.log(`${index}. ${produto.getNome()} - R$ ${produto.getPreco().toFixed(2)} - Quantidade: ${produto.getQtd()}`);
        });
    }
    listarPorTipo() {
        console.log("Escolha um tipo de produto:");
        console.log("1. Fruta");
        console.log("2. Verdura");
        console.log("3. Legume");
        const tipoEscolhido = this.prompt("Digite o número do tipo: ");
        let tipo;
        switch (tipoEscolhido) {
            case '1':
                tipo = TipoProduto_1.TipoProduto.Fruta;
                break;
            case '2':
                tipo = TipoProduto_1.TipoProduto.Verdura;
                break;
            case '3':
                tipo = TipoProduto_1.TipoProduto.Legume;
                break;
            default:
                console.log("Tipo inválido.");
                return;
        }
        // Filtra os produtos pelo tipo escolhido
        this.filtrarProdutosPorTipo(tipo);
    }
    filtrarProdutosPorTipo(tipo) {
        // Filtrando diretamente pelos tipos definidos no enum
        const produtos = this.router.produtosController.db.produtosDb.filter((produto) => produto.getTipo() === tipo);
        if (produtos.length === 0) {
            console.log(`Não há produtos do tipo ${tipo} no estoque.`);
        }
        else {
            console.log(`Produtos do tipo ${tipo}:`);
            produtos.forEach((produto) => {
                console.log(`${produto.getNome()} - R$ ${produto.getPreco().toFixed(2)}`);
            });
        }
    }
    listarPorIndice() {
        console.log("Produtos com seus índices:");
        this.router.produtosController.db.produtosDb.forEach((produto, index) => {
            console.log(`${index}. ${produto.getNome()} - R$ ${produto.getPreco().toFixed(2)} - Quantidade: ${produto.getQtd()}`);
        });
    }
}
exports.default = ListaScreen;
