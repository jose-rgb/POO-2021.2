/*
1. Qual a diferença entre objetos e classes? Exemplifique. 

Classes são modelos, objetos são classes em execução,ou seja, objetos são instanciados pelas classes.
Uma outra maneira de notar tal diferença, é pensar que uma classe está para um objeto, assium como 
uma receita está para uma torta, Uma planta pra uma casa.
Exemplo:
*/

//criando uma classe
class Pessoa {
    nome: string;
    dtNascimento: string;
    altura: number;

    constructor(nome: string, dtNascimento: string, altura: number) {
        this.nome = nome;
        this.dtNascimento = dtNascimento;
        this.altura = altura;
    }
}

//instanciando um objeto com a classe
const pessoa = new Pessoa("José", "10/07/1999" ,1.60)
//console.log(pessoa)


/*
2. De forma breve, conceitue atributos e métodos.
 Pesquise e exemplifique um  exemplo de objeto que possua atributos e métodos (notação livre).

Atributos são as características de um objeto, essas características também são conhecidas como variáveis
como por exemplo: os cães, tem alguns atributos, tais como: cor, peso, altura e nome.

Métodos são as ações que os objetos podem exercer quando solicitados, onde podem interagir e se comunicarem com outros objetos
como por exemplo os cães podem: latir, correr, pular.
*/
class cachorro {
    nome: string;
    cor: string;
    peso: number;
    altura: number;

    constructor(nome: string, cor: string, peso:number, altura: number) {
        this.nome = nome;
        this.cor = cor;
        this.peso = peso;
        this.altura = altura;
    }

    latir() {
        //metodo latir
    }

    correr() {
        //metodo correr
    }

    pular() {
        //metodo pular
    }
}

/*
3. A abstração visa focar no que é importante para um sistema.
Você concorda que  um atributo de uma pessoa pode ser importante ou não
dependendo do contexto  do sistema. Enumere na tabela abaixo contextos/sistemas
distintos em que os  atributos abaixo seriam ou não relevantes: 


              Atributo | Sistema em que é importante | Sistema em que  não é importante
                       |                             | 
                peso   |          MMC                |      Bancário
         Tipo de CNH   |         Multas              |      Saúde
         Tipo Sanguíneo|          Saúde              |      Hospedagem
      Habilidade destra|         CNH                 |      Livraria
  Percentual de gordura|         Academia            |      WhatsApp
        Saldo em conta |         Bancário            |      MMC
                 Etnia |           Enem              |      Academia  



4. Considerando os objetos Pessoa e Conta: 
a. Seria interessante em um sistema bancário um objeto "conta" possuir
uma  "pessoa" como um atributo interno representando o titular da conta?

Não, pois o objeto "conta" estaria sujeito a ter somente  um usuário, no caso
o atributo "pessoa", tornando o sistema inviável nas situações em que uma conta
tiver mais de um usuário (Conta conjunta), sendo assim, seria interresante no lugar
do atributo pessoa, existir uma entidade que representa um ou mais de um usuário.

b. Olhando no sentido inverso, seria interessante uma pessoa possuir mais de  uma
conta como atributo? Que elemento da programação estruturada melhor  representaria
o conjunto de contas de uma pessoa? 

Sim, pois assim não existiria o problema de um usuário estar atrelado somente a uma conta.
Sendo assim, seria viável instanciar outro objeto somente com as contas de um usuário e sua identificação


5. Identifique pelo menos 5 objetos de um sistema de controle acadêmico. Ex: aluno. 
                         1. Aluno
                         2. Materias cursadas
                         3. Materias em adamento
                         4.Horário
                         5.Professores


6. Imagine um jogo qualquer. Identifique o máximo de objetos possíveis e eventuais  características
(atributos) e comportamentos (métodos) que os mesmos poderiam  ter. 
                        Objetos
                        1. Jogador
                        2. boot
                        3. Jogador adversário
                       

                        Atributos
                        1 nome
                        2 força de ataque
                        3 força de defesa

                        Métodos
                        atacar(){}
                        defender(){}
                        curar(){}
                        correr(){}
                        pular(){}
                        andar(){}

7. Considerando o exemplo da classe Retangulo dos slides, implemente um método  adicional 
chamado que calcule o perímetro do retângulo e altere a classe  TestaRetangulo para exibir
o cálculo do perímetro. 
*/

class Retangulo {
    lado1: number;
    lado2: number;

    calcularArea() {
        return this.lado1 * this.lado2;
    }

    calcularPerimetro() {
        return 2 * (this.lado1 + this.lado2)
    }
}

/*
8. Crie uma classe Circulo que possua um atributo raio. Crie dois métodos que  calculam a área
e o perímetro. Instancie um objeto dessa classe, atribua um valor  ao raio e exiba a área e o
perímetro chamando os dois métodos definidos. 
*/
class Circulo {
    raio: number;

    constructor(raio: number) {
        this.raio = raio;
    }

    calcularArea() {
        return 3.14 * (this.raio**2);
    }

    calcularPerimetro() {
        return 2 * 3.14 * this.raio;
    }

}

const circulo = new Circulo(5);
console.log(circulo.calcularArea());
console.log(circulo.calcularPerimetro());

/*
9. Crie uma classe chamada SituacaoFinanceira com os atributos valorCreditos e  valorDebitos.
 Crie um método chamado saldo() que retorna/calcula a diferença  entre crédito e débito.
Instancie uma classe SituacaoFinanceira, inicialize os dois  atributos e exiba o resultado
do método saldo().
*/

class SituacaoFinanceira {
    valorCreditos: number;
    valorDebitos: number;

    constructor(valorCreditos: number, valorDebitos: number) {
        this.valorCreditos = valorCreditos;
        this.valorDebitos = valorDebitos;
    }

    saldo() {
        return this.valorCreditos - this.valorDebitos;
    }
}

const situacaoFinanceira = new SituacaoFinanceira(6,5)
console.log(situacaoFinanceira.saldo())