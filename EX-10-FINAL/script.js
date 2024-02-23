const vaga = [
    {nomeVaga: 'Auxiliar de Almoxarifado', nomeCandidato: ""  },
    {nomeVaga: 'Jardineiro', nomeCandidato: "" },
    {nomeVaga: 'Cozinheiro', nomeCandidato: "" },
    {nomeVaga: 'Motorista', nomeCandidato: "" },
    {nomeVaga: 'Programador', nomeCandidato: "" },
]
let opcao = ""


do {
    opcao = prompt('Escolha uma opção para prosseguir:\n\n1.Listar vagas disponíveis\n2.Criar uma nova vaga\n3.Visualizar uma vaga\n4.Inscrever um candidato em uma vaga\n5.Excluir uma vaga\n6.Sair')

    switch(opcao) {
        case "1":
            alert("Vagas Disponíveis:");
            vaga.filter(item => {
                alert(item.vaga);
            });
            break
    }
} while (opcao !== "6")