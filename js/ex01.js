/*  
javaScript - Primeiros Passos
 Nos exercícios de hoje, você vai fazer quinze pequenos programas. 
Todos trabalham a lógica condicional (if/else e switch), operadores aritméticos 
(+, -, *, /, %) e operadores lógicos (>, <, &&, ||)

1 - Faça cinco programas, um para cada operação aritmética básica.
Seu programa deve ter duas variáveis, a e b, definidas no começo com os valores que 
serão operados. Faça programas para:

Adição
Subtracão
Multiplicação
Divisão
Módulo
*/

var a = 7
var b = 3
console.log('Soma:' + (a + b));
console.log('Subtração:' + (a - b));
console.log('Multiplicação:' + (a * b));
console.log('Divisão:' + (a / b));
console.log('Módulo:' + (a % b));

/*
2 - Faça um programa que retorne o maior de dois números. 
Defina no começo do programa duas variáveis com os valores que serão comparados.
*/

var a = 10
var b = 15

if(a > b){
console.log('a' é maior do que 'b')
}
else{
    console.log('b' é maior do que 'a')
}

/*
3 - Faça um programa que retorne o maior de três números. 
Defina no começo do programa três variáveis com os valores que serão comparados.
*/
var a = 3
var b = 5
var c = 2

if(a > b && a > c){
 console.log('a' é maior do que 'b' e maior do que 'c')
}
else if(b > a && b > c){
    console.log('b' é maior do que 'a' e maior do que 'c')
} else (c > a && c > b){
    console.log('c' é maior do que 'a' e maior do que 'b')
}

/* 4 - Faça um programa que, dado um valor definido numa variável,
 retorne "positive" se esse valor for positivo,
 "negative" se for negativo e "zero" caso contrário.
*/

var valor = 5
if(valor > 0){
    console.log('Positive');
} else if(valor < 0){
    console.log('Negative');
} else{
    console.log('zero');
}

/* 5 - Faça um programa que defina três variáveis com os valores dos três ângulos internos de um triângulo.
Retorne true se os ângulos representarem os ângulos de um triângulo e false caso contrário.
*/

var areaA = 35;
var areaB = 100;
var areaC = 15;

var somaarea= areaA + areaB + areaC;

if (somaarea === 150) {
  console.log('Ângulos válidos!');
} else {
  console.log('Ângulos válidos!');
} 


/*
6 - Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.

Como desafio, faça o programa funcionar tanto se receber o nome de uma peça com letras maiúsculas quanto com letras minúsculas, sem aumentar a quantidade de condicionais.

Como dica, você pode pesquisar uma função que faz uma string ficar com todas as letras minúsculas (lower case).

Se a peça passada for inválida, o programa deve retornar uma mensagem de erro.

Exemplo: bishop -> diagonals

*/

var peça = 'bispo';

switch (peça.toLowerCase()) {
  case 'rei':
    console.log('Rei-> Uma casa apenas para qualquer direção.');
    break;
  case 'bispo':
    console.log('Bispo-> Diagonal.');
    break;
  case 'rainha':
    console.log('Rainha-> Diagonal e horizontal.');
    break;
  case 'cavalo':
    console.log('Cavalo -> "L" pode pular sobre as peças.');
    break;
  case 'torre':
    console.log('Torre -> Horizontal.');
    break;
  case 'peão':
    console.log("Peão -> Apenas uma casa para frente, no primeiro movimento podem ser duas casas.");
    break;
  default:
    console.log('Erro, peça inválida!');
    break;
}

/*
7 - Escreva um programa que converte uma nota dada em porcentagem (de 0 a 100) 
em conceitos de A a F. Siga essas regras:

Porcentagem >= 90 -> A

Porcentagem >= 80 -> B

Porcentagem >= 70 -> C

Porcentagem >= 60 -> D

Porcentagem >= 50 -> E

Porcentagem < 50 -> F

O programa deve retornar uma mensagem de erro e encerrar se a nota passada for menor 
que 0 ou maior que 100.
*/
var grade = 76;

if (grade >= 90) {
  console.log("A");
} else if (grade >= 80) {
  console.log("B");
} else if (grade >= 70) {
  console.log("C");
} else if (grade >= 60) {
  console.log("D");
} else if (grade >= 50) {
  console.log("E");
} else {
  console.log("F");
}

/*

8- Escreva um programa que defina três números em variáveis no seu começo e 
retorne true se uma das três for par.
 Caso contrário, ele retorna false.
*/


var a = 1;
var b = 3;
var c = 5;

var isEven = false;

if ((a % 2 == 0 || b % 2 == 0 || c % 2 == 0)) {
  isEven = true;
};
console.log(isEven);


/*
9 - Escreva um programa que defina três números em variáveis no seu começo 
e retorne true se uma das três for ímpar. 
Caso contrário, ele retorna false.
*/


var a = 1;
var b = 3;
var c = 5;

var isOdd = false;

if ((a % 2 != 0 || b % 2 != 0 || c % 2 != 0)) {
  isOdd = true;
};
console.log(isOdd);

/*
10 - Escreva um programa que se inicie com dois valores em duas variáveis 
diferentes: o custo de um produto e seu valor de venda. A partir dos valores,
 calcule quanto de lucro (valor de venda descontado o custo do produto) a empresa 
 terá ao vender mil desses produtos.

Atente que, sobre o custo do produto, incide um imposto de 20%.

Seu programa também deve emitir uma mensagem de erro e encerrar c
aso algum dos seus valores de entrada seja menor que zero.
*/


var custoproduto = 1;
var valorvenda = 3;

if (custoproduto !== 0 && valorvenda !== 0) {
  var total = (valorvenda - custoproduto) * 1000 * 0.20;
  console.log(total);
} else {
  console.log("Error, os valores não podem ser");
}

/*
11 - Uma pessoa que trabalha de carteira assinada no Brasil tem descontados de seu
 salário bruto o INSS e o IR. Faça um programa que, dado um salário bruto, 
 calcule o líquido a ser recebido.

A notação para um salário de R$1500,10, por exemplo, deve ser 1500.10. 
Para as faixas de impostos, use as seguintes referências:

INSS

Salário bruto até R$ 1.556,94: alíquota de 8%

Salário bruto de R$ 1.556,95 a R$ 2.594,92: alíquota de 9%

Salário bruto de R$ 2.594,93 a R$ 5.189,82: alíquota de 11%

Salário bruto acima de R$ 5.189,82: alíquota máxima de R$ 570,88

IR

Até R$ 1.903,98: isento de imposto de renda

De R$ 1.903,99 a 2.826,65: alíquota de 7,5% e parcela de R$ 142,80 a deduzir do imposto

De R$ 2.826,66 a R$ 3.751,05: alíquota de 15% e parcela de R$ 354,80 a deduzir do imposto

De R$ 3.751,06 a R$ 4.664,68: alíquota de 22,5% e parcela de R$ 636,13 a deduzir do imposto

Acima de R$ 4.664,68: alíquota de 27,5% e parcela de R$ 869,36 a deduzir do imposto.

Exemplo: Uma pessoa possui o salário bruto de R$ 3.000,00. O cálculo será:

O salário bruto está entre R$ 2.594,93 e R$ 5.189,82, então sua alíquota para INSS é de 11%. O INSS será 11% de R$ 3.000, ou seja, R$ 330,00.

Para descobrir o salário-base, subtraia do salário bruto a alíquota do INSS: R$ 3.000,00 - R$ 330,00 = R$ 2.670,00.

Para pegar o valor do IR, temos um salário (já deduzido o INSS) entre R$ 1.903,99 e 2.826,65, sendo a alíquota, então, de 7.5%, com parcela de R$ 142,80 a deduzir do imposto. Assim, temos:

R$ 2.670,00: salário com INSS já deduzido;

7.5%: alíquota de imposto de renda;

R$ 142,00 parcela a se deduzir do imposto.

Fazendo a conta, temos: (7,5% de R$ 2.670,00) - R$ 142,80 = R$ 57,45

O último cálculo para conseguir o salário líquido é R$ 2.670,00 - R$ 57,45 (salário-base - valor IR) = R$ 2.612,55.

Resultado: R$ 2.612,55.
*/
 

var aliquotINSS;
var aliquotIR;

var grossSalary = 2000.00;

if (grossSalary <= 1556.94) {
  aliquotINSS = grossSalary * 0.08;
} else if (grossSalary <= 2594.92) {
  aliquotINSS = grossSalary * 0.09;
} else if (grossSalary <= 5189.82) {
  aliquotINSS = grossSalary * 0.11;
} else {
  aliquotINSS = 570.88;
}

var baseSalary = grossSalary - aliquotINSS;

if (baseSalary <= 1903.98) {
  aliquotIR = 0;
} else if (baseSalary <= 2826.65) {
  aliquotIR = baseSalary * 0.075 - 142.80;
} else if (baseSalary <= 3751.05) {
  aliquotIR = baseSalary * 0.15 - 354.80;
} else if (baseSalary <= 4664.68) {
  aliquotIR = baseSalary * 0.225 - 636.13;
} else {
  aliquotIR = baseSalary * 0.275 - 869.36;
};

console.log("Salário: " + (baseSalary - aliquotIR));




