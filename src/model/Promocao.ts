  export abstract class Promocao {
    // Método abstrato para ser implementado pelas subclasses
    abstract promocaoEspecial(): number;
  
    public verificarPromocaoSegunda(valor: number): number {
      const hoje = new Date();
      const diaDaSemana = hoje.getDay(); // Pega o dia da semana (0 = domingo, 1 = segunda, etc.)
  
      if (diaDaSemana === 1) { // Se for segunda-feira
        const descontoSegunda = 0.2; // Por exemplo, 20% de desconto
        return valor * (1 - descontoSegunda); // Aplica o desconto diretamente
      }
      return valor; // Se não for segunda-feira, não aplica desconto
    }
  }
  

