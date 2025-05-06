"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Promocao = void 0;
class Promocao {
    verificarPromocaoSegunda(valor) {
        const hoje = new Date();
        const diaDaSemana = hoje.getDay(); // Pega o dia da semana (0 = domingo, 1 = segunda, etc.)
        if (diaDaSemana === 1) { // Se for segunda-feira
            const descontoSegunda = 0.2; // Por exemplo, 20% de desconto
            return valor * (1 - descontoSegunda); // Aplica o desconto diretamente
        }
        return valor; // Se não for segunda-feira, não aplica desconto
    }
}
exports.Promocao = Promocao;
