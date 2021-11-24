//4. Declare uma string com o texto “Instituto Federal do Piauí” e use métodos específicos  para: 
let texto: string = "Instituto Federal do Piauí"
//a. Exibir a string toda em maiúsculo; 
console.log(texto.toUpperCase());
//b. Retornar o caractere da posição 10; 
console.log(texto[10])
//c. Retornar a última posição da vogal “o”; 
console.log(texto.lastIndexOf('o'));
//d. Dividir a frase em um array de strings tendo como delimitador os caracteres de  espaço.
let textoDividido  = texto.split(" ");
console.log(textoDividido)