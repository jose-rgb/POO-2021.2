//3) Crie uma enum com as siglas dos estados “PI”, “CE”, “MA” e implemente as duas  alternativas abaixo:
enum Estados {
    "PI",
    "CE", 
    "MA"    
};

//a) Crie um laço usando for para imprimir esses valores; 
for (let i: number = 0; i < Object.keys(Estados).length / 2; i ++) {
    console.log(Estados[i]);
}

//b) Crie um laço que imprima os índices dessa enum e diga o que aconteceu. 
for (let i: number = 0; i < Object.keys(Estados).length / 2; i ++) {
    let estado: string = Estados[i];

    console.log(Object.keys(Estados).indexOf(estado));
}
