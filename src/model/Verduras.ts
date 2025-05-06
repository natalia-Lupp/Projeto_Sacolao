  import Produtos from "../model/Produtos";
  import { IProdutos } from "./IProdutos";
  import { TipoProduto } from "./TipoProduto";


  export default class Verduras extends Produtos implements IProdutos {
    constructor(nome: string, preco: number, qtd: number, vencimento: string) {
      super();
      this.setNome(nome);
      this.setPreco(preco);
      this.setQtd(qtd);
      this.setVencimento(vencimento);
      this.setTipo(TipoProduto.Verdura);
    }

    public verificaValidadeIProdutos(): string {
      let dataAtual = new Date();
      let dataVencimento = new Date(this.vencimento);
      let dataLimite = new Date(dataAtual);
      let vencimentoVerificado: string;

      dataLimite.setDate(dataAtual.getDate() + 15);

      if (dataVencimento < dataAtual) {
        vencimentoVerificado = `${this.getNome()} está vencido`;
      } else if (dataVencimento <= dataLimite) {
        vencimentoVerificado = `${this.getNome()} está para vencer`;
      } else {
        vencimentoVerificado = `${this.getNome()} está na validade`;
      }
    
      return vencimentoVerificado;
    }

  }
