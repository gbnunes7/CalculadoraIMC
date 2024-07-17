const btnCalcula = document.getElementById('button__calcular');
const btnLimpa = document.getElementById('button__limpar');
const txtAreaPeso = document.getElementById('peso');
const txtAreaAltura = document.getElementById('altura');
const areaImc = document.getElementById('imc__final')

btnCalcula.addEventListener('click', () => {
    const peso = txtAreaPeso.value;
    const altura = txtAreaAltura.value;

    const imc = calculaImc(altura,peso).toFixed(2)
    
    try {
        validacaoAlturaePeso(altura, peso);
        areaImc.innerHTML = `Seu IMC é de: ${imc}`
    } catch (error) {
        alert(error.message);
    }
})

btnLimpa.addEventListener('click',() => {
    areaImc.innerHTML = `Seu IMC é de:`
    txtAreaAltura.value = ''
    txtAreaPeso.value = ''

})


function validacaoAlturaePeso(altura,peso) {
    if (!altura || !peso || isNaN(altura) || isNaN(peso) || peso < 0 || altura < 0) {
        throw new Error('O peso e altura devem ser números válidos.');
    }

}

function calculaImc(altura,peso) {
    return peso / (altura*altura)
}