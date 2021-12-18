import { Calculadora2 } from "../2/Calculadora";

class CalculadoraCientifica extends Calculadora2{

    constructor(op1: number, op2: number) {
        super(op1, op2)
    }

    exponenciar() {
        return `A exponenciação dos operandos é: ${this.op1 ** this.op2}`;
    }
}

//teste
const teste = new CalculadoraCientifica(2, 3);
console.log(teste.exponenciar());
