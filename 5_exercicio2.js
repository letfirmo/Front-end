const num1 = 43;
const num2 = 34;
const num3 = 54;

if (num1 > num2) {
    console.log('Numéro 1 é maior');
}else{
    console.log('Número 2 é maior');
}

if (num1 > num2 && num1 > num3) {
    console.log('Numéro 1 é maior');
}else if (num2 > num1 && num2 > num3){
    console.log('Número 2 é maior');
}else{
    console.log('Número 3 é maior');
}