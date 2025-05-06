import Frutas from "../model/Frutas";
import Database from "../db/Database";
import ProdutosController from "../control/ProdutosController";
import { TipoProduto } from "../model/TipoProduto";

// Função de teste para adicionar produtos
describe('Teste Jester - Adicionar Produtos', () => {
  let db: Database;
  let produtosController: ProdutosController;

  beforeEach(() => {
    // Inicializando banco de dados e controller antes de cada teste
    db = new Database();
    produtosController = new ProdutosController(db);
  });

  it('Deve adicionar corretamente um produto tipo Fruta', () => {
    const maca = new Frutas("Maçã", 2.5, 10.00, "2023-12-31");

    // Adicionar o produto ao banco de dados via controller
    produtosController.registerNovoProdutoController(maca);

    // Verificar se o produto foi adicionado no banco de dados
    const produtosRegistrados = db.produtosDb;
    expect(produtosRegistrados).toHaveLength(1); // Deve ter 1 produto
    expect(produtosRegistrados[0].getNome()).toBe("Maçã");
    expect(produtosRegistrados[0].getTipo()).toBe(TipoProduto.Fruta);
  });

});
