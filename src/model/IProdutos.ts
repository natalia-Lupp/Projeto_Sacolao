export interface IProdutos {
    getNome(): string;
    setNome(nome: string): void;
    getPreco(): number;
    setPreco(preco: number): void;
    getQtd(): number;
    setQtd(qtd: number): void;
    getVencimento(): string;
    setVencimento(vencimento: string): void;
    getTipo(): string;
    setTipo(tipo: string): void;
    
    verificaValidadeIProdutos(): string;

}