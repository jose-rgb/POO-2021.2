//1) Converta em arrow function a seguinte função:
function ehPar(n: number): boolean{
    return (n % 2) == 0;
}


//arrow function
const ehPar2 = (n: number) => {
    return (n % 2) == 0;
}

//outro modelo
const ehPar3 = (n: number) => (n % 2) == 0;
