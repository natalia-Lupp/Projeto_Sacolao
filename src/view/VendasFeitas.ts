import PromptSync from "prompt-sync";
import type Router from "../control/Router";

export default class VendasFeitas {
    private prompt = PromptSync();
    private router: Router;

    constructor(router: Router) {
        this.router = router;
    }

   
    // Função principal que lida com a venda de um único produto ou múltiplos produtos
    public RegistrarVendasScreen(): void {
        let continuarVenda = true;
        let totalVenda = 0;  // Armazena o total da venda da sessão atual
    
        while (continuarVenda) {
            // Perguntar se o usuário deseja vender um único item ou múltiplos
            const tipoVenda = this.prompt("Você deseja vender um único item ou múltiplos? (1 - Único / 2 - Múltiplos): ");
    
            if (tipoVenda === "1") {
                // Venda de um único item
                const produto = this.prompt("Digite o nome do produto: ");
                const qtdVendida = parseInt(this.prompt("Digite a quantidade vendida (em quilos): "), 10);
    
                if (isNaN(qtdVendida) || qtdVendida <= 0) {
                    console.log("Quantidade inválida. A quantidade de venda deve ser um número positivo.");
                    continue;
                }
    
                const resultadoVenda = this.venderProduto(produto, qtdVendida);
                totalVenda += resultadoVenda.valorVenda;
                console.log(resultadoVenda.mensagem);
                console.log(`Valor de venda do produto ${produto}: R$ ${resultadoVenda.valorVenda.toFixed(2)}`);
    
            } else if (tipoVenda === "2") {
                // Venda de múltiplos produtos (passando um array de dados)
                let produtosVendidos = this.getProdutosMúltiplos();
                produtosVendidos.forEach(({ nome, quantidade }) => {
                    const resultadoVenda = this.venderProduto(nome, quantidade);
                    totalVenda += resultadoVenda.valorVenda;
                    console.log(resultadoVenda.mensagem);
                    console.log(`Valor de venda do produto ${nome}: R$ ${resultadoVenda.valorVenda.toFixed(2)}`);
                });
    
            } else {
                console.log("Opção inválida. Tente novamente.");
                continue;
            }
    
            // Perguntar se o usuário deseja realizar outra venda
            const resposta = this.prompt("Deseja realizar outra venda? (s/n): ").toLowerCase();
            if (resposta !== 's') {
                continuarVenda = false; // Sai do loop se a resposta for diferente de 's'
            }
        }
    
        // Exibe o total da venda realizada na sessão atual
        console.log("\nVenda finalizada!");
        console.log(`Total de produtos vendidos: R$ ${totalVenda.toFixed(2)}`);
    
        // Chama o método para mostrar o total de vendas acumuladas
        this.mostrarTotaisDeVendas();

         // Perguntar ao cliente o que ele deseja fazer após a venda
         const resposta = this.prompt("Deseja realizar outra venda? (s - Continuar comprando / n - Voltar para a tela inicial): ").toLowerCase();
        
         if (resposta === 'n') {
             this.router.ps.FirstScreen();  // Volta para a tela principal
             continuarVenda = false;  // Sai do loop
         } else if (resposta !== 's') {
             console.log("Opção inválida. Por favor, escolha 's' para continuar comprando ou 'n' para voltar.");
         }
    }
    
    // Função que processa a venda de um único produto
    private venderProduto(nomeProduto: string, qtdVendida: number) {
        const produtoExiste = this.router.produtosController.verificarProdutoExistente(nomeProduto);
        if (!produtoExiste) {
            return { mensagem: `Produto ${nomeProduto} não encontrado no estoque.`, valorVenda: 0 };
        }
    
        // Realizar a venda
        const resultadoVenda = this.router.controleDeVendas.vendaDeProduto(nomeProduto, qtdVendida);
        const valorVenda = this.router.controleDeVendas.calcularValorVendaProduto(nomeProduto, qtdVendida);
        return { mensagem: `Venda do produto ${nomeProduto} realizada com sucesso!`, valorVenda };
    }

    // Função para pegar os produtos e quantidades para venda em múltiplos
    private getProdutosMúltiplos() {
        const produtosVendidos = [];
        let continuarProduto = true;

        while (continuarProduto) {
            const nomeProduto = this.prompt("Digite o nome do produto: ");
            const qtdVendida = parseInt(this.prompt("Digite a quantidade vendida (em quilos): "), 10);

            if (isNaN(qtdVendida) || qtdVendida <= 0) {
                console.log("Quantidade inválida. A quantidade de venda deve ser um número positivo.");
                continue;
            }

            produtosVendidos.push({ nome: nomeProduto, quantidade: qtdVendida });

            const resposta = this.prompt("Deseja adicionar mais produtos? (s/n): ").toLowerCase();
            if (resposta !== 's') {
                continuarProduto = false; // Sai do loop se a resposta for diferente de 's'
            }
        }

        return produtosVendidos;
    }

    private mostrarTotaisDeVendas(): void {
        // Acessa o total de produtos vendidos
        const totalProdutosVendidos = this.router.controleDeVendas.calcularTotalProdutosVendidos();
        // Acessa o valor total das vendas
        const { valorTotal } = this.router.controleDeVendas.calcularTotalControle();

        console.log(`\nTotais de Vendas`);
        console.log(`Total de produtos vendidos: ${totalProdutosVendidos.toFixed(2)} Quilos`);
        console.log(`Valor total das vendas: R$ ${valorTotal.toFixed(2)}`);
    }


    
}

