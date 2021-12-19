export class Conta {
    private _numero: string;
    private _saldo: number;

    constructor(numero: string, saldoInicial: number) {
        this._numero = numero;
        this._saldo = saldoInicial;
    }

    sacar(valor: number): void {
        if(this._saldo >= valor) {
            this._saldo = this._saldo - valor;
        }
    }

    depositar(valor: number): void {
        this._saldo = this._saldo + valor;
    }

    transferir(contaDestino: Conta, valor: number): void {
        this.sacar(valor);
        contaDestino.depositar(valor);
    }

    get numero(): string {
        return this._numero;
    }

    get saldo(): number {
        return this._saldo;
    }

}