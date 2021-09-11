//5) Crie uma função chamada exibir receba como parâmetro um “rest parameter”  representando strings. A função deve exibir no log cada um dos elementos do “rest  parameter”. Chame a função usando diferentes quantidade de parâmetros  conforme abaixo: 

function exibir(...strs) {
    console.log(...strs)
}

exibir('a', 'b'); 
exibir('a', 'b', 'c'); 
exibir('a', 'b', 'c', 'd');
