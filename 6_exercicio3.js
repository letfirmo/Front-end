const angulo1 = 60;
const angulo2 = 60;
const angulo3 = 60;

let soma = angulo1 + angulo2 + angulo3;

if (angulo1 <= 0 || angulo2 <= 0 || angulo3 <= 0){
    console.log("Um ou mais valores inválidos");
} else if (soma == 180){
    console.log('é um triangulo!');
} else{
    console.log('não é um triangulo!');    
}

