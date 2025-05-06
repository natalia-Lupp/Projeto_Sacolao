import type Produtos from "../model/Produtos";

export default class OutputService {
	public printObjectState(obj: Produtos) {
		console.log("----------------");
		console.log(obj);
	}
}
