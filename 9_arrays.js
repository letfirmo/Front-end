const listaCompras = ['arroz', 'feijão', 'suco de laranja', 'batata'];
//                       0        1               2             3

//Acessar um elemento do array
console.log(listaCompras[0]);
console.log(listaCompras[2]);
    //guardando o elemento acessado dentro de uma constante
    const item = listaCompras[3];
    console.log(item);

//Alterar o valor de um elemento

listaCompras[2] = 'suco de maçã'

console.log(listaCompras);

//tamanho do array

const tamanho = listaCompras.length;
console.log(tamanho);

//adicionando elementos
listaCompras.push('Farinha');
console.log(listaCompras);

listaCompras.unshift('Macarrão');
console.log(listaCompras);

//removendo elementos
listaCompras.pop();
console.log(listaCompras);

listaCompras.shift();
console.log(listaCompras);