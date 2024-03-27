document.addEventListener("DOMContentLoaded", function() {
    document.querySelector("#tempo").addEventListener("input", calcular);
    document.querySelectorAll('input[name="prototipo"]').forEach((radio) => {
        radio.addEventListener("input", calcular);
    });
});

function calcular() {
    const QuantidadeTempo = document.querySelector("#tempo").value;
    let tempo = QuantidadeTempo * 1;
    document.querySelector("#valor").innerText = "Meses: " + tempo ;

    let valor = 0;
    const tipo = document.querySelector("#esporte").value; 
    if (tipo == 2) valor += 2000;

    const prototipoSim = document.querySelector("#prototipo_sim").checked;
    const prototipoNao = document.querySelector("#prototipo_nao").checked;

}
