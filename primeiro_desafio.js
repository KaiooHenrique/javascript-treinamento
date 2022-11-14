
const precoCombustivel = 5.79;
const kmPorLitros = 10;
const distanciaKm = 100;


const litrosConsumidos = distanciaKm / kmPorLitros;
const valorGasto = litrosConsumidos * precoCombustivel;
console.log(valorGasto.toFixed(2));
