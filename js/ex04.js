/*   JavaScript - Objetos e funções
1 - Objeto-base para realização dos exercícios a seguir:
*/

let info = {
  personagem: "Margarida",
  origem: "Pato Donald",
  nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
};
/*
Imprima no console uma mensagem de boas-vindas para a personagem acima, incluindo seu 
nome.Valor esperado no console: Bem-vinda, Margarida
Duas formas de resolver o exercício
*/
console.log('Bem-vinda, '+ info.personagem);

console.log('Bem-vinda, '+ info['personagem']);

/*
2 - Insira no objeto uma nova propriedade com o nome de chave "recorrente" e o valor 
"Sim" e, em seguida, imprima o objeto no console.
Valor esperado no console:

  {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
    recorrente: 'Sim'
  };
*/

let info = {
  personagem: "Margarida",
  origem: "Pato Donald",
  nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
  recorrente: "Sim"
};

console.log(info);
/*
3 - Faça um for/in que mostre todas as chaves do objeto.
Valor esperado no console:
  personagem
  origem
  nota
  recorrente
*/
let info = {
  personagem: "Margarida",
  origem: "Pato Donald",
  nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
  recorrente: "Sim"
};

for(let properties in info){
  console.log(properties);
}
/*
4 - Faça um novo for/in, mas agora mostre todos os valores das chaves do objeto.
Valor esperado no console:
  Margarida
  Pato Donald
  Namorada do personagem principal nos quadrinhos do Pato Donald
  Sim
*/
let info = {
  personagem: "Margarida",
  origem: "Pato Donald",
  nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
  recorrente: "Sim",
}

for(let properties in info){
  console.log(info[properties]);
}
/*
5 - Agora, defina um segundo objeto com a mesma estrutura, as mesmas chaves do primeiro
 e os seguintes valores: "Tio Patinhas", "Christmas on Bear Mountain, Dell's Four Color
  Comics #178", "O último MacPatinhas", "Sim".
Valor esperado no console:

Margarida e Tio Patinhas
Pato Donald e Christmas on Bear Mountain, Dell's Four Color Comics #178
Namorada do personagem principal nos quadrinhos do Pato Donald e O último MacPatinhas
Ambos recorrentes
*/

let info = {
  personagem: "Margarida",
  origem: "Pato Donald",
  nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
  recorrente: "Sim"
};
let info2 = {
  personagem: "Tio Patinhas",
  origem: "Christmas on Bear Mountain, Dell’s Four Color Comics #178",
  nota: "O último MacPatinhas",
  recorrente: "Sim"
};

console.log(info.personagem + " e " + info2.personagem)
console.log(info.origem + " e " + info2.origem)
console.log(info.nota + " e " + info2.nota)
if(info.recorrente === 'Sim' && info2.recorrente === 'Sim'){
  console.log('Ambos recorrentes')
}

/*
Parte II - Funções
1 - Crie uma função que receba uma string e retorne true se for um palíndromo, 
ou false, se não for. 

Exemplo de palíndromo: arara.

verificaPalindrome("arara");

Retorno esperado: true

verificaPalindrome("desenvolvimento");

Retorno esperado: false
*/
function verificaPalindrome(palavra) {
  let arrayLetras = palavra.split("");
  let isPalindrome = true;
  for (let index in arrayLetras) {
    if (arrayLetras[index] != palavra[(palavra.length - 1) - index]) {
      isPalindrome = false;
    }
  }
  return isPalindrome;
}

console.log(verificaPalindrome('arara')); //true
console.log(verificaPalindrome('desenvolvimento')); //false
/*
2 - Crie uma função que receba um array de inteiros e retorne o índice do maior valor.

Array de teste: [2, 3, 6, 7, 10, 1];.

Valor esperado no retorno da função: 4.
*/

function indiceDoMaior(numeros) {
  let indiceMaior = 0;
  for (let indice in numeros) {
    if (numeros[indiceMaior] < numeros[indice]) {
      indiceMaior = indice;
    }
  }
  return indiceMaior;
}

console.log(indiceDoMaior([2, 3, 6, 7, 10, 1])); 
/*
3 - Crie uma função que receba um array de inteiros e retorne o índice do menor valor.

Array de teste: [2, 4, 6, 7, 10, 0, -3];.

Valor esperado no retorno da função: 6.
*/

function indiceDoMenor(numeros) {
  let indiceMenor = 0;
  for (let indice in numeros) {
    if (numeros[indiceMenor] > numeros[indice]) {
      indiceMenor = indice;
    }
  }
  return indiceMenor;
}

console.log(indiceDoMenor([2, 4, 6, 7, 10, 0, -3])); 

/*
4 - Crie uma função que receba um array de nomes e retorne o nome 
com a maior quantidade de caracteres.

Array de teste: ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];.

Valor esperado no retorno da função: Fernanda.
*/

function maiorPalavra(palavras) {
  let maiorPalavra = palavras[0];
  for (let indice in palavras) {
    if (maiorPalavra.length < palavras[indice].length) {
      maiorPalavra = palavras[indice];
    }
  }
  return maiorPalavra;
}

console.log(maiorPalavra(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'])); 
/*
5 - Crie uma função que receba um array de inteiros e retorne o inteiro que mais 
se repete.

Array de teste: [2, 3, 2, 5, 8, 2, 3];.

Valor esperado no retorno da função: 2.
*/

function maisRepetido(numeros) {
  let contRepetido = 0;
  let contNumero = 0;
  let indexNumeroRepetido = 0;
  for (let index in numeros) {
  let verificaNumero = numeros[index];
  for (let index2 in numeros) {
  if (verificaNumero === numeros[index2]) {
        contNumero++;
      }
    }
    if (contNumero > contRepetido) {
      contRepetido = contNumero;
      indexNumeroRepetido = index;
    }
    contNumero = 0;
  }
  return numeros[indexNumeroRepetido];
}

console.log(maisRepetido([2, 3, 2, 5, 8, 2, 3])); 

/*
6 - Crie uma função que receba um número inteiro N e retorne o somatório de todos os 
números de 1 até N.

Valor de teste: N = 5.

Valor esperado no retorno da função: 1+2+3+4+5 = 15.
*/

function somaTodosNumeros(numeros) {
  let total = 0;
  for (let index = 1; index <= numeros; index++) {
    total = total + index;
  }
  return total;
}
console.log(somaTodosNumeros(5)); 
/*
7 - Crie uma função que receba uma string word, e outra, uma string ending. 
Verifique se a string ending é o final da string word. 
Considere que a string ending sempre será menor que a string word.

Valor de teste: "trybe" e "be"

Valor esperado no retorno da função: true

verificaFimPalavra("trybe", "be");

Retorno esperado: true

verificaFimPalavra("joaofernando", "fernan");

Retorno esperado: false

*/

function verificaFimPalavra(palavra, fimPalavra) {
  palavra = palavra.split("");
  fimPalavra = fimPalavra.split("");
  controle = true;
  for (let i = 0; i < fimPalavra.length; i++) {
    if (palavra[palavra.length-fimPalavra.length+i] != fimPalavra[i]) {
      controle = false;
    }
  }
  return controle;
}

console.log(verificaFimPalavra("trybe", "be")); 
console.log(verificaFimPalavra("joaofernando", "fernan")); 
/*
Bônus

 Faça um programa que receba uma string em algarismos romanos e retorne o número que a
 string representa.Atenção! Esse exercício já apareceu no 
 processo seletivo de uma grande multinacional!

Dicas:

Uma string é um array de caracteres, então cada elemento do array é uma letra.
O valor de cada numeral romano é:

    | I   | 1    |
    | --- | ---- |
    | IV  | 4    |
    | V   | 5    |
    | IX  | 9    |
    | X   | 10   |
    | XL  | 40   |
    | L   | 50   |
    | XC  | 90   |
    | C   | 100  |
    | CD  | 400  |
    | D   | 500  |
    | CM  | 900  |
    | M   | 1000 |
Que tal criar um objeto que associa cada letra a um numeral para fácil consulta?

Atenção! Quando você tem um número pequeno à direita de um número grande, 
eles devem ser somados. Exemplo: XI = 10 + 1 = 11. 
No entanto, se o número pequeno está à esquerda de um número maior que ele, 
ele deve ser subtraído. Exemplo: IX = 10 - 1 = 9.
*/

function Romanos(roma) {
  let romanos = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let arrayNumbers = [];
  let result = 0;

  for (let indice in roma) {
    arrayNumbers[indice] = romanos[roma[indice]];
  }

  for (let indice in arrayNumbers) {
    if (arrayNumbers[indice] < arrayNumbers[indice + 1]) {
      arrayNumbers[indice + 1] = arrayNumbers[indice + 1] - arrayNumbers[indice];
    } else {
      result += arrayNumbers[indice];
    }
  }

  return result;
}

console.log(Romanos(MMXVIII));