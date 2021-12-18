import { Produto } from "./Produto";

export class ProdutoPerecivel extends Produto {
    dataValidade: String;

    constructor(id: number, descricao: string, quantidade: number, valor: number, dataValidade: String) {
        super(id, descricao, quantidade, valor);
        this.dataValidade = dataValidade
    }

    repor(valor: number) {
        return this.getQuantidade() + valor;
    }

    darBaixa(valor: number) {
        return this.getQuantidade() - valor;
    }

    verificarValidade() {
        var response = "";
        
        //data atual
        var dataAtual = new Date();
        var diaAtual = dataAtual.getDate();
        var mesAtual = dataAtual.getMonth() + 1;
        var anoAtual = dataAtual.getFullYear();
        
        //tratando a data recebida como string
        var dataConvertida = this.dataValidade.split("/")

        //transformando em number
        var diaRecebido = parseInt(dataConvertida[0]);
        var mesRecebido = parseInt(dataConvertida[1]);
        var anoRecebido = parseInt(dataConvertida[2]);

        //verificação do ano
        if (anoRecebido < anoAtual) {
            response = "Produto Vencido";
        } 

        if (anoRecebido > anoAtual) {
            response = "Produto dentro do prazo de validade";
        } 

        //se o ano for igual, verificar o mês
        if (anoRecebido == anoAtual) {
            if(mesRecebido < mesAtual) {
                response = "Produto Vencido";
            }

            if(mesRecebido > mesAtual) {
                response = "Produto dentro do prazo de validade";
            }
        }

        //se o ano e o mes for igual, verificar o dia
        if (anoRecebido == anoAtual) {
            if (mesRecebido == mesAtual) {
                if (diaRecebido < diaAtual) {
                    response = "Produto Vencido";
                }

                if (diaRecebido >= diaAtual) {
                    response = "Produto dentro do prazo de validade";
                }
            }
        }

        return response;
    }

    //getters and setters
    getDataValidade() {
        return this.dataValidade;
    }

    setDataValidade(n: string){
        this.dataValidade = n;
    }
}

//teste
const teste = new ProdutoPerecivel(1, "Cerveja", 1, 3.50, '19/12/2021');
console.log(teste.verificarValidade());


