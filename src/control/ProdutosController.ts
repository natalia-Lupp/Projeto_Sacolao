import type Database from "../db/Database";
import Produtos from "../model/Produtos";
import { TipoProduto } from "../model/TipoProduto";
import ControleDeVendas from "../model/ControleDeVendas";
import MyError from "../service/MyError";

export default class ProdutosController {
    public db!: Database;
    public controleDeVendas!:ControleDeVendas;

    constructor(db: Database) {
        this.db = db;
        this.controleDeVendas = new ControleDeVendas(db); // evitar erro?
    }
    // add produto
    public getNovoProdutoController(): Produtos { // não entdendi diereito se tenho que instacial outra classe tipo fruta ou fazer oq
        return new Produtos(); //acho que aqui vai um try catch
    }

    // Sobrecarga do método registerNovoProdutoController
    public registerNovoProdutoController<T extends Produtos>(produto: T): void;
    public registerNovoProdutoController<T extends Produtos>(nome: string, preco: number, qtd: number, vencimento: string, tipo: TipoProduto): void;

    public registerNovoProdutoController<T extends Produtos>(produtoOrNome: T | string, preco?: number, qtd?: number, vencimento?: string, tipo?: TipoProduto): void {
        if (produtoOrNome instanceof Produtos) {
            // Caso seja um objeto Produto
            try {
                this.db.addProdutoDb(produtoOrNome);
                console.log("O produto foi registrado com sucesso!");
            } catch (error) {
                console.log(error);
            }
        } else {
            // Caso sejam parâmetros individuais
            const produto = new Produtos();
            produto.setNome(produtoOrNome);
            produto.setPreco(preco!);
            produto.setQtd(qtd!);
            produto.setVencimento(vencimento!);
            produto.setTipo(tipo!);

            try {
                this.db.addProdutoDb(produto);
                console.log("O produto foi registrado com sucesso!");
            } catch (error) {
                console.log(error);
            }
        }
    }

    // atualizar produto
    public getAtualizaDadosController(): Produtos {
        return new Produtos();
    }

    public atualizarProdutoController(nome: string, novoProduto: Produtos): void {
        const sucesso = this.db.atualizarProdutoDb(nome, novoProduto);
        
        if (sucesso) {
            console.log(`Produto ${nome} foi atualizado com sucesso.`);
        } else {
            console.log(`Erro em atualizar o produto ${nome}.`);
        }
    }

    // listar produto

    public getListaProdutosController(): Produtos {
        return new Produtos();
    }

    public listarSemSerPorTipo(): void {
        this.db.listarProdutos();
    }

    public listarProdutosPorTipoController(tipo: TipoProduto): void {
        this.db.listarProdutosPorTipo(tipo);
    }

    public listarTodosOsDadosController(): void {
        this.db.listarTodosOsDadosDosProdutos();
    }

    // produra produto por nome

    public getProdutoPorNome(nome: string): Produtos | undefined { // dado vazio
        return this.db.getProcuraProdutoPorNome(nome); // Retorna o produto completo 
    }


    // garente existencia do produto    
    public verificarProdutoExistente(nome: string): boolean {
        const produto = this.db.getProcuraProdutoPorNome(nome);  // Busca no banco
        return produto !== undefined;  // Se encontrar, retorna true, senão false
    }

    // remover produto
    public getRemoveProdutoController(): Produtos {
        return new Produtos();
    }

    public apagarProdutoController(nome: string): void {
        this.db.removeProdutoDb(nome);
    }

    // Método para remover produto por índice
    public removerProdutoPorIndexController(index: number): void {
        try {
            this.db.removeProdutoPorIndexDb(index);
        } catch (error) {
            console.log(error);
        }
    }

    // venda do produto

    public getDadosDeVendasController(): Produtos {
        return new Produtos();
    }

    public vendaDeProdutos(nomeProduto: string, qtdVendida: number): void {
        this.controleDeVendas.vendaDeProduto(nomeProduto, qtdVendida);
    }

}
