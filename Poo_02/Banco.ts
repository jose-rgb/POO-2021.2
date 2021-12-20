import { Conta } from "./Conta";
import { Poupanca } from "./Poupanca";

export class Banco {
    private contas: Conta[] = [];

    inserirConta(conta: Conta): void{
        this.contas.push(conta)
    }

    consultar(numero: string): Conta | Poupanca {
        let contaConsultada: Poupanca | Conta;

        for (let conta of this.contas) {
            if (conta.numero == numero) {
                contaConsultada = conta;
                break;
            }
        }
        
        return contaConsultada;
    }

    //retorna o indice ou -1 se n existir no array
     private consultarPorIndice(indiceRecebido: string): number {
        //-1 = n existe no array
        let indice: number = -1;

        for (let i: number = 0; i < this.contas.length; i++) {
            if(this.contas[i].numero == indiceRecebido) {
                indice = i;
                break;
            }
        }

        return indice;
    }

    alterar(conta: Conta){
        let indice: number = this.consultarPorIndice(conta.numero);

        if(indice != -1) {
            this.contas[indice] = conta;
        }
    }

    excluir(indiceRecebido: string): void {
         let indice: number = this.consultarPorIndice(indiceRecebido)

         if(indice != -1) {
            for (let i:number = indice; i < this.contas.length; i++) {
                this.contas[i] = this.contas[i+1];
            }

            this.contas.pop();
        }
    }

    depositar(numero: string, valor: number): void  {
        let contaConsultada = this.consultar(numero);

        if(contaConsultada != null) {
            contaConsultada.depositar(valor);
        }
    }

    sacar(numero: string, valor: number) {
        let contaConsultada = this.consultar(numero);

        if(contaConsultada != null) {
            contaConsultada.sacar(valor);
        }
    }

    consultarSaldo(numero: string): number {
        return 2;
    }

    transferir(numeroCredito: string, numeroDebito: string, valor: number): void{
        this.sacar(numeroDebito, valor);
        this.depositar(numeroCredito, valor);
    }

    getContas() {
        return this.contas;
    }

    renderJuros(numero: string) {
        let contaConsultada: Conta | Poupanca = this.consultar(numero);
        let contaExiste = false;

        //condição para atribuir o boolean 
        if(contaConsultada != null) {
            contaExiste = true;
        }

        if (contaExiste != false) {

            //condição  para verificar se o objeto e do tipo: Poupanca
            if(contaConsultada instanceof Poupanca == true) {
                //instanciando objeto provisorio
                let contaProvi: Poupanca = new Poupanca(contaConsultada.numero, contaConsultada.saldo)
                //excluindo conta
                this.excluir(contaConsultada.numero)
                //aplicando metodo
                contaProvi.renderJuros();
                //inserindo novo objeto com os juros no array de conta
                this.inserirConta(contaProvi);
            }
        }
    }
}


//testes
//instanciando objetos
let conta1: Conta = new Conta("1", 100);
let conta2: Conta = new Conta("2", 150);
let conta3: Conta = new Conta("3", 180);
let conta4: Poupanca = new Poupanca("4", 2000);
let conta5: Poupanca = new Poupanca("5", 2500);
let banco: Banco = new Banco();


//inserindo contas no banco
banco.inserirConta(conta1);
banco.inserirConta(conta2);
banco.inserirConta(conta3);
banco.inserirConta(conta4);
banco.inserirConta(conta5);

//testando metodo alterar
banco.alterar(new Conta("1", 250))

//testando metodo consultar
console.log(banco.consultar("2"))

//testando metodo excluir
banco.excluir("3")

//testando metodo depositar
banco.depositar("2", 51)

//testando metodo transferir
banco.transferir("1", "2", 2)

//testanto o metodo para render juros 
// nas contas do tipo poupanca
banco.renderJuros("5")
//testando uma conta que não é poupanca
banco.renderJuros("2")

//verificando as contas no banco 
console.log(banco.getContas())

