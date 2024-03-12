let listaVisivel = false;   


function escalarJogador() {
    const escalar = document.getElementById('escalar');
    

    if (!listaVisivel) {
        const li = ['Informe a posição: ', 'Informe o nome: ', 'Informe o número da camisa: '];
        const ul = document.createElement('ul');
        ul.className = 'ul-list';

        const buttonYes = document.createElement('button')
        buttonYes.innerText = 'Sim'
        buttonYes.className = 'button-yes'

        li.forEach(liText => {
            const newLi = document.createElement('li');
            const label = document.createElement('label');
            
            label.textContent = liText;

            const input = document.createElement('input');
            input.type = 'text';

        
            // Adiciona um quebra de linha para separar os elementos
            newLi.appendChild(document.createElement('br'));

            newLi.appendChild(label);
            newLi.appendChild(input);

            ul.appendChild(newLi);

            label.addEventListener('click', function() {
                input.focus();
            });

});
        escalar.appendChild(ul);
        escalar.appendChild(buttonYes);

        buttonYes.addEventListener('click', function() {
            // código a ser executado quando o botão for clicado
        });

        listaVisivel = true; // Atualiza o estado da lista para visível
    } else {
        const buttonYes = document.querySelector('.button-yes')
        const ul = document.querySelector('.ul-list');
        escalar.removeChild(buttonYes)
        escalar.removeChild(ul); // Remove a lista
        
        listaVisivel = false; // Atualiza o estado da lista para invisível
    }
}