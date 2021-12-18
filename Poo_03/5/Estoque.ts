import { Produto } from "./Produto";
import { ProdutoPerecivel } from "./ProdutoPerecivel";

export class Estoque {
    private produtos: ProdutoPerecivel[]  = [];
    private produtosVencidos: ProdutoPerecivel[] = [];

    inserir(produto: ProdutoPerecivel){
        var response = ""
        let produtoConsultado = this.consultarId(produto);

        if(produtoConsultado == null) {
            this.produtos.push(produto)
            response = "Produto adicionado com sucesso.";

        } else {
            response = "Impossível Adicionar produto com mesmo Id."
        }

        console.log(response)
    }

    consultarId(produto: ProdutoPerecivel){
        var consulta:  number = 0

        for (var i = 0; i < this.produtos.length; i++) {
            if (this.produtos[i].getId() == produto.getId()) {
                consulta += 1;
            } 
        }

        if (consulta == 0) {
           return null;
        } else {
            return 202;
        }

    }

    getProdutos() {
        return this.produtos;
    }

    getProdutosPereciveisVencidos() {
        
        for (var i = 0; i < this.produtos.length; i++) {
            if (this.produtos[i].verificarValidade() == "Produto Vencido") {
                this.produtosVencidos.push(this.produtos[i])
            } 
        }

        return this.produtosVencidos;
    }
}

//testes
//Instanciando objetos 
var produto = new ProdutoPerecivel(1, "Cerveja", 1, 3.50, '19/12/2022');
var produto1 = new ProdutoPerecivel(1, "Cerveja", 1, 3.50, '19/12/2022');
var estoque = new Estoque();

//utilizando o metodo para tentar inseir 2 objetos com mesmo id.
estoque.inserir(produto);
estoque.inserir(produto1);

//Criando produtos com prazo de validade vencida
var produto2 = new ProdutoPerecivel(2, "Pão", 1, 3.50, '19/12/2020');
var produto3 = new ProdutoPerecivel(3, "Miojo", 1, 3.50, '18/12/2020');

//inserindo no estoque
estoque.inserir(produto2);
estoque.inserir(produto3);

//consultando produtos pereciveis do estoque com o método
console.log(estoque.getProdutosPereciveisVencidos());
