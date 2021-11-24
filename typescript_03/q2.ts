/*
2. Considere o trecho de código abaixo e descreva o que acontece com a execução  do código abaixo: 
*/
let a : number[] = [1,2,3,4,5];  

for (let i : number = 0; i <= a.length; i++) { 
    console.log(a[i]); 
} 

/*
Nesse caso esse vai ser o resultado:
1
2
3
4
5
undefined

Pois como a condição é para a variavel i ser menor ou igual
ao tamanho da lista, o ultimo termo que vai ser impreso e undefined.
Para ressolver esse problema basta trocar o sinal de menor ou igual
por o de apenas menor que:
*/
for (let i : number = 0; i < a.length; i++) { 
    console.log(a[i]); 
}

/*Assim o resultado séra
1
2
3
4
5

imprimindo apenas os valores da lista, pois a condição
mudou para menor que o tamanho da lista.
*/