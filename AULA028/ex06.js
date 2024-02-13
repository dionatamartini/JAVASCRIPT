let dinheiro = prompt("Informe o dinheiro disponível")
dinheiro = parseFloat(dinheiro)
opcao = ""

do {
    opcao = prompt(`O saldo disponível no momento é de R$ ${dinheiro}\n\nEscolha uma das opções abaixo:\n\n1.Adicionar\n2.Remover\n3.Sair`)
    

    switch(opcao) {
        case "1":
            dinheiro += parseFloat(prompt("Informe o valor que deseja adicionar:"))
            break
        case "2":
            dinheiro -= prompt("Informe o calor que deseja subtrair")
            break
        case "3":
            alert("Saindo...")
            break
        default:
        alert("[ERRO] Opção inválida")
    }
} while (opcao !== "3")