const media = (...media) => {
    const soma = media.reduce((accum , num) => accum + num, 0);
    const quantidade = media.length;
    return `A média é ${soma / quantidade}`
}

console.log(media(2,6,3,7,4))

// o usuário tem que informar o n(número) e p(peso)
const mediaPonderada = (...args) => {
    // Separando os números e seus respectivos pesos
    const nums = args.filter((_, index) => index % 2 === 0);
    const pesos = args.filter((_, index) => index % 2 !== 0);

    // Calculando a média ponderada
    const somaProdutos = nums.reduce((accum, num, index) => accum + num * pesos[index], 0);
    const somaPesos = pesos.reduce((accum, peso) => accum + peso, 0);
    const media = somaProdutos / somaPesos;

    return `A média ponderada de ${nums} com pesos ${pesos} é ${media}`;
}

console.log(mediaPonderada(7, 2, 9, 5, 3, 1));