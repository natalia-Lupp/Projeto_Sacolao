import PromptSync from "prompt-sync";
import type Router from "../control/Router";

export default class AtualizarScreen {
    private prompt = PromptSync();
    private router: Router;

    constructor(router: Router) {
        this.router = router;
    }

    public async atualizarProdutoScreen(): Promise<void> {
        const nomeProduto = this.prompt("Digite o nome do produto que deseja atualizar: ");
        
        // Verifica se o produto existe, usando o controller
        const produto = this.router.produtosController.getProdutoPorNome(nomeProduto);

        if (!produto) {
            console.log(`Produto com nome "${nomeProduto}" não encontrado.`);
            return;  // Interrompe o processo se o produto não existir
        }

        console.log(`Produto encontrado: ${produto.getNome()}`);
        console.log("Você pode atualizar os dados:");
        console.log(`Nome atual: ${produto.getNome()}`);
        console.log(`Preço atual: R$ ${produto.getPreco().toFixed(2)}`);
        console.log(`Quantidade atual: ${produto.getQtd()}`);
        console.log(`Vencimento atual: ${produto.getVencimento()}`);
        
        // Pergunta ao usuário o que ele deseja atualizar
        const opcao = this.prompt(
            "Escolha o que deseja atualizar: \n1. Nome \n2. Preço \n3. Quantidade \n4. Vencimento \nEscolha uma opção: "
        );
        
        let novoNome = produto.getNome();
        let novoPreco = produto.getPreco();
        let novaQtd = produto.getQtd();
        let novoVencimento = produto.getVencimento();
    
        // Atualiza a variável com os novos valores conforme a escolha
        switch (opcao) {
            case "1":
                novoNome = this.prompt("Digite o novo nome do produto: ");
                
                break;
            case "2":
                novoPreco = parseFloat(this.prompt("Digite o novo preço do produto: "));
                break;
            case "3":
                novaQtd = parseInt(this.prompt("Digite a nova quantidade do produto: "));
                break;
            case "4":
                novoVencimento = this.prompt("Digite o novo vencimento do produto: ");
                break;
            default:
                console.log("Opção inválida!");
                return; // Interrompe caso a opção seja inválida
        }
    
        // Atualiza os valores no produto
        produto.setNome(novoNome);
        produto.setPreco(novoPreco);
        produto.setQtd(novaQtd);
        produto.setVencimento(novoVencimento);

        // Chama o método do controller para atualizar o produto no banco de dados
        this.router.produtosController.atualizarProdutoController(nomeProduto, produto);
    }
}
