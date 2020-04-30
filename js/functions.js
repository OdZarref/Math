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

        if (calcular_primo(numero)) {
            resposta.innerHTML = 'É primo!'
        } else {
            resposta.innerHTML = 'Não é primo!'
        }
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
        return true
    } else {
        return false
    }
}

function verificar_mmc() {
    var numero1 = document.querySelector('input#caixa_texto_numero1')
    var numero2 = document.querySelector('input#caixa_texto_numero2')
    var resposta = document.querySelector('p#resposta')

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

function verificar_mdc() {
    var numero1 = document.querySelector('input#caixa_texto_numero1')
    var numero2 = document.querySelector('input#caixa_texto_numero2')
    var resposta = document.querySelector('p#resposta')

    if (numero1.value.length == 0 || numero2.value.length == 0) {
        resposta.innerHTML = 'Preencha os dois campos!'    
    } else if (numero1.value.length < 0 || numero2.value.length < 0) {
        resposta.innerHTML = 'Os números devem ser positivos!'
    } else {
        resposta.innerHTML = `mdc(${numero1.value}, ${numero2.value}) = ${mdc(numero1.value, numero2.value)}`
    }
}

function mdc(a, b) {
    while (b != 0) {
        resto = a % b
        a = b
        b = resto
    }

    return a
}

function verificar_germain() {
    var numero = document.querySelector('input#caixa_texto_numero')
    var resposta = document.querySelector('p#resposta')

    if (numero.value.length == 0) {
        resposta.innerHTML = 'Preencha o campo acima!<br><br><br>'
    } else if (numero.value < 0) {
        resposta.innerHTML = 'Digite um número natural!<br><br><br>'
    } else if (!calcular_primo(numero.value)) {
        resposta.innerHTML = 'O número digitado não é primo!<br><br><br>'
    } else {
        if (primo_germain(numero.value)) {
            resposta.innerHTML = `Primo de Sophie Germain!<br>2 x ${numero.value} + 1 = ${numero.value * 2 + 1}<br>${numero.value * 2 + 1} também é primo!`
        } else {
            resposta.innerHTML = `Não é primo de Sophie Germain!<br>2 x ${numero.value} + 1 = ${numero.value * 2 + 1}<br>${numero.value * 2 + 1} não é primo!`
        }
    }
}

function primo_germain(numero) {
    if (calcular_primo(numero * 2 + 1)) {
        return true
    } else {
        return false
    }
}

function fatores_numero(numero) {
    fatores = [] 
    primo = 2

    while (numero != 1) {
        if (numero % primo == 0 && calcular_primo(primo)) {
            fatores.push(primo)
            numero /= primo
        } else {
            if (primo == 2) {
                primo ++
            } else {
                primo += 2
            }
        }
    }

    return fatores
}