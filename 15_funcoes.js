function soma(n1,n2){
    let adicao = n1 + n2;
    return adicao;    
}

console.log(
    soma(2,5)
);

const Array = [10, 20, 30, 40];

function somaArray(array){
    let Soma = 0;
    for(let i = 0; i <= (array.length - 1); i += 1){
        Soma += array[i];        
    }
    return Soma;
}

console.log(somaArray(Array));

//2:34:00
