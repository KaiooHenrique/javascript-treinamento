
function calcularImc(peso, altura){
   return imc = peso / (altura * altura);
}
function classificarIms(imc){
    if (imc < 18.5) {
        return ('Abaixo do Peso');
    } else if (imc >= 18.5 && imc <= 25) {
        return ('Peso Normal');
    
    } else if (imc >= 25.1 && imc <= 30) {
        return ('Acima do Peso');
    
    } else if (imc >= 30.1 && imc <= 40) {
        return ('Obeso');

    } else {
        (imc > 40)
        return ('Obesidade Grave');
    }
    
    
}


function main(){
    const peso = 60;
const altura = 1.55;

const imc = calcularImc(peso, altura);
console.log (classificarIms(imc));
}

main();

