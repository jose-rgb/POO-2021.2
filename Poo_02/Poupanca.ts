import { Conta } from "./Conta";

export class Poupanca extends Conta {
    private _taxaJuros: number;

    constructor(numero: string, saldoInicial: number){
        super(numero, saldoInicial);
        this._taxaJuros = saldoInicial;
    }

    renderJuros(): void {
        this.depositar(this.saldo * this._taxaJuros/100);
    }

    getTaxaJuros(): number {
        return this._taxaJuros;
    }
}

