

const nota1 = 7;
const nota2 = 7;
const nota3 = 7;

const mediaFinal = (nota1 + nota2 + nota3) / 3;
console.log(mediaFinal.toFixed(1));


if (mediaFinal < 5) {
    console.log('Reprovado:');

} else if (mediaFinal >= 5 && mediaFinal <= 7) {
    console.log('Recuperação:');

} else{(mediaFinal > 7)
    console.log('Aprovado');
}
