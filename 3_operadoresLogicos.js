//E 
const food = 'pão';
const drink = 'café';

if (drink === 'café' && food === 'pão') {
    console.log('Obrigado');
}else{
    console.log('Não foi esse o meu pedido.');    
}

//OU

if (drink === 'café' || food === 'pão') {
    console.log('Obrigada');
}else{
    console.log('Não foi esse o meu pedido.');
}

// negação

console.log(!(2+2) === 4);
