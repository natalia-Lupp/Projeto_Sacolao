import Database from "../db/Database";
import PrimaryScreen from "../view/PrimayScreen";
import ProdutosController from "./ProdutosController";
import type Produtos from "../model/Produtos";
import ControleDeVendas from "../model/ControleDeVendas";
import { TipoProduto } from "../model/TipoProduto";

export default class Router {
  public db: Database = new Database();
  public ps: PrimaryScreen = new PrimaryScreen(this);
  public produtosController: ProdutosController = new ProdutosController(this.db);
  public controleDeVendas: ControleDeVendas = new ControleDeVendas(this.db);

  constructor() {
    this.ps.FirstScreen();
  }

  // funções de CRUD: ADD, ATUALIZAR, LISTAR, APAGAR

  // adiciona produto
  public getNovoProdutoRouter(): Produtos {
    return this.produtosController.getNovoProdutoController(); // produto vem vazio pra o metodo de baixo fazer verificações e ate onde entendi não quebra o codigo em caso de erro e tbm por baixo acoplamento de dados
  }

  public registrarProdutoRouter(produto: Produtos): void {
    this.produtosController.registerNovoProdutoController(produto);
  }

  // atualiza o produto
  public getAtualizaDadosrouter(): Produtos {
    return this.produtosController.getAtualizaDadosController();
  }

  public atualizarProdutoRouter(nome: string, novoProduto: Produtos): void {
    this.produtosController.atualizarProdutoController(nome, novoProduto);
  }

  // lista o produto
  public listarProdutosRouter(): void {
    this.db.listarProdutos();
  }

  public listarProdutosSemSerPorTipoRouter(): void {
    this.produtosController.listarSemSerPorTipo();
  }

  // Método refatorado para listar produtos por tipo
  public listarProdutosPorTipoRouter(tipo: TipoProduto): void {
    this.produtosController.listarProdutosPorTipoController(tipo);
  }

  // remover produto

  public getRemoveProdutoController(): Produtos {
    return this.produtosController.getRemoveProdutoController();
  }

  public apagarProdutoRouter(nome: string): void {
    this.produtosController.apagarProdutoController(nome);
  }

  // Método no Router para remover produto por índice
  public removerProdutoPorIndexRouter(index: number): void {
    this.produtosController.removerProdutoPorIndexController(index);
  }

  // Chama vendas
  public vendaDeProdutosRouter(): void {
    this.db.listarProdutos();
  }


  public vendaProduto(nomeProduto: string, qtdVendida: number): void {
    this.produtosController.vendaDeProdutos(nomeProduto, qtdVendida);
  }


}
