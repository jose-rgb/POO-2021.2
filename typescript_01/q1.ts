//1) Verifique nas alternativas abaixo quais compilam ou não. Explique o motivo: a) let a = 10; 
// a)
 let a = 10;
 a = '2'
// Não compila, O tipo 'string' não pode ser atribuído ao tipo 'número'.

// b)
let b: any = 10; 
b = 2; 
/*
compila, pois pode usar any sempre que não quiser que um determinado valor
cause erros de verificação de tipo.
*/

// c)
let c: number = 10; 
c = 2; 
//compila, pois foi posteriormente foi estabelecido um valor do mesmo tipo
