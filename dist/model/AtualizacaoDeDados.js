"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class AtualizacaoDeDados {
    constructor(db) {
        this.db = db;
    }
    // Método para atualizar o preço do produto com desconto
    atualizarPrecoProduto(nomeProduto, novoPreco, desconto = 0) {
        const produto = this.db.getProcuraProdutoPorNome(nomeProduto); // Buscar produto pelo nome
        // Verifica se o produto existe
        if (!produto) {
            return `Produto ${nomeProduto} não encontrado no estoque.`;
        }
        // Aplica o desconto se necessário
        let precoFinal = novoPreco;
        if (desconto > 0) {
            let precoComDesconto = novoPreco - (novoPreco * (desconto / 100));
            // Verifica se o desconto não torna o preço negativo
            if (precoComDesconto < 0) {
                return "O desconto não pode ser maior que o preço do produto.";
            }
            precoFinal = precoComDesconto;
            console.log(`Desconto de ${desconto}% aplicado. Novo preço: R$ ${precoComDesconto.toFixed(2)}`);
        }
        // Atualiza o preço no produto
        produto.setPreco(precoFinal);
        // Atualiza o banco de dados
        const sucesso = this.db.atualizarProdutoDb(nomeProduto, produto);
        if (sucesso) {
            return `Preço do produto ${nomeProduto} atualizado para R$ ${precoFinal.toFixed(2)}`;
        }
        else {
            return `Erro ao atualizar o preço do produto ${nomeProduto}.`;
        }
    }
    // Método para atualizar o nome do produto
    atualizarNomeProduto(nomeProduto, novoNome) {
        const produto = this.db.getProcuraProdutoPorNome(nomeProduto); // Buscar produto pelo nome
        // Verifica se o produto existe
        if (!produto) {
            return `Produto ${nomeProduto} não encontrado no estoque.`;
        }
        // Atualizando o nome
        produto.setNome(novoNome);
        // Atualiza o banco de dados
        const sucesso = this.db.atualizarProdutoDb(nomeProduto, produto);
        if (sucesso) {
            return `Nome do produto atualizado para ${novoNome}.`;
        }
        else {
            return `Erro ao atualizar o nome do produto ${nomeProduto}.`;
        }
    }
    // Método para atualizar a quantidade do produto
    atualizarQuantidadeProduto(nomeProduto, novaQuantidade) {
        const produto = this.db.getProcuraProdutoPorNome(nomeProduto); // Buscar produto pelo nome
        // Verifica se o produto existe
        if (!produto) {
            return `Produto ${nomeProduto} não encontrado no estoque.`;
        }
        // Verifica se a quantidade é válida
        if (novaQuantidade < 0) {
            return "A quantidade não pode ser negativa.";
        }
        // Atualizando a quantidade
        produto.setQtd(novaQuantidade);
        // Atualiza o banco de dados
        const sucesso = this.db.atualizarProdutoDb(nomeProduto, produto);
        if (sucesso) {
            return `Quantidade do produto ${nomeProduto} atualizada para ${novaQuantidade}.`;
        }
        else {
            return `Erro ao atualizar a quantidade do produto ${nomeProduto}.`;
        }
    }
}
exports.default = AtualizacaoDeDados;
