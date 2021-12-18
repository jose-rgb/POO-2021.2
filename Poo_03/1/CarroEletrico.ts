import { Carro } from "./Carro";

class CarroEletrico extends Carro {
    autonomiaBateria: number;

    constructor(placa: string, ano: number, modelo: string, autonomiaBateria: number){
        super(placa, ano, modelo);
        this.autonomiaBateria = autonomiaBateria;
    }
}

//teste
const veiculo3 = new CarroEletrico("JOS1R27", 2022, "Sport", 400);
console.log(veiculo3)