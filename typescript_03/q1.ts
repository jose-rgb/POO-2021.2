/*
1. Crie um array de números em typescript e escreva um código que exibe a soma  dos elementos. 
*/
let numbers: number[] = [1, 6, 9, 12];
let soma = 0;

for(var i = 0; i < numbers.length; i++) {
    soma += numbers[i];
}


console.log(soma);