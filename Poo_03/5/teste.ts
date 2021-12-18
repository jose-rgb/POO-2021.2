import { Produto } from "./Produto";
import { ProdutoPerecivel } from "./ProdutoPerecivel";

var produtos: ProdutoPerecivel[] = [];

var produto = new ProdutoPerecivel(1, "Cerveja", 1, 3.50, '19/12/2020')
var produto2 = new ProdutoPerecivel(2, "erveja", 1, 3.50, '19/12/2020')
var produto3 = new ProdutoPerecivel(3, "Cerveja", 1, 3.50, '19/12/2021')

produtos.push(produto )
produtos.push(produto2 )
produtos.push(produto3 )
//console.log(produtos[1].getId())

var produtosVencidos: ProdutoPerecivel[] = [];


for (var i = 0; i < produtos.length; i++) {
    if (produtos[i].verificarValidade( ) == "Produto Vencido") {
        produtosVencidos.push(produto)
    } 
}

var res = produto2.verificarValidade()
//console.log(res)
console.log(produtos[0].verificarValidade())