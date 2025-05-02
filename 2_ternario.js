//exemplo if_else

const age = 19;
let canDrive;

if (age >= 18) {
    canDrive = 'Pode dirigir!';
} else {
    canDrive = 'Não pode Dirigir';
}

console.log(canDrive);

//usando o ternário

const idade = 19;
const podeDirigir = idade >= 18 ? 'Pode dirigir' : 'Não pode dirigir';

console.log(podeDirigir);
