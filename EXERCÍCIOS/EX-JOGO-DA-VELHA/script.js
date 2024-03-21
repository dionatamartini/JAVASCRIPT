const infoPlayers = document.getElementById('infoPlayers');

// Adiciona uma classe quando a página é carregada
window.addEventListener('load', function() {
    infoPlayers.classList.add('loginPlayers');

    const h2 = this.document.createElement('h2')
    h2.innerText = 'INFORME OS DADOS DOS JOGADORES PARA COMÇAR!'
    h2.classList = 'charKey'

    const labelPlayer1 = document.createElement('label')
    labelPlayer1.setAttribute('for' , 'player1')   
    labelPlayer1.classList = 'charKey'
    labelPlayer1.innerText = 'Jogador 1: '

    const inputPlayer1 = document.createElement('input')
    inputPlayer1.type = 'text'
    inputPlayer1.name = 'player1'
    inputPlayer1.id = 'player1'
    inputPlayer1.classList = 'charKey'

    const labelPlayer2 = document.createElement('label')
    labelPlayer2.setAttribute('for' , 'player2')   
    labelPlayer2.classList = 'charKey'
    labelPlayer2.innerText = 'Jogador 2: '

    const inputPlayer2 = document.createElement('input')
    inputPlayer2.type = 'text'
    inputPlayer2.name = 'player2'
    inputPlayer2.id = 'player2'
    inputPlayer2.classList = 'charKey'

    const begin = document.createElement('button')
    begin.id = 'begin'
    begin.type = 'button'

    infoPlayers.append(
        h2 , labelPlayer1 , inputPlayer1 , labelPlayer2 , inputPlayer2 , begin
    )

    begin.addEventListener('click' , function () {
        infoPlayers.classList.remove('loginPlayers')
        infoPlayers.remove(h2 , labelPlayer1 , inputPlayer1 , labelPlayer2 , inputPlayer2 , begin)
    })
    
});