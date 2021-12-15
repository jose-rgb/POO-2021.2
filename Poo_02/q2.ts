/*
2. Crie uma classe Hora que tenha: 
a. Três atributos privados e definidos no construtor chamados hora, minutos e  segundos; 
b. Métodos públicos para ler hora, minuto e segundo de forma individual;
c. Um método 
público para retorne a hora no formato “hh:mm:ss”. 
*/

class Hora {
    private hora: number;
    private minutos: number;
    private segundos: number;
    
    constructor(hora, minutos, segundos) {
        this.hora = hora;
        this.minutos = minutos;
        this.segundos = segundos;
    }

    lerHora() {
        return this.hora;
    }

    lerMinutos() {
        return this.minutos;
    }

    lerSegundos() {
        return this.segundos;
    }

    horario() {
        return `${this.hora}:${this.minutos}:${this.segundos}`
    }

}

/*testes
const operacao = new Calculadora(3,2);
console.log(operacao.somar());
console.log(operacao.subtrair());
*/