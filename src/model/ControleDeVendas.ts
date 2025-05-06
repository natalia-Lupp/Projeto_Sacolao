	import type Database from "../db/Database";

	export default class ControleDeVendas {
		private db: Database;

		constructor(db: Database) {
			this.db = db;
		}

		public vendaDeProduto(nomeProduto: string, qtdVendida: number): string {
    const produto = this.db.getProcuraProdutoPorNome(nomeProduto); // Buscando o produto no Database

    // Verifica se o produto existe
    if (!produto) {
        return `Produto ${nomeProduto} não encontrado no estoque.`;
    }

    // Verifica se a quantidade vendida é um número positivo
    if (isNaN(qtdVendida) || qtdVendida <= 0) {
        return "Quantidade inválida. A quantidade de venda deve ser um número positivo.";
    }

    // Verifica se há quantidade suficiente no estoque
    const quantidadeDisponivel = produto.getQtd();
    if (!this.verificarEstoqueSuficiente(quantidadeDisponivel, qtdVendida)) {
        return `Estoque insuficiente para o produto ${nomeProduto}. Disponível: ${quantidadeDisponivel.toFixed(2)} quilos.`;
    }

    // Atualiza a quantidade do produto no estoque após a venda
    const novaQuantidade = quantidadeDisponivel - qtdVendida;
    produto.setQtd(novaQuantidade);

    // Registra a quantidade vendida
    produto.registroDeVenda(qtdVendida);  // Aqui soma a quantidade vendida no registro

    console.log(`Quantidade restante de ${nomeProduto}: ${produto.getQtd().toFixed(2)} quilos.`);

    return `${qtdVendida} quilo(s) de ${nomeProduto} vendidas com sucesso.`;
}


		// Método para verificar se há estoque suficiente
		public verificarEstoqueSuficiente(quantidadeDisponivel: number, qtdVendida: number): boolean {
			return quantidadeDisponivel >= qtdVendida;
		}

		// Método para calcular a quantidade total de produtos vendidos no estoque
		public calcularTotalProdutosVendidos(): number {
			let totalVendidos = 0;

			this.db.produtosDb.forEach(produto => {
				// Verificando se qtdVendida é um número válido antes de somar
				if (!isNaN(produto.getqtdVendida())) {
					totalVendidos += produto.getqtdVendida();  // Soma as quantidades vendidas
				}
			});

			return totalVendidos;
		}

		public calcularValorVendaProduto(nomeProduto: string, qtdVendida: number): number {
			const produto = this.db.getProcuraProdutoPorNome(nomeProduto); // Buscando o produto no banco de dados
		
			if (!produto) {
				throw new Error(`Produto ${nomeProduto} não encontrado.`);
			}
		
			// Obtém o preço do produto
			const precoProduto = produto.getPreco();
		
			if (isNaN(precoProduto)) {
				throw new Error(`Preço do produto ${nomeProduto} não encontrado.`);
			}
		
			// Calcula o valor da venda para o produto
			const valorVenda = precoProduto * qtdVendida;
		
			return valorVenda; // Agora retornando como número
		}
		


		public calcularTotalControle(): { valorTotal: number } {
			let valorTotal = 0;

			// Percorre todos os produtos registrados e soma a quantidade vendida e o valor total
			this.db.produtosDb.forEach(produto => {
				const preco = produto.getPreco();
				const qtdVendida = produto.getqtdVendida();

				// Verifica se o preço e a quantidade vendida são números válidos antes de somar
				if (!isNaN(preco) && !isNaN(qtdVendida)) {
					valorTotal += preco * qtdVendida;  // Soma o valor total das vendas
				}
			});

			return { valorTotal };
		}

	}