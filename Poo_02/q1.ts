/*
1. Crie uma classe Calculadora que tenha: 

a. Dois atributos privados (operando1 e 2) do tipo number; 
b. Dois métodos públicos, cada um representando uma operação básica;
c. Um construtor onde são passados os operandos e que esses inicializam os  atributos; 

Teste a classe calculadora e seus métodos. Tente acessar os atributos  diretamente e verifique
 o que acontece. 
*/

class Calculadora {
    private operando1: number;
    private operando2: number;
    
    constructor(operando1, operando2) {
        this.operando1 = operando1;
        this.operando2 = operando2;
    }

    somar() {
        return this.operando1 + this.operando2;
    }

    subtrair() {
        return this.operando1 - this.operando2;
    }

}

//testes
const operacao = new Calculadora(3,2);
console.log(operacao.somar());
console.log(operacao.subtrair());