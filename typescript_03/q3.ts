/*
3. Declare um array com 10 números e exiba-os em ordem crescente e em ordem  decrescente. 
*/
let array: number[] = [12, 17, 19, 25, 36, 38, 39, 40, 41, 42];

array.sort();
console.log(`Array em ordem crescente: ${array}`)

array.reverse();
console.log(`Array em ordem decrescente: ${array}`)