let n = parseFloat(prompt("Digite um número de 1 a 20 para gerar a tabuada"));

if (n >= 1 && n <= 20) {
    let res = "";
    for (let i = 1; i <= 20; i++) {
        res += `${n} X ${i} = ${n * i}\n`;
    }
    alert(`Segue tabuada do número ${n}: \n${res}`);
} else {
    alert("Número inválido. Por favor, digite um número de 1 a 20.");
}