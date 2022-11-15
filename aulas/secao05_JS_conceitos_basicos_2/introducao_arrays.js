/*
 Secão 05 — Introdução aos Arrays

 Em JS, não há um tipo de dado específico para Arrays,
 na verdade, Arrays são objetos, algo que estudaremos
 em anotações futuras, na seção sobre POO.

 Arrays são objetos indexados, e o índice sempre começa
 em 0 e termina em "n - 1" (onde "n" é o tamanho definido
 no Array). Em um Array de 5 elementos, os índices começam
 em 0 para o primeiro elemento e terminam em 4 para o último
 elemento, formando 5 elementos que começam sua contagem de
 índice em 0.

 // Índices -> Posição do elemento no Array;
 // Elemento -> Dado que tem sua posição apontada pelo índice.

 Detalhes sobre Arrays:
    — Possuem tamanho infinito;
    — Podemos colocar qualquer tipo de dado;
    — Os Arrays são representados pelos colchetes ("[]").

 Agora veremos formas de trabalhar com Arrays:
 */

// Forma 1:
var alunos = new Array('Edson', 'Isabela', 'Lucas', 'Ricardo', 'Maria');
console.log(alunos);

// Forma 2 (recomendada):
var notas = [1, 2, 3, 4, 5];
console.log(notas);

// Criando um Array vazio:
var dados = [];
console.log(dados);

// Fazendo acesso a um elemento de um Array pelo índice:
console.log(alunos[0]);

// Alterando o valor a partir do índice:
notas[2] = 12;
console.log(notas);

// Atenção ao acessar um valor com um índice que não existe!
console.log(notas[9]);  // undefined
notas[9] = 10;

if (notas[5] === undefined) {
    notas[5] = 54;
}

console.log(notas[5]);  // 54
console.log(notas[6]);  // undefined
console.log(notas[7]);  // undefined
console.log(notas[8]);  // undefined
console.log(notas[9]);  // 10

console.log(notas[6] === undefined);  // true

// Para inserir dados ao final do Array utilizamos o método push()

nomes = ['Paula', 'Bruna', 'Jorge'];
console.log(nomes);
nomes.push('Edson');
console.log(nomes);

// Para descobrir o tamanho de Arrays:

console.log(nomes.length);  // 4
var tamanho = nomes.length;

console.log(tamanho);  // 4

// Ordenar dados de um Array:

var pessoas = ['Vera', 'Lúcia', 'Pedro', 'Fernanda', 'Mário'];
pessoas.sort();  // Ordena Array de Strings
console.log(pessoas);

var precos = [123.55, 42.27, 546.99, 23.12];
precos.sort();  // ATENÇÃO, a ordenação de Floats não funciona assim!
console.log(precos);

var idades = [5, 1, 8, 12, 44, 78];
idades.sort();
console.log(idades);  // ATENÇÃO, a ordenação de Ints não funciona assim!

// O CERTO PARA ORDENAR ARRAYS NUMÉRICOS:

precos.sort(
    function (a, b) {
        return a - b;
    }
);
console.log(precos);

idades.sort(
    function (a, b) {
        return a - b;
    }
);
console.log(idades);