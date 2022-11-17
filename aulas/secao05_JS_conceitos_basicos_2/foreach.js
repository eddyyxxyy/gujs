var cursos = [
    'Programação para Leigos',
    'Algoritmos e Lógica de Programação',
    'Programação em C',
    'Programação em Java',
    'Programação em Python',
    'Banco de Dados',
    'Programação Web com Django Framework',
    'Programação em JavaScript'
];

// Definir uma função:
// function imprimir(curso, indice) {
//     console.log((indice + 1) + ' - ' + curso);
// }

// para cada
// cursos.forEach(imprimir);


// Utilização de uma função anônima (lambda/callback) e template string
// cursos.forEach(function (curso, indice) {
//     console.log(`${indice + 1} - ${curso}`);
// });


// Utilizando for
for (var i = 0; i < cursos.length; i++) {
    console.log((i + 1) + ' - ' + cursos[i]);
}
