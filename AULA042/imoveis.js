let imoveis = [] // Alterei o nome para o plural, para indicar que é um array de imóveis
let opcao = ""

do {
    opcao = prompt("Bem-vindo(a) ao Cadastro de Imoóveis!\n" + "Total de Imóveis: " + imoveis.length + "\n\nEscolha uma opção: \n1. Incluir\n2. Mostrar Cadastrados\n3. Sair")

    switch(opcao) {
        case "1":
            let imovel = {}
                imovel.propriedade = prompt("Digite o nome do proprietário:"),
                imovel.quartos = parseFloat(prompt("Quantos quartos tem?")),
                imovel.banheiros = parseFloat(prompt("Quantos banheiros tem?")),
                imovel.garagem = prompt("Tem garagem? (Sim/Não)")

                const confirmacao = confirm("Salvar este imóvel?\n" + "\nProprietário " + imovel.propriedade + "\nQuartos: " + imovel.quartos + "\nBanheiros: " + imovel.banheiros + "\nGaragem: " + imovel.garagem)
           
                if(confirmacao) {
                    imoveis.push(imovel);
                }
            
            break;
        case "2":
           for(let i = 0; i < imoveis.length; i++) {
            alert("Imóvel " + (i+ 1)+ "\nProprietário: " + imoveis[i].propriedade + "\nQuartos: " + imoveis[i].quartos + "\nBanheiros: " + imoveis[i].banheiros + "\nGaragem: " + imoveis[i].garagem ) 
           }
           break
        case "3":
            alert("Encerrando...");
            break;
        default:
            alert("Opção inválida. Escolha novamente.");
    }
} while (opcao !== "3");