import Router from "./control/Router";
import PrimaryScreen from "./view/PrimayScreen";

new PrimaryScreen(new Router());

// import ControleDeVendas from "./model/ControleDeVendas";
// import Frutas from "./model/Frutas";
// import Legumes from "./model/Legumes";
// import Verduras from "./model/Verduras";
// import Database from "./db/Database";
// import ProdutosController from "./control/ProdutosController";
// import { TipoProduto } from "./model/TipoProduto";

// // Instanciando produtos e banco de dados
// const maca = new Frutas("maca", 2.5, 10.00, "2023-12-31");
// const laranja = new Frutas("laranja", 10, 100.00, "2025-12-31");
// const cenoura = new Legumes("cenoura", 8.0, 15.47, "2024-11-20");
// const acelga = new Verduras("acelga", 5.5, 20.00, "2025-12-31");
// const pera = new Legumes(" ", 0, 17.53, "2024-11-20");

// const db = new Database();
// const produtosController = new ProdutosController(db);
// const controleVendas = new ControleDeVendas(db);


// console.log("\nTESTA PRODUTOS ADICIONADOS:");

// // Adicionando produtos ao banco de dados
// produtosController.registerNovoProdutoController(maca);
// produtosController.registerNovoProdutoController(laranja);
// produtosController.registerNovoProdutoController(cenoura);
// //produtosController.db.addProdutoDb(cenoura);


// console.log("\nTESTA LISTAGEM:");

// // Teste de Adicionar Produtos
// console.log("Produtos registrados db:");
// db.listarProdutos(); //bando de dados
// console.log("Produtos registrados controller:");
// produtosController.listarSemSerPorTipo();

// console.log("Produtos dado!!!!:");
// produtosController.listarTodosOsDadosController();

// //produtosController.getProdutoPorNome("maca");


// // Exemplo de teste: Listar produtos do tipo "Fruta"
// console.log("Listando produtos do tipo 'Fruta':");
// produtosController.listarProdutosPorTipoController(TipoProduto.Fruta);

// // Exemplo de teste: Listar produtos do tipo "Legume"
// console.log("Listando produtos do tipo 'Legume':");
// produtosController.listarProdutosPorTipoController(TipoProduto.Legume);

// // Exemplo de teste: Listar produtos do tipo "Verdura"
// console.log("Listando produtos do tipo 'Verdura':");
// produtosController.listarProdutosPorTipoController(TipoProduto.Verdura);



// console.log("\nTESTA TUDO QUE IMPACTA EM VENDAS:");


// // Teste de Venda de Produto
// console.log("\nTeste de venda de produto:");
// let resultadoVenda = controleVendas.vendaDeProduto("maca", 5); 
// console.log(resultadoVenda);  // Esperado: "5 unidade(s) de maca vendidas com sucesso."

// resultadoVenda = controleVendas.vendaDeProduto("laranja", 150); 
// console.log(resultadoVenda);  // Esperado: "Estoque insuficiente para o produto laranja."

// resultadoVenda = controleVendas.vendaDeProduto("cenoura", 2.3); 
// console.log(resultadoVenda);  // Esperado: "Estoque insuficiente para o produto laranja."


// // Verificando estoque após vendas
// console.log(`Estoque de maca restante: ${maca.getQtd()}`);  // Esperado: 5 unidades
// console.log(`Estoque de laranja restante: ${laranja.getQtd()}`);  // Esperado: 100 unidades


// // Teste de Calcular Total de Produtos Vendidos
// console.log("\nTeste de calcular total de produtos vendidos:");
// const totalVendidos = controleVendas.calcularTotalProdutosVendidos();
// console.log(`Total de de quilos vendidos: ${totalVendidos.toFixed(3)}`);  // espera 7.3 kilos

// console.log("Produtos dado!!!!:");
// produtosController.listarTodosOsDadosController();


// // Teste de Calcular Total Controle
// console.log("\nTeste de calcular total controle:");
// const totalControle = controleVendas.calcularTotalControle();
// console.log(`Valor total da venda: R$ ${totalControle.valorTotal.toFixed(2)}`);

// // Teste: Aplicando desconto
// console.log("\nAplicando descontos:");
// maca.aplicarDesconto();  // Esperado: maca recebeu desconto
// laranja.aplicarDesconto();  // Esperado: laranja não tem desconto (sem mudança no preço)
// cenoura.aplicarDesconto();  // Esperado: cenoura recebeu desconto
// acelga.aplicarDesconto();  // Esperado: acelga recebeu desconto

// // Verificando os preços após o desconto
// console.log("\nPreços após desconto:");
// console.log(`Preço de maca: R$ ${maca.getPreco().toFixed(2)}`);
// console.log(`Preço de laranja: R$ ${laranja.getPreco().toFixed(2)}`);
// console.log(`Preço de cenoura: R$ ${cenoura.getPreco().toFixed(2)}`);
// console.log(`Preço de acelga: R$ ${acelga.getPreco().toFixed(2)}`);

// console.log("\nvenda com desconto //pra sair o valor correto tem que desativar a venda anterior");
// let resultadoVenda2 = controleVendas.vendaDeProduto("maca", 5); 
// console.log(resultadoVenda2);  // Esperado: "5 unidade(s) de maca vendidas com sucesso."

// resultadoVenda2 = controleVendas.vendaDeProduto("cenoura", 2.3); 
// console.log(resultadoVenda2);  // Esperado: "Estoque insuficiente para o produto laranja."


// console.log("Produtos dado!!!!:");
// produtosController.listarTodosOsDadosController();

// console.log("\nTeste de calcular total apos desconto:");
// const totalControle2 = controleVendas.calcularTotalControle();
// console.log(`Valor total da venda: R$ ${totalControle2.valorTotal.toFixed(2)}`);

// // Teste: Desativando desconto
// console.log("\nDesativando descontos:");
// maca.desativarDesconto();  // Esperado: maca teve desconto desativado e o preço voltou ao normal
// cenoura.desativarDesconto();  // Esperado: cenoura teve desconto desativado e o preço voltou ao normal

// // Verificando os preços após desativar o desconto
// console.log("\nPreços após desativar desconto:");
// console.log(`Preço de maca: R$ ${maca.getPreco().toFixed(2)}`);
// console.log(`Preço de cenoura: R$ ${cenoura.getPreco().toFixed(2)}`);

// console.log("Produtos dado!!!!:");
// produtosController.listarTodosOsDadosController();


// // testa promoção de segunda

// console.log("\nPreços na segunda feira :");
// maca.aplicarPromocao();
// console.log(`Preço de maca após promoção: R$ ${maca.getPreco().toFixed(2)}`);
// console.log(`Preço de laranja após promoção: R$ ${laranja.getPreco().toFixed(2)}`);
// console.log(`Preço de cenoura após promoção: R$ ${cenoura.getPreco().toFixed(2)}`);
// console.log(`Preço de acelga após promoção: R$ ${acelga.getPreco().toFixed(2)}`);


// let resultadoVenda3 = controleVendas.vendaDeProduto("maca", 5); 
// console.log(resultadoVenda3);  // Esperado: "5 unidade(s) de maca vendidas com sucesso."

// resultadoVenda3 = controleVendas.vendaDeProduto("laranja", 150); 
// console.log(resultadoVenda3);  // Esperado: "Estoque insuficiente para o produto laranja."

// resultadoVenda3 = controleVendas.vendaDeProduto("cenoura", 2.3); 
// console.log(resultadoVenda3);  // Esperado: "Estoque insuficiente para o produto laranja."

// console.log("\nTeste de calcular total apos promoção:");
// const totalControle3 = controleVendas.calcularTotalControle();
// console.log(`Valor total da venda: R$ ${totalControle3.valorTotal.toFixed(2)}`);



// console.log("\nTESTE DE REMOÇÕES:");

// // Teste de Remoção de Produto
// console.log("\nTeste de remoção de produto:");
// produtosController.apagarProdutoController("maca");  // Tentando remover o produto "maca"

// //remoção de um produto pelo índice
// console.log("\nTeste de remoção de produto por index:");
// const indiceDoProduto = 3;  // Suponha que você queira remover o produto no índice 1
// produtosController.removerProdutoPorIndexController(indiceDoProduto);

// // Verificando se o produto foi removido
// console.log("\nProdutos após remoção:");
// db.listarProdutos();  // Esperado: Não deve listar "maca"

// console.log("Produtos dado!!!!:");
// produtosController.listarTodosOsDadosController();




// /* TESTA TUDO DE NOVO SÒ QUE COM DADOS MUDADOS

// // Testando as atualizações
// console.log("\nTestando a atualização do produto");

// produtosController.atualizarNomeProdutoController("maca", "maçã verde");
// produtosController.atualizarPrecoProdutoController("maçã verde", 120);
// produtosController.atualizarQuantidadeProdutoController("maçã verde", 60);
// produtosController.atualizarVencimentoProdutoController("maçã verde", "2026-12-31");

// // Verificando se as alterações foram aplicadas corretamente
// console.log("\nProduto atualizado:");
// const produtoModificado = db.getProcuraProdutoPorNome("maçã verde");
// console.log(produtoModificado);  // Esperado: Produto B com preço 120, quantidade 60 e vencimento atualizado

// // Teste de Venda de Produto
// console.log("\nTeste de venda de produto:");
// let restVendaModificado = controleVendas.vendaDeProduto("maçã verde", 5);
// console.log(restVendaModificado);  // Esperado: "5 unidade(s) de Produto B vendidas com sucesso."

// resultadoVenda = controleVendas.vendaDeProduto("laranja", 150);
// console.log(resultadoVenda);  // Esperado: "Estoque insuficiente para o produto laranja."

// resultadoVenda = controleVendas.vendaDeProduto("cenoura", 2.3);
// console.log(resultadoVenda);  // Esperado: "Estoque insuficiente para o produto cenoura."


// // Teste de Calcular Total de Produtos Vendidos
// console.log("\nTeste de calcular total de produtos vendidos:");
// const totalVendidosNovas = controleVendas.calcularTotalProdutosVendidos();
// console.log(`Total de quilos vendidos: ${totalVendidosNovas.toFixed(3)}`);  // Esperado: 5.000 kg de Produto B

// // Teste de Calcular Total Controle
// console.log("\nTeste de calcular total controle:");
// const totalControleNovos = controleVendas.calcularTotalControle();
// console.log(`Valor total da venda: R$ ${totalControleNovos.valorTotal.toFixed(2)}`);

// */