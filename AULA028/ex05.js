let opcao = ""

do {
    opcao = prompt("ESCOLHA UMA DAS OPÇÕES ABAIXO, DIGITANDO APENAS O NÚMERO CORRESPONDENTE!\n\nOpção 1\nOpção 2\nOpção 3\nOpção 4\n\nOpção 5: ENCERRAR")
      
    switch (opcao) {
        case "1":
            alert("Você escolheu a opção 1")
            break

        case "2":
            alert("Você escolheu a opção 2")
            break
    
        case "3":
            alert("Você escolheu a opção 3")
            break

        case "4":
            alert("Você escolheu a opção 4")
            break

        case "5":
            alert("Você escolheu encerrar")
            alert("Encerrando")
            break
        default:
            alert("Opção inválida")
    }
} while (opcao !== "5")
