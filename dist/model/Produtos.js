"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Promocao_1 = require("./Promocao");
class Produtos extends Promocao_1.Promocao {
    constructor() {
        super(...arguments);
        this.descontoAtivo = false;
        this.valorDesconto = 0;
        this.precoOriginal = 0; // Variável para armazenar o preço original
    }
    // Implementação do método promocaoEspecial() - pode aplicar uma lógica personalizada de promoção
    promocaoEspecial() {
        let precoComDesconto = this.preco;
        // Verifica se o produto está a 5 dias ou menos do vencimento
        let dataAtual = new Date();
        let dataVencimento = new Date(this.vencimento);
        let diffTime = dataVencimento.getTime() - dataAtual.getTime();
        let diffDays = Math.ceil(diffTime / (1000 * 3600 * 24)); // Calcula a diferença em dias
        if (diffDays <= 5) { // Se o produto estiver a 5 dias ou menos do vencimento
            console.log(`${this.nome} tem promoção especial porque está a ${diffDays} dias do vencimento.`);
            precoComDesconto = this.preco * 0.7; // Aplica 30% de desconto
        }
        // Aplica o desconto de segunda-feira, se for o caso
        precoComDesconto = super.verificarPromocaoSegunda(precoComDesconto);
        return precoComDesconto;
    }
    getNome() {
        return this.nome;
    }
    setNome(nome) {
        this.nome = nome;
    }
    getPreco() {
        return this.preco;
    }
    setPreco(preco) {
        this.preco = preco;
    }
    getQtd() {
        return this.qtd;
    }
    setQtd(qtd) {
        this.qtd = qtd;
    }
    getVencimento() {
        return this.vencimento;
    }
    setVencimento(vencimento) {
        this.vencimento = vencimento;
    }
    getTipo() {
        return this.tipo;
    }
    setTipo(tipo) {
        this.tipo = tipo;
    }
    getqtdVendida() {
        return this.qtdVendida;
    }
    setqtdVendida(qtdVendida) {
        this.qtdVendida = qtdVendida;
    }
    novoPrecoIProdutos(novoPreco) {
        let precoAtualizado;
        if (novoPreco <= 0) {
            console.log("valor deve ser maior que zero");
            return 0;
        }
        this.setPreco(novoPreco);
        console.log(`Novo preço de ${this.getNome()}: R$ ${this.getPreco()}`);
        precoAtualizado = this.getPreco();
        return precoAtualizado;
    }
    registroDeVenda(qtd) {
        if (isNaN(this.qtdVendida)) {
            this.qtdVendida = 0;
        }
        // Aqui vamos garantir que estamos apenas somando a quantidade vendida corretamente.
        this.qtdVendida += qtd;
    }
    verificaValidadeIProdutos() {
        let dataAtual = new Date();
        let dataVencimento = new Date(this.vencimento);
        let dataLimite = new Date(dataAtual);
        let vencimentoVerificado;
        dataLimite.setDate(dataAtual.getDate());
        if (dataVencimento < dataAtual) {
            return vencimentoVerificado = `${this.getNome()} está vencido`;
        }
        else if (dataVencimento <= dataLimite) {
            return vencimentoVerificado = `${this.getNome()} está para vencer`;
        }
        return vencimentoVerificado = `${this.getNome()} está na validade`;
    }
    // Métodos para aplicar desconto de acordo com o tipo de produto
    aplicarDesconto() {
        if (!this.tipo) {
            console.log("Tipo de produto não definido.");
            return;
        }
        // Definindo o valor do desconto de acordo com o tipo
        if (this.tipo === "Fruta") {
            this.valorDesconto = 0.5;
        }
        else if (this.tipo === "Verdura") {
            this.valorDesconto = 1.0;
        }
        else if (this.tipo === "Legume") {
            this.valorDesconto = 0.8;
        }
        else {
            console.log("Tipo de produto desconhecido. Nenhum desconto aplicado.");
            return;
        }
        // Armazenando o preço original antes de aplicar o desconto
        this.precoOriginal = this.preco;
        // Garantindo que o preço não será negativo após o desconto
        const precoComDesconto = this.preco - this.valorDesconto;
        if (precoComDesconto < 0) {
            this.valorDesconto = this.preco; // O desconto não pode ser maior que o preço
            this.preco = 0; // O preço não pode ficar negativo
        }
        else {
            this.preco = precoComDesconto;
        }
        console.log(`${this.nome} recebeu um desconto de R$ ${this.valorDesconto.toFixed(2)}. Novo preço: R$ ${this.preco.toFixed(2)}`);
        this.descontoAtivo = true; // Marcar que o desconto está ativo
    }
    // Método para desativar o desconto e voltar o preço original
    desativarDesconto() {
        if (this.descontoAtivo) {
            this.preco = this.precoOriginal; // Restaurando o preço original
            this.descontoAtivo = false;
            console.log(`${this.nome} teve o desconto desativado e o preço foi restaurado para R$ ${this.preco.toFixed(2)}.`);
        }
        else {
            console.log(`${this.nome} não tem desconto ativo.`);
        }
    }
    // Aplicando a promoção (segunda-feira)
    aplicarPromocao() {
        this.preco = this.verificarPromocaoSegunda(this.preco);
    }
}
exports.default = Produtos;
