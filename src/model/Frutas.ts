import Produtos from "../model/Produtos";
import { IProdutos } from "./IProdutos";
import type Database from "../db/Database";
import { TipoProduto } from "./TipoProduto";

export default class Frutas extends Produtos implements IProdutos {

  constructor(nome: string, preco: number, qtd: number, vencimento: string) {
    super();
    this.setNome(nome);
    this.setPreco(preco);
    this.setQtd(qtd);
    this.setVencimento(vencimento);
    this.setTipo(TipoProduto.Fruta);
  }

  public verificaValidadeIProdutos(): string {
    let dataAtual = new Date();
    let dataVencimento = new Date(this.vencimento);
    let dataLimite = new Date(dataAtual);

    dataLimite.setDate(dataAtual.getDate() + 25);

    if (dataVencimento < dataAtual) {
      return "Produto vencido";
    } else if (dataVencimento <= dataLimite) {
      return "Produto está para vencer";
    }
    return "Produto está na validade";
  }

}