const btnCalcula = document.getElementById('button__calcular');
const btnLimpa = document.getElementById('button__limpar');
const txtAreaPeso = document.getElementById('peso');
const txtAreaAltura = document.getElementById('altura');
const areaImc = document.getElementById('imc__final')

btnCalcula.addEventListener('click', handleCalculaImc)
btnLimpa.addEventListener('click',handleLimpa)

function handleLimpa() {
    mostraNaTela()
    limpaTxtArea('')
}

function handleCalculaImc() {
    const peso = parseFloat(txtAreaPeso.value);
    const altura = parseFloat(txtAreaAltura.value);
    
    try {
        const imc = calculaImc(altura,peso).toFixed(2)
        validacaoAlturaePeso(altura, peso);
        mostraNaTela(imc)
    } catch (error) {
        alert(error.message);
        limpaTxtArea()
    }
}

function mostraNaTela(imc) {
    areaImc.innerHTML = `Seu IMC é de: ${imc}`
}

function limpaTxtArea() {
    txtAreaAltura.value = ''
    txtAreaPeso.value = ''
    mostraNaTela('')
}

function validacaoAlturaePeso(altura,peso) {
    if (!altura || !peso || isNaN(altura) || isNaN(peso) || peso < 0 || altura < 0) {
        throw new Error('O peso e altura devem ser números válidos.');
    }

}

function calculaImc(altura,peso) {
    return peso / (altura*altura)
}