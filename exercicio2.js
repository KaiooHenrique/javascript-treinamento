


const peso = 60;
const altura = 1.55;

imc = peso / (altura * altura);
console.log(imc.toFixed(1));

if (imc < 18.5) {
    console.log('Abaixo do Peso');
} else if (imc >= 18.5 && imc <= 25) {
    console.log('Peso Normal');

} else if (imc >= 25.1 && imc <= 30) {
    console.log('Acima do Peso');

} else if (imc >= 30.1 && imc <= 40) {
    console.log('Obeso');

} else {
    (imc > 40)
    console.log('Obesidade Grave');
}


