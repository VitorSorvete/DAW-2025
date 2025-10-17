//função sem retorno
function inicio() {
    const mensagem = 'Estou iniciando ...'
    console.log(mensagem)
}

//função com retorno
function processo() {
    const mensagem = 'Estou processando ...'
    return mensagem
}

inicio();
const retorno = processo();
console.log(retorno); 