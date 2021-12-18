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
    
    constructor(hora:number, minutos: number, segundos: number) {
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
        return `hora ${this.hora}:${this.minutos}:${this.segundos}`
    }

}

//testes
const hora = new Hora(19, 30, 44);
console.log(hora.horario());

