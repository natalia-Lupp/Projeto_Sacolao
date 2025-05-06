    import PromptSync from "prompt-sync";
    import type Router from "../control/Router";
    import { TipoProduto } from "../model/TipoProduto";

    export default class CadastroScreen {
        private prompt = PromptSync();
        private router: Router;

        constructor(router: Router) {
            this.router = router;
        }

        public registrarProdutosScreen(): void {
            let continueAdding = true;
            while (continueAdding) {
                const novoProduto = this.router.produtosController.getNovoProdutoController();
            
                // Validação do nome do produto
                let nomeDoProduto: string;
                while (true) {
                    nomeDoProduto = this.prompt("Qual nome do produto?");
                    if (nomeDoProduto.trim() === "") {
                        console.log("Nome do produto não pode ser vazio.");
                    } else {
                        novoProduto.setNome(nomeDoProduto);
                        break; // Sai do loop se o nome for válido
                    }
                }
    
                // Validação do preço
                let valorDoProduto: number;
                while (true) {
                    valorDoProduto = parseFloat(this.prompt("Qual valor do produto?"));
                    if (isNaN(valorDoProduto)) {
                        console.log("Por favor, insira um valor numérico válido para o preço.");
                    } else if (valorDoProduto <= 0) {
                        console.log("O preço deve ser maior que zero.");
                    } else {
                        novoProduto.setPreco(valorDoProduto);
                        break;
                    }
                }
    
                // Validação da quantidade
                let qtdDeProduto: number;
                while (true) {
                    qtdDeProduto = parseInt(this.prompt("Quantos quilos tem o produto?"));
                    if (isNaN(qtdDeProduto)) {
                        console.log("Por favor, insira um número válido para a quantidade.");
                    } else if (qtdDeProduto <= 0) {
                        console.log("A quantidade deve ser maior que zero.");
                    } else {
                        novoProduto.setQtd(qtdDeProduto);
                        break;
                    }
                }
    
                // Validação da data de vencimento
                let dataDevencimento: string;
                while (true) {
                    dataDevencimento = this.prompt("Qual o vencimento?");
                    const dataAtual = new Date();
                    const dataVencimento = new Date(dataDevencimento);
                    if (isNaN(dataVencimento.getTime())) {
                        console.log("Data inválida. Por favor, insira uma data no formato correto.");
                    } else if (dataVencimento < dataAtual) {
                        console.log("A data de vencimento não pode ser menor que a data atual.");
                    } else {
                        novoProduto.setVencimento(dataDevencimento);
                        break;
                    }
                }
            
                // Validação do tipo de produto
                let tipoProduto: string;
                while (true) {
                    tipoProduto = this.prompt("Qual o tipo do produto? (Fruta, Legume, Verdura)");
                    if (!Object.values(TipoProduto).includes(tipoProduto as TipoProduto)) {
                        console.log("Tipo de produto inválido, escolha entre 'Fruta', 'Legume', ou 'Verdura'.");
                    } else {
                        novoProduto.setTipo(tipoProduto as TipoProduto);
                        break;
                    }
                }
    
                // Registra o produto após todas as validações
                this.router.registrarProdutoRouter(novoProduto);
            
                // Pergunta se deseja adicionar outro produto ou voltar para a tela principal
                const escolha = this.prompt("Deseja adicionar outro produto? (s/n) ");
                if (escolha.toLowerCase() !== 's') {
                    continueAdding = false;
                }
            }
            
            // Após o loop, retorna para a tela principal
            this.router.ps.FirstScreen(); // Chama o método FirstScreen diretamente de Router
        }
    }
    
        

