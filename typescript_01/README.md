# Atividade da Semana 03 🎯

```
1) Verifique nas alternativas abaixo quais compilam ou não. Explique o motivo: a) let a = 10; 
a = "2"; 
b) let b: any = 10; 
b = 2; 
c) let c: number = 10; 
c = 2; 
2) Dada a função soma abaixo, tente executar os scripts das alternativas e exiba os  eventuais resultados: 
function soma(x: number, y?: any): number { 
 return x + y 
} 
a) console.log(soma(1, 2)); 
b) console.log(soma(1, "2")); 
c) console.log(soma(1)); 
3) Crie uma enum com as siglas dos estados “PI”, “CE”, “MA” e implemente as duas  alternativas abaixo: 
a) Crie um laço usando for para imprimir esses valores; 
b) Crie um laço que imprima os índices dessa enum e diga o que aconteceu. 
4) Sobre enums, implemente o seguinte: 
a) Crie uma enum chamada DiasSemana com os valores representando os dias  da semana segunda a domingo; 
b) Crie um namespace com mesmo nome e dentro dele crie uma função chamada  isDiaUtil recebe um parâmetro do tipo DiasSema e retorna false se for um  sábado ou domingo e retorna true caso contrário; 
c) Escreva também um script que declara uma variável do tipo da enum e que  testa a função DiasSemana.isDiaUtil(). 
5) Crie uma função chamada exibir receba como parâmetro um “rest parameter”  representando strings. A função deve exibir no log cada um dos elementos do “rest  parameter”. Chame a função usando diferentes quantidade de parâmetros  conforme abaixo: 
exibir(“a”, “b”); 
exibir(“a”, “b”, “c”); 
exibir(“a”, “b”, “c”, “d”);
```
### ⚠️ Como estou usando o ts-node-dev para executar os arquivos .ts, e o gerenciador yarn, para executar basta:
```
yarn ts-node-dev (nome do arquivo)
```