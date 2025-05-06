"use strict";
/*
import ControleDeVendas from "./model/ControleDeVendas";
import Frutas from "./model/Frutas";
import Legumes from "./model/Legumes";
import Verduras from "./model/Verduras";
import Database from "./db/Database";
import ProdutosController from "./control/ProdutosController";

// Mocking Database
jest.mock("./db/Database");

describe("Controle de Vendas", () => {
  let maca: Frutas;
  let laranja: Frutas;
  let cenoura: Legumes;
  let acelga: Verduras;
  let db: Database;
  let produtosController: ProdutosController;
  let controleVendas: ControleDeVendas;

  beforeEach(() => {
    // Instanciando produtos e banco de dados antes de cada teste
    maca = new Frutas("maca", 2.5, 10.00, "2023-12-31");
    laranja = new Frutas("laranja", 10, 100.00, "2025-12-31");
    cenoura = new Legumes("cenoura", 8.0, 15.47, "2024-11-20");
    acelga = new Verduras("acelga", 5.5, 20.00, "2025-12-31");
    
    db = new Database();
    produtosController = new ProdutosController(db);
    controleVendas = new ControleDeVendas(db);

    // Adicionando os produtos ao banco de dados
    produtosController.registerNovoProdutoController(maca);
    produtosController.registerNovoProdutoController(laranja);
    produtosController.registerNovoProdutoController(cenoura);
  });

  test("Deve registrar produtos corretamente", () => {
    // Verificar se os produtos foram adicionados
    expect(db.listarProdutos()).toContainEqual(maca);
    expect(db.listarProdutos()).toContainEqual(laranja);
    expect(db.listarProdutos()).toContainEqual(cenoura);
  });

  test("Deve realizar venda de produto com sucesso", () => {
    // Teste de venda de produto
    const resultadoVenda = controleVendas.vendaDeProduto("maca", 5);
    expect(resultadoVenda).toBe("5 unidade(s) de maca vendidas com sucesso.");
  });

  test("Deve falhar na venda de produto devido a estoque insuficiente", () => {
    // Tentativa de venda de mais produtos do que o estoque disponível
    const resultadoVenda = controleVendas.vendaDeProduto("laranja", 150);
    expect(resultadoVenda).toBe("Estoque insuficiente para o produto laranja.");
  });

  test("Deve calcular o total de produtos vendidos corretamente", () => {
    controleVendas.vendaDeProduto("maca", 5);
    controleVendas.vendaDeProduto("cenoura", 2.3);

    const totalVendidos = controleVendas.calcularTotalProdutosVendidos();
    expect(totalVendidos).toBeCloseTo(7.3, 3); // 7.3 kg (contando com 5 de maca + 2.3 de cenoura)
  });

  test("Deve calcular o valor total de vendas corretamente", () => {
    controleVendas.vendaDeProduto("maca", 5);
    controleVendas.vendaDeProduto("cenoura", 2.3);

    const totalControle = controleVendas.calcularTotalControle();
    expect(totalControle.valorTotal).toBeCloseTo(103.59, 2); // Valor esperado para as vendas de maca e cenoura
  });

  test("Deve aplicar desconto corretamente", () => {
    maca.aplicarDesconto();
    laranja.aplicarDesconto();
    cenoura.aplicarDesconto();
    acelga.aplicarDesconto();

    expect(maca.getPreco()).toBeLessThan(10.00);  // Espera-se que maca tenha preço alterado
    expect(laranja.getPreco()).toBe(100.00); // Laranja não tem desconto
    expect(cenoura.getPreco()).toBeLessThan(15.47); // Espera-se que cenoura tenha preço alterado
    expect(acelga.getPreco()).toBeLessThan(20.00); // Espera-se que acelga tenha preço alterado
  });

  test("Deve desativar desconto corretamente", () => {
    maca.desativarDesconto();
    cenoura.desativarDesconto();

    expect(maca.getPreco()).toBe(10.00); // Espera-se que maca tenha preço voltado ao normal
    expect(cenoura.getPreco()).toBe(15.47); // Espera-se que cenoura tenha preço voltado ao normal
  });

  test("Deve remover produto corretamente", () => {
    produtosController.apagarProdutoController("maca");

    const produtosRestantes = db.listarProdutos();
    expect(produtosRestantes).not.toContainEqual(maca);  // Espera-se que maca tenha sido removido
  });

  test("Deve atualizar o produto corretamente", () => {
    produtosController.atualizarNomeProdutoController("maca", "maçã verde");
    produtosController.atualizarPrecoProdutoController("maçã verde", 120);
    produtosController.atualizarQuantidadeProdutoController("maçã verde", 60);
    produtosController.atualizarVencimentoProdutoController("maçã verde", "2026-12-31");

    const produtoAtualizado = db.getProcuraProdutoPorNome("maçã verde");
    expect(produtoAtualizado).toBeDefined();
    expect(produtoAtualizado?.getPreco()).toBe(120);  // Verificando se o preço foi atualizado
    expect(produtoAtualizado?.getQtd()).toBe(60);  // Verificando se a quantidade foi atualizada
    expect(produtoAtualizado?.getVencimento()).toBe("2026-12-31");  // Verificando se a data de vencimento foi atualizada
  });
});


import ControleDeVendas from "./model/ControleDeVendas";
import Frutas from "./model/Frutas";
import Legumes from "./model/Legumes";
import Verduras from "./model/Verduras";
import Database from "./db/Database";
import ProdutosController from "./control/ProdutosController";

// Mocking Database
jest.mock("./db/Database");

describe("Controle de Vendas", () => {
  let maca: Frutas;
  let laranja: Frutas;
  let cenoura: Legumes;
  let acelga: Verduras;
  let db: Database;
  let produtosController: ProdutosController;
  let controleVendas: ControleDeVendas;

  beforeEach(() => {
    // Instanciando produtos e banco de dados antes de cada teste
    maca = new Frutas("maca", 2.5, 10.00, "2023-12-31");
    laranja = new Frutas("laranja", 10, 100.00, "2025-12-31");
    cenoura = new Legumes("cenoura", 8.0, 15.47, "2024-11-20");
    acelga = new Verduras("acelga", 5.5, 20.00, "2025-12-31");

    db = new Database();
    produtosController = new ProdutosController(db);
    controleVendas = new ControleDeVendas(db);

    // Adicionando os produtos ao banco de dados
    produtosController.registerNovoProdutoController(maca);
    produtosController.registerNovoProdutoController(laranja);
    produtosController.registerNovoProdutoController(cenoura);
  });

  test("Deve adicionar produtos com sucesso", () => {
    // Confirmar que os produtos foram adicionados corretamente ao banco de dados
    expect(db.listarProdutos()).toContainEqual(maca);
    expect(db.listarProdutos()).toContainEqual(laranja);
    expect(db.listarProdutos()).toContainEqual(cenoura);
  });

  test("Deve listar todos os produtos corretamente", () => {
    // Teste de listagem de produtos
    const produtosListados = db.listarProdutos();
    expect(produtosListados).toHaveLength(3); // Espera-se que três produtos tenham sido adicionados
    expect(produtosListados).toContainEqual(maca);
    expect(produtosListados).toContainEqual(laranja);
    expect(produtosListados).toContainEqual(cenoura);
  });

  test("Deve retornar erro ao tentar adicionar produto com nome duplicado", () => {
    // Tentar adicionar um produto com o mesmo nome
    const resultado = produtosController.registerNovoProdutoController(maca);
    expect(resultado).toBe("Produto já existente.");
  });

  test("Deve retornar erro ao tentar adicionar produto com dados inválidos", () => {
    // Criando um produto inválido (exemplo: nome vazio ou preço negativo)
    const produtoInvalido = new Frutas("", 0, -5.00, "2023-12-31");
    const resultado = produtosController.registerNovoProdutoController(produtoInvalido);
    expect(resultado).toBe("Dados inválidos para o produto.");
  });

  test("Deve falhar na venda de produto se o estoque for insuficiente", () => {
    // Tentativa de venda de um produto com estoque insuficiente
    const resultadoVenda = controleVendas.vendaDeProduto("maca", 15);
    expect(resultadoVenda).toBe("Estoque insuficiente para o produto maca.");
  });

  test("Deve retornar erro ao tentar remover produto inexistente", () => {
    // Tentando remover um produto que não está no banco de dados
    const resultadoRemocao = produtosController.apagarProdutoController("banana");
    expect(resultadoRemocao).toBe("Produto não encontrado.");
  });

  test("Deve realizar venda de produto corretamente", () => {
    // Teste de venda de produto
    const resultadoVenda = controleVendas.vendaDeProduto("maca", 5);
    expect(resultadoVenda).toBe("5 unidade(s) de maca vendidas com sucesso.");
  });

  test("Deve confirmar que o estoque de produtos foi atualizado após venda", () => {
    controleVendas.vendaDeProduto("maca", 5);
    
    // Verificar se o estoque foi atualizado corretamente
    const macaAtualizada = db.getProcuraProdutoPorNome("maca");
    expect(macaAtualizada?.getQtd()).toBe(5); // Espera-se que o estoque de maca seja 5 após a venda
  });
});
test("Deve listar todos os produtos corretamente", () => {
  const produtosListados = db.listarProdutos();
  expect(produtosListados).toHaveLength(3);
  expect(produtosListados).toContainEqual(maca);
  expect(produtosListados).toContainEqual(laranja);
  expect(produtosListados).toContainEqual(cenoura);
});
test("Deve retornar erro ao tentar adicionar produto com dados inválidos", () => {
  const produtoInvalido = new Frutas("", 0, -5.00, "2023-12-31");
  const resultado = produtosController.registerNovoProdutoController(produtoInvalido);
  expect(resultado).toBe("Dados inválidos para o produto.");
});
test("Deve falhar na venda de produto se o estoque for insuficiente", () => {
  const resultadoVenda = controleVendas.vendaDeProduto("maca", 15);
  expect(resultadoVenda).toBe("Estoque insuficiente para o produto maca.");
});
test("Deve retornar erro ao tentar remover produto inexistente", () => {
  const resultadoRemocao = produtosController.apagarProdutoController("banana");
  expect(resultadoRemocao).toBe("Produto não encontrado.");
});
test("Deve confirmar que o estoque de produtos foi atualizado após venda", () => {
  controleVendas.vendaDeProduto("maca", 5);
  const macaAtualizada = db.getProcuraProdutoPorNome("maca");
  expect(macaAtualizada?.getQtd()).toBe(5);
});
*/ 
