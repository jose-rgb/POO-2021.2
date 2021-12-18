export class Veiculo {
    placa: string;
    ano: number;

    constructor(placa: string, ano: number) {
        this.placa = placa;
        this.ano = ano;
    }
}

//teste
const veiculo1 = new Veiculo("JOS1R26", 2021);
console.log(veiculo1)