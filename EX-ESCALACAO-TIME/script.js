let listaVisivel = false;  
const player = [] 


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
            const inputs = escalar.querySelectorAll('.ul-list li input'); // Seleciona todos os inputs dentro da lista criada
            inputs.forEach(input => {
                const labelText = input.previousElementSibling.textContent; // Obtém o texto do label correspondente
                const inputValue = input.value; // Obtém o valor do input
                player[labelText] = inputValue; // Adiciona o valor do input ao objeto player, usando o texto do label como chave
            });
            console.log(player);
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