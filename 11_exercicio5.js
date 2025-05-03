const numbers = [10, 68, 16, 102, 8, 30];

const tamanho = numbers.length;
let soma = 0;
let maiorValor = 0;
let impares = [];

for (let i = 0; i <= (tamanho-1); i += 1){
    //1
    let valor = numbers[i];
    console.log(valor);
    //2
    soma += valor;
    //5
    if (valor > maiorValor){
        maiorValor = valor;
    }
    //6
    if((valor%2) != 0){
        impares.push(valor);
    }
}

console.log(`A soma é ${soma}!`); 
//3
let media = soma/tamanho;
console.log(`A média aritmética dos elementos é: ${media}!`);
//4
if(media > 20){
    console.log('O valor da média aritmética é maior que 20!');    
} else{
    console.log('O valor da média aritmética é menor ou igual a 20.');
}
//5
console.log(`O maior valor da lista é ${maiorValor}!`);
//6
if (impares.length > 0){
    console.log(`Os valores ímpares são: ${impares}.`);
}else{
    console.log('Nenhum valor ímpar encontrado.');    
}



