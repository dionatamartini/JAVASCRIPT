let imoveis = []; // Alterei o nome para o plural, para indicar que é um array de imóveis

let opcao = "";

do {
    opcao = prompt("1. Incluir\n2. Mostrar Cadastrados\n3. Sair");

    switch(opcao) {
        case "1":
            let novoImovel = {
                nomePropriedade: prompt("Digite o nome da propriedade:"),
                quartos: parseInt(prompt("Quantos quartos tem?")),
                banheiros: parseInt(prompt("Quantos banheiros tem?")),
                garagem: prompt("Tem garagem? (Sim/Não)")
            };
            imoveis.push(novoImovel);
            break;
        case "2":
            if (imoveis.length > 0) {
                alert("Imóveis cadastrados:");
                imoveis.forEach(function(imovel) {
                    alert(`Nome: ${imovel.nomePropriedade}\nQuartos: ${imovel.quartos}\nBanheiros: ${imovel.banheiros}\nGaragem: ${imovel.garagem}`);
                });
            } else {
                alert("Nenhum imóvel cadastrado.");
            }
            break;
        case "3":
            alert("Encerrando...");
            break;
        default:
            alert("Opção inválida. Escolha novamente.");
    }
} while (opcao !== "3");