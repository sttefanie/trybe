
/*
       JavaScript - Lógica de Programação e Algoritmos
Para o primeiro exercício de hoje, faça um programa que, dado um valor n qualquer, 
seja n > 1, imprima na tela um quadrado feito de asteriscos de lado de tamanho n. 
Por exemplo:
*/

n = 5



let n = 5;
let lineIndex;
let symbol = '*';
let inputLine = '';

for (lineIndex = 0; lineIndex < n; lineIndex++) {
  inputLine = inputLine + symbol;
};
for (lineIndex = 0; lineIndex < n; lineIndex++) {
  console.log(inputLine);
}

/*
Para o segundo exercício, faça o mesmo que antes, mas que imprima um triângulo 
retângulo com 5 asteriscos de base. Por exemplo:

*/
n = 5

let size = 5;
let lineIndex;
let symbol = '*';
let inputLine = '';

for (lineIndex = 0; lineIndex <= size; lineIndex++) {
  console.log(inputLine);
  inputLine = inputLine + symbol;
}
/*

Agora inverta o lado do triângulo. Por exemplo:

n = 5

    *
   **
  ***
 ****
*****
*/
let n = 5;
let lineIndex;
let columnIndex;
let symbol = '*';
let inputLine = '';
let inputPosition = n;

for (lineIndex = 0; lineIndex < n; lineIndex++) {
  for (columnIndex = 0; columnIndex <= n; columnIndex++) {
    if (columnIndex < inputPosition) {
      inputLine = inputLine + ' ';
    } else {
      inputLine = inputLine + symbol;
    }
  }
  console.log(inputLine);
  inputLine = '';
  inputPosition--;
}
/*
4 - 
Por fim, faça uma pirâmide com n asteriscos de base:
n = 5

  *
 ***
*****
*/

let n = 5;
let lineIndex;
let lineColumn;
let lineInput = '';
let symbol = '*';

let midOfMatrix = (n + 1) / 2;
let controlLeft = midOfMatrix;
let controlRight= midOfMatrix;

for (lineIndex = 0; lineIndex <= midOfMatrix; lineIndex++) {
  for (lineColumn = 1; lineColumn <= n; lineColumn++) {
    if (lineColumn > controlRight && lineColumn < controlLeft) {
      lineInput = lineInput + symbol;
    } else {
      lineInput = lineInput + ' ';
    }
  }
  console.log(lineInput);
  lineInput = '';
  controlRight--;
  controlLeft++;
}

/*
5 - Faça uma pirâmide com n asteriscos de base, que seja vazia no meio:
*/
let n = 7;
let lineInput = [];
let baseMatrix = [];
let symbol = '*';
let matrix = [];
let midOfMatrix = (n + 1) / 2;
let controlLeft = 1;
let controlRight = n - 2;

for (let lineColumn = 0; lineColumn < n; lineColumn++) {
  baseMatrix[lineColumn] = symbol;
}
matrix[0] = baseMatrix;
for (let lineIndex = 1; lineIndex < n; lineIndex++) {
  for (let lineColumn = 0; lineColumn < n; lineColumn++) {
    if (lineColumn === controlLeft || lineColumn === controlRight) {
      lineInput[lineColumn] = symbol;
    } else {
      lineInput[lineColumn] = ' ';
    }
  }
  matrix[lineIndex] = lineInput;
  controlLeft++;
  controlRight--;
  lineInput = [];
  if (controlLeft > controlRight) break;
}
let result = '';
for (let lineIndex = matrix.length - 1; lineIndex >= 0; lineIndex--) {
  for (let lineColumn = 0; lineColumn < n; lineColumn++) {
    result = result + matrix[lineIndex][lineColumn];
  }
  console.log(result);
  result = '';
}
/*
6 - 
Faça um programa que diz se um número definido numa variável é primo ou não.

Um número primo é um número que só é divisível por 1 e por ele mesmo, ou seja, 
a divisão dele com quaisquer outros números dá resto diferente de zero.
*/
let divisors;
let numberToCheck = 25;

for (let number = 2; number < numberToCheck && divisors !== 1; number++) {
  divisors = 0;
  if (numberToCheck % number == 0) divisors++;
}

if (divisors === 0) console.log(numberToCheck + ' é primo');
else console.log(numberToCheck + ' não é primo');