export class Calculadora2 {
    op1: number;
    op2: number;

    constructor(op1: number, op2: number) {
        this.op1 = op1;
        this.op2 = op2;
    }

    adicionar() {
        return `Soma dos operandos é: ${this.op1 + this.op2}`;
    }

}

//teste
const teste = new Calculadora2(2, 3);
console.log(teste.adicionar());
