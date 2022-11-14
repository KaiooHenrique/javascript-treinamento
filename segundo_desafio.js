
const precoGasolina = 6.66;
const precoEtanol = 5.79;
const kmPorLitroGasolina = 10;
const kmPorLitroEtanol = 15;
const distanciaKm = 100;

tipoDeCombustivel = 'etanol';

if (tipoDeCombustivel === 'etanol') {
    const litrosConsumidos = distanciaKm / kmPorLitroEtanol;
    const quantidadeConsumida = litrosConsumidos * precoEtanol;
    console.log(quantidadeConsumida);
} else {
    const litrosConsumidos = distanciaKm / kmPorLitroGasolina;
    const quantidadeConsumida = litrosConsumidos * precoGasolina;
    console.log(quantidadeConsumida);
}



