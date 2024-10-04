// Espera o DOM carregar para garantir que os elementos estejam disponiveis

window.onload = function() {
    
    // Obtem o botao de calcular
    const botaoCalcular = document.getElementById('btnCalcular');

    // Adiciona um evento de clique ao botao
    botaoCalcular.addEventListener('click', function() {
        
        // Obtem os valores dos campos de entrada
        var num1 = document.getElementById('numero1').value;
        var num2 = document.getElementById('numero2').value;
        
        // Converte os valores para numeros
        var soma = parseFloat(num1) + parseFloat(num2);
        
        // Exibe o resultado em um alert
        alert("A soma e: " + soma);
    });
};
