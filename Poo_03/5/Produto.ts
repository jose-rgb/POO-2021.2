export class Produto {
    private id: number;
    private descricao: string;
    private quantidade: number;
    private valor: number;

    constructor(id: number, descricao: string, quantidade: number, valor: number) {
        this.id = id;
        this.descricao = descricao;
        this.quantidade = quantidade;
        this.valor = valor;
    }

    repor(valor: number) {
        return this.quantidade + valor;
    }

    darBaixa(valor: number) {
        return this.quantidade - valor;
    }

    //getters and setters
    getId() {
        return this.id;
    }

    setId(n: number){
        this.id = n;
    }

    getDescricao() {
        return this.descricao;
    }

    setDescricao(s: string){
        this.descricao = s;
    }

    getQuantidade() {
        return this.quantidade;
    }

    setQuantidade(n: number){
        this.quantidade = n;
    }

    getValor() {
        return this.valor;
    }

    setValor(n: number){
        this.valor = n;
    }
}

//teste
const teste = new Produto(1, "Cerveja", 1, 3.50 );
console.log(teste.repor(4));
console.log(teste.darBaixa(1));
