const inicio = document.getElementById('inicio')
const button = document.getElementById('button')

button.addEventListener('click' , function (ev) {
    const name = document.querySelector('label')
    const input = document.querySelector('input')

    for (let i = 0; i < 2; i++) {
        const lineBreak = document.createElement('br');
        inicio.appendChild(lineBreak);
    }

    newLabel = document.createElement('label')
    newLabel.setAttribute('for' , 'tecnologia')
    newLabel.id = 'tecnologia'
    newLabel.innerText = 'Informe a tecnologia: '

    newInput = document.createElement('input')
    newInput.type = 'text'
    newInput.id = 'textTecnologia'
    newInput.name = 'textTecnologia'

    inputRadio2anos = document.createElement('input')
    inputRadio2anos.type = 'radio'
    inputRadio2anos.id = '2anos'
    inputRadio2anos.name = '2anos'
    inputRadio2anos.value = '2anos'

    labelRadio2anos = document.createElement('label')
    labelRadio2anos.setAttribute('for' , 'radio2anos')
    labelRadio2anos.id = 'radio2anos'
    labelRadio2anos.innerText = '0 a 2 anos'

    inputRadio3a4anos = document.createElement('input')
    inputRadio3a4anos.type = 'radio'
    inputRadio3a4anos.id = '3a4anos'
    inputRadio3a4anos.name = '3a4anos'
    inputRadio3a4anos.value = '3a4anos'

    labelRadio3a4anos = document.createElement('label')
    labelRadio3a4anos.setAttribute('for' , 'radio3a4anos')
    labelRadio3a4anos.id = 'radio3a4anos'
    labelRadio3a4anos.innerText = '3 a 4 anos'

    inputRadio5anos = document.createElement('input')
    inputRadio5anos.type = 'radio'
    inputRadio5anos.id = '+5anos'
    inputRadio5anos.name = '+5anos'
    inputRadio5anos.value = '+5anos'

    labelRadio5anos = document.createElement('label')
    labelRadio5anos.setAttribute('for' , 'radio+5anos')
    labelRadio5anos.id = 'radio+5anos'
    labelRadio5anos.innerText = '+5 anos'

    inicio.appendChild(newLabel)
    inicio.appendChild(newInput)

    for (let i = 0; i < 2; i++) {
        const lineBreak02 = document.createElement('br');
        inicio.appendChild(lineBreak02);
    }

    inicio.appendChild(inputRadio2anos)
    inicio.appendChild(labelRadio2anos)
    inicio.appendChild(inputRadio3a4anos)
    inicio.appendChild(labelRadio3a4anos)
    inicio.appendChild(inputRadio5anos)
    inicio.appendChild(labelRadio5anos)
    
})