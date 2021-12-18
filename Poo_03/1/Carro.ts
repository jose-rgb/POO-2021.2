import { Veiculo } from "./Veiculo";

export class Carro  extends Veiculo{
    modelo: string;

    constructor(placa: string, ano: number, modelo: string) {
        super(placa, ano);
        this.modelo = modelo;
    }
}

//teste
const veiculo2 = new Carro("JOS1R25", 2022, "Sport");
console.log(veiculo2)