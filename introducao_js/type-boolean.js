const value1 = true;
const value2 = false;

if (value1) {
    console.log('Verdadeiro')
} else {
    console.log('Falso')
}
// Saida: Verdadeiro

if (!value1) {
    console.log('Verdadeiro')
} else {
    console.log('Falso')
}
// Saida: Falso

// Thruty/Falsy -> Variaveis vazias ou com valor 0, se submeter a um teste lógico ficam boolean.

const value3 = ''
if (value3) {
    console.log('Verdadeiro')
} else {
    console.log('Falso')
}

// Operador ternário
(Logica) ? (entao) : (senao)

const resultado = value3 ? 'Verdadeiro' : 'Falso'
console.log(resultado)
// Saida: Falso