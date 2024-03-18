const form = document.getElementById('formImc');
const calculateButton = document.getElementById('calculate');
const heightInput = document.getElementById('heightInput');
const weightInput = document.getElementById('weightInput');
const resultElement = document.getElementById('res');

calculateButton.addEventListener('click', function(ev) {
  ev.preventDefault(); // Evita o comportamento padrão de envio do formulário
    
  try {
    const height = parseFloat(heightInput.value);
    const weight = parseFloat(weightInput.value);

    const imc = weight / (height * height);

    switch (true) {
      case imc < 16.9:
        resultElement.textContent = `Seu IMC é: ${imc.toFixed(2)} (Muito abaixo do peso)`;
        break;
      case imc >= 16.9 && imc <= 18.5:
        resultElement.textContent = `Seu IMC é: ${imc.toFixed(2)} (Abaixo do peso ideal)`;
        break;
      case imc > 18.5 && imc <= 25:
        resultElement.textContent = `Seu IMC é: ${imc.toFixed(2)} (Peso normal)`;
        break;
      case imc > 25 && imc <= 30:
        resultElement.textContent = `Seu IMC é: ${imc.toFixed(2)} (Acima do peso)`;
        break;
      case imc > 30 && imc <= 35:
        resultElement.textContent = `Seu IMC é: ${imc.toFixed(2)} (Obesidade grau 1)`;
        break;
      case imc > 35 && imc <= 40:
        resultElement.textContent = `Seu IMC é: ${imc.toFixed(2)} (Obesidade grau 2)`;
        break;
      case imc > 40:
        resultElement.textContent = `Seu IMC é: ${imc.toFixed(2)} (Obesidade grau 3)`;
        break;
      default:
        resultElement.textContent = 'Os valores informados não estão corretos!';
    }
  } catch (error) {
    resultElement.textContent = 'Valores inválidos!';
  }

  return false; // Evita o recarregamento da página
});
