"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const CadastroScreen_1 = __importDefault(require("../view/CadastroScreen"));
const RemoverScreen_1 = __importDefault(require("./RemoverScreen"));
const ListaScreen_1 = __importDefault(require("./ListaScreen"));
const AtualizarScreen_1 = __importDefault(require("./AtualizarScreen"));
const AplicarDesconto_1 = __importDefault(require("./AplicarDesconto"));
const VendasFeitas_1 = __importDefault(require("./VendasFeitas"));
class PrimaryScreen {
    constructor(router) {
        this.prompt = (0, prompt_sync_1.default)();
        this.router = router;
        this.cadastroScreen = new CadastroScreen_1.default(this.router);
        this.removerScreen = new RemoverScreen_1.default(this.router);
        this.atualizarScreen = new AtualizarScreen_1.default(this.router);
        this.listaScreen = new ListaScreen_1.default(this.router);
        this.aplicarDesconto = new AplicarDesconto_1.default(this.router);
        this.vendasFeitas = new VendasFeitas_1.default(this.router);
    }
    FirstScreen() {
        let showScreen = true;
        while (showScreen) {
            const choice = this.prompt("Escolha:\n1 - Cadastrar \n2 - Listar\n3 - Atualizar\n4 - Desconto e Promoção\n5 - Vendas\n6 - Apagar\n7 --Sair\n");
            switch (choice) {
                case "1":
                    let choice2 = this.prompt("Escolha:\n1 - Cadastrar Produto\n2 - Voltar\n");
                    if (choice2 === "1") {
                        this.cadastroScreen.registrarProdutosScreen();
                    }
                    break;
                case "2":
                    let choice3 = this.prompt(//controler vazia
                    "Escolha:\n1 - Listar Produtos\n2 - Voltar\n");
                    if (choice3 === "1")
                        this.listaScreen.listarProdutoScreen();
                    break;
                case "3":
                    let choice4 = this.prompt(//tenho que puxar por index // controler vazia
                    "Escolha:\n1 - Atualizar Produtos\n2 - Voltar\n");
                    if (choice4 === "1")
                        this.atualizarScreen.atualizarProdutoScreen();
                    break;
                case "4":
                    let choice5 = this.prompt(//tenho que puxar por index // controler vazia
                    "Escolha:\n1 - Aplicar Desconto e Promoções\n2 - Voltar\n");
                    if (choice5 === "1")
                        this.aplicarDesconto.aplicaDescontoScreen();
                    break;
                case "5":
                    let choice6 = this.prompt(//tenho que puxar por index // controler vazia
                    "Escolha:\n1 - vendas\n2 - Voltar\n");
                    if (choice6 === "1")
                        this.vendasFeitas.RegistrarVendasScreen();
                    break;
                case "6":
                    let choice7 = this.prompt(//tenho que puxar por index // controler vazia
                    "Escolha:\n1 - Remover Produtos\n2 - Voltar\n");
                    if (choice7 === "1")
                        this.removerScreen.apagarProdutosScreen();
                    break;
                case "7":
                    showScreen = false; // Sair
                    break;
                default:
                    console.log("Escolha inválida. Tente novamente.");
                    break;
            }
        }
    }
}
exports.default = PrimaryScreen;
