/*const vagas = [
    {
        "Vaga": "Aux. Limpeza",
        "candidato": []
    }
]*/

const vagas = [];

function listarVagas() {
    let lista = 'Vagas cadastradas:\n\n';
    vagas.forEach((vaga, index) => {
        lista += `Vaga ${index + 1}:\n`;
        lista += `Nome: ${vaga.nome}\n`;
        lista += `Descrição: ${vaga.descricao}\n`;
        lista += `Data Limite: ${vaga.dataLimite}\n\n`;
    });
    alert(lista);
}

function criarVaga() {
    const vaga = {
        nome: prompt('Digite o nome da vaga: '),
        descricao: prompt('Digite uma descrição para a vaga: '),
        dataLimite: prompt('Digite uma data limite: ')
    };

    let confirma = confirm("Confirma as informações?");

    if (confirma) {
        vagas.push(vaga);
        alert('Vaga cadastrada com sucesso!');
        listarVagas();
    } else {
        listarVagas();
    }
}

criarVaga();
