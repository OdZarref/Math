function validar_fatorial() {
    var numero = window.document.querySelector('input#caixa_texto_numero')
    var resposta = window.document.querySelector('p#resposta')

    if (numero.value.length == 0) {
        resposta.innerHTML = 'Preencha o campo acima!'
    } else if (numero.value < 0) {
        resposta.innerHTML = 'O número deve ser inteiro positivo!'
    } else {
        numero = parseInt(numero.value)
        resposta.innerHTML = ''
        resposta.innerHTML = fatorial(numero)
    }
}

function fatorial(n) {
    if (n == 0 || n == 1) {
        return 1
    } else {
        return n * fatorial(n-1)
    }
}