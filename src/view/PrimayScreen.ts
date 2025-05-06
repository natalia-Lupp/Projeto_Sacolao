import promptSync from "prompt-sync";
import type Router from "../control/Router";
import CadastroScreen from "../view/CadastroScreen";
import RemoverScreen from "./RemoverScreen";
import ListaScreen from "./ListaScreen";
import AtualizarScreen from "./AtualizarScreen";
import AplicarDesconto from "./AplicarDesconto";
import VendasFeitas from "./VendasFeitas";

export default class PrimaryScreen {
	private cadastroScreen!: CadastroScreen;
	private removerScreen!: RemoverScreen;
	private atualizarScreen!: AtualizarScreen;
	private listaScreen!: ListaScreen;
	private aplicarDesconto!: AplicarDesconto;
	private vendasFeitas!: VendasFeitas;
	private prompt = promptSync();
	private router!: Router;

	constructor(router: Router) {
		this.router = router;
		this.cadastroScreen = new CadastroScreen(this.router);
		this.removerScreen = new RemoverScreen(this.router);
		this.atualizarScreen = new AtualizarScreen(this.router);
		this.listaScreen = new ListaScreen(this.router);
		this.aplicarDesconto = new AplicarDesconto(this.router);
		this.vendasFeitas = new VendasFeitas(this.router);

	}

	public FirstScreen(): void {
		let showScreen: boolean = true;
		while (showScreen) {
			const choice = this.prompt(
				"Escolha:\n1 - Cadastrar \n2 - Listar\n3 - Atualizar\n4 - Desconto e Promoção\n5 - Vendas\n6 - Apagar\n7 --Sair\n",
			);

			switch (choice) {
				case "1":
					let choice2 = this.prompt(
						"Escolha:\n1 - Cadastrar Produto\n2 - Voltar\n",
					);
					if (choice2 === "1") {
						this.cadastroScreen.registrarProdutosScreen();
					}
					break;

				case "2":
					let choice3 = this.prompt(//controler vazia
						"Escolha:\n1 - Listar Produtos\n2 - Voltar\n",
					);
					if (choice3 === "1")
						this.listaScreen.listarProdutoScreen();

					break;

				case "3":
					let choice4 = this.prompt( //tenho que puxar por index // controler vazia
						"Escolha:\n1 - Atualizar Produtos\n2 - Voltar\n",
					);
					if (choice4 === "1")
						this.atualizarScreen.atualizarProdutoScreen();

					break;

				case "4":
					let choice5 = this.prompt( //tenho que puxar por index // controler vazia
						"Escolha:\n1 - Aplicar Desconto e Promoções\n2 - Voltar\n",
					);
					if (choice5 === "1")
						this.aplicarDesconto.aplicaDescontoScreen();

					break;

				case "5":
					let choice6 = this.prompt( //tenho que puxar por index // controler vazia
						"Escolha:\n1 - vendas\n2 - Voltar\n",
					);
					if (choice6 === "1")
						this.vendasFeitas.RegistrarVendasScreen();
					break;


				case "6":
					let choice7 = this.prompt( //tenho que puxar por index // controler vazia
						"Escolha:\n1 - Remover Produtos\n2 - Voltar\n",
					);
					if (choice7 === "1")
						this.removerScreen.apagarProdutosScreen();

					break;

				case "7":
					showScreen = false; // Sair
					break;

				default:
					console.log("Escolha inválida. Tente novamente.");
					break;
			}
		}
	}
}
