function validar_fatorial() {
    var numero = window.document.querySelector('input#caixa_texto_numero')
    var resposta = window.document.querySelector('p#resposta')

    if (numero.value.length == 0) {
        resposta.innerHTML = 'Preencha o campo acima!'
    } else if (numero.value < 0) {
        resposta.innerHTML = 'O número deve ser inteiro positivo!'
    } else {
        numero = parseInt(numero.value)
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

function verificar_primo() {
    var numero = window.document.querySelector('input#caixa_texto_numero')
    var resposta = window.document.querySelector('p#resposta')

    if (numero.value.length == 0) {
        resposta.innerHTML = 'Preencha o campo acima!'
    } else if (numero.value < 0) {
        resposta.innerHTML = 'O número deve ser inteiro positivo!'
    } else {
        numero = parseInt(numero.value)
        resposta.innerHTML = calcular_primo(numero)
    }
}

function calcular_primo(possivel_primo) {
    divisores = 0
    numero = 0

    while (possivel_primo != numero) {
        numero ++

        if (possivel_primo % numero == 0) {
            divisores ++
        }
    }

    if (divisores == 2) {
        return 'É primo!'
    } else {
        return 'Não é primo!'
    }
}

function verificar_mmc() {
    numero1 = document.querySelector('input#caixa_texto_numero1')
    numero2 = document.querySelector('input#caixa_texto_numero2')
    resposta = document.querySelector('p#resposta')

    if (numero1.value.length == 0 || numero2.value.length == 0) {
        resposta.innerHTML = 'Preencha os dois campos!'    
    } else if (numero1.value.length < 0 || numero2.value.length < 0) {
        resposta.innerHTML = 'Os números devem ser positivos!'
    } else {
        resposta.innerHTML = mmc(numero1.value, numero2.value)
    }
}

function mmc(a, b) {
    return a * (b / mdc(a, b))
}

function mdc(a, b) {
    while (b != 0) {
        resto = a % b
        a = b
        b = resto
    }

    return a
}
