document.addEventListener('DOMContentLoaded', function() {
    const container = document.getElementById('container');
    const arrowIcon = document.getElementById('icone');
    const position = document.getElementById('position');

    function rotateIcon() {
        arrowIcon.classList.toggle('rotated');
       
        const newUl = document.createElement('ul');
        newUl.className = 'escalar-player';

        const labels = ['Informe a posição: ', 'Informe o nome: ', 'Informe o número: ']; // Exemplo de rótulos diferentes

        labels.forEach(function(labelText) {
            const newLi = document.createElement('li');
            newLi.className = 'list-item';

            const label = document.createElement('label');
            label.setAttribute('for', 'text');
            label.textContent = labelText;

            const newInput = document.createElement('input');
            newInput.type = 'text';
            newInput.name = 'text';

            newLi.appendChild(label);
            newLi.appendChild(newInput);
            newUl.appendChild(newLi);
        });

        function confirme() { // Agora está no escopo de rotateIcon
            console.log('isso funcione ChatGPT?');
        }

        confirme(); // Chamando a função confirme dentro de rotateIcon

        position.appendChild(newUl);
    }

    container.addEventListener('click', rotateIcon); 
});
