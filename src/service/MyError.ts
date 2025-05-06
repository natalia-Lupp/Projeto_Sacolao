export default class MyError extends Error {
    constructor(message: string) {
        super(message);
        //this.name = "MyError";  // Definindo o nome da classe de erro
        
    }
}
