  import Produtos from "../model/Produtos";
  import MyError from "../service/MyError";
  import Frutas from "../model/Frutas";
  import Legumes from "../model/Legumes";
  import Verduras from "../model/Verduras";
  import { TipoProduto } from "../model/TipoProduto";

  export default class Database {
    public produtosDb: Produtos[] = [];

    constructor() {
      this.iniciarProdutosDb();
    }

    public iniciarProdutosDb(): void {
      const uva = new Frutas("uva", 3.5, 10.00, "2023-12-21");
      const acelga = new Verduras("acelga", 7.50, 35.00, "2025-12-31");
      const beteraba = new Legumes("beteraba", 4.20, 13.17, "2024-11-20");
    
      this.produtosDb.push(uva, acelga, beteraba);
      console.log("Produtos iniciais carregados no banco de dados.");
    }

    //add

    public addProdutoDb(produto: Produtos): void {
      // Validação do nome
      if (produto.getNome().trim() === "") {
        throw new MyError("Não pode ser um nome vazio");
      }
  
      // Validação do preço (não pode ser menor ou igual a zero)
      if (produto.getPreco() <= 0) {
        throw new MyError("O preço deve ser maior que zero");
      }
  
      // Validação da quantidade (não pode ser menor ou igual a zero, e deve ser em quilos)
      if (produto.getQtd() <= 0) {
        throw new MyError("A quantidade deve ser maior que zero e em quilos");
      }
  
      // Validação da data de vencimento (não pode ser menor que a data atual)
      const dataAtual = new Date();
      const dataVencimento = new Date(produto.getVencimento());
      if (dataVencimento < dataAtual) {
        throw new MyError("A data de vencimento não pode ser menor que a data atual");
      }
  
      this.produtosDb.push(produto);
    }

    // remove

    public removeProdutoDb(nome: string): void {
      const index = this.produtosDb.findIndex((produto) => produto.getNome() === nome);
      if (index !== -1) {
        this.produtosDb.splice(index, 1);
        console.log(`${nome} foi removido do estoque.`);
      } else {
        console.log(`${nome} não encontrado no estoque.`);
      }
    }

    public removeProdutoPorIndexDb(index: number): void {
      if (index >= 0 && index < this.produtosDb.length) {
          const produtoRemovido = this.produtosDb.splice(index, 1);
          console.log(`${produtoRemovido[0].getNome()} foi removido do estoque.`);
      } else {
          console.log(`Índice inválido: Nenhum produto encontrado.`);
      }
  }


//localiza
    public getProdutosPorIndexDb(index: number): Produtos {
      return this.produtosDb[index];
    }

    public getProcuraProdutoPorNome(nome: string): Produtos | undefined {
      for (let i = 0; i < this.produtosDb.length; i++) {
        if (this.produtosDb[i].getNome() === nome) {
          return this.produtosDb[i];
        }
      }
      console.log("Produto não encontrado.");
      return undefined;
    }

    //lista

    public listarProdutos(): void {
      if (this.produtosDb.length === 0) {
        console.log("Sem estoque");
      } else {
        this.produtosDb.forEach((produto) => {
          console.log(produto.getNome());
        });
      }
    }

    public listarTodosOsDadosDosProdutos(): void {
      if (this.produtosDb.length === 0) {
          console.log("Sem estoque");
      } else {
          this.produtosDb.forEach((produto) => {
              console.log(`Nome: ${produto.getNome()}, Preço: ${produto.getPreco()}, Quantidade: ${produto.getQtd()}, Vencimento: ${produto.getVencimento()}, Tipo: ${produto.getTipo()}`);
          });
      }
  }

    public listarProdutosPorTipo(tipo: TipoProduto): void {
      const produtosFiltrados = this.produtosDb.filter(produto => produto.getTipo() === tipo);
      
      if (produtosFiltrados.length === 0) {
        console.log(`Nenhum produto encontrado do tipo: ${tipo}`);
      } else {
        produtosFiltrados.forEach(produto => {
          console.log(produto.getNome());
        });
      }
    }


    // Atualiza um produto no banco de dados
    public atualizarProdutoDb(nome: string, novoProduto: Produtos): boolean {
      const index = this.produtosDb.findIndex((produto) => produto.getNome() === nome);
  
      if (index !== -1) {
          // Aqui, garantimos que estamos substituindo corretamente os dados
          this.produtosDb[index] = novoProduto;
          console.log(`Produto ${nome} foi atualizado com sucesso.`);
          return true;
      } else {
          console.log(`Erro: Produto com o nome ${nome} não encontrado.`);
          return false;
      }
  }
  }
