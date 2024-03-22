const infoPlayers = document.getElementById('infoPlayers');
const namePlayer1 = []
const namePlayer2 = []

// Adiciona uma classe quando a página é carregada
window.addEventListener('load', function() {
    infoPlayers.classList.add('loginPlayers');

    const h1 = document.createElement('h1')
    h1.classList = 'charKey'
    h1.innerText = 'JOGO DA VELHA'

    const h2 = document.createElement('h2')
    h2.innerText = 'INFORME OS DADOS DOS JOGADORES PARA COMEÇAR!'
    h2.classList = 'charKey'
    h2.id = 'titulo'

    const labelPlayer1 = document.createElement('label')
    labelPlayer1.setAttribute('for' , 'player1')   
    labelPlayer1.classList = 'charKey'
    labelPlayer1.innerText = 'Jogador 1: '
    labelPlayer1.id = "player1"

    const inputPlayer1 = document.createElement('input')
    inputPlayer1.type = 'text'
    inputPlayer1.name = 'player1'
    inputPlayer1.classList = 'charKey'

    const labelPlayer2 = document.createElement('label')
    labelPlayer2.setAttribute('for' , 'player2')   
    labelPlayer2.classList = 'charKey'
    labelPlayer2. id = 'player2'
    labelPlayer2.innerText = 'Jogador 2: '

    const inputPlayer2 = document.createElement('input')
    inputPlayer2.type = 'text'
    inputPlayer2.name = 'player2'
    inputPlayer2.classList = 'charKey'

    const begin = document.createElement('button')
    begin.id = 'begin'
    begin.type = 'button'
    begin.innerText = 'Começar'

    infoPlayers.append(
        h1 , h2 , labelPlayer1 , inputPlayer1 , labelPlayer2 , inputPlayer2 , begin
    )

    begin.addEventListener('click' , function () {
        infoPlayers.classList.remove('loginPlayers')
        infoPlayers.remove(h1 , h2 , labelPlayer1 , inputPlayer1 , labelPlayer2 , inputPlayer2 , begin)

        const namePlayer1Value = inputPlayer1.value;
        namePlayer1.push(namePlayer1Value);

        const namePlayer2Value = inputPlayer2.value;
        namePlayer2.push(namePlayer2Value)

        console.log(namePlayer1Value)
        console.log(namePlayer2Value)
        
    })
    
});