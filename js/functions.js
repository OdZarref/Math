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

function calcula_primo (possivel_primo) {
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


function mmc(numero, numero2) {
    var fatores = []

    while (numero != 1 & numero2 != 1) {
        fatores = []
    }
}

console.log(calcula_primo(11))
