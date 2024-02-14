let pacientes = ["1º Mateus" , " 2º Lucas", " 3º Janaina", " 4º Bruna"]
let lista = prompt("Deseja adicionar/remover paciente?\n\n1.Adicionar\n2.Consultar\n3.Sair\n\n" + pacientes)

switch(lista) {
    case "1":
        nome = prompt("Informe o nome:")
        pacientes.push(nome)
        alert("Deseja adicionar/remover outro paciente?\n\n1.Adicionar\n2.Consultar\n3.Sair\n\n" + pacientes)
        break
    case "2":
        alert("Paciente atendido: " + pacientes[0])
        pacientes.shift(nome)
        alert("Deseja adicionar/remover outro paciente?\n\n1.Adicionar\n2.Consultar\n3.Sair\n\n" + pacientes)
        break
    case "3":
        alert("Saindo...")
        break
    default:
}

