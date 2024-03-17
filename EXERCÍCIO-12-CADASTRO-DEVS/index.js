function createLabel(text, htmlFor) {
    const label = document.createElement('label')
    label.htmlFor = htmlFor
    label.innerText = text
    return label
}

function createInput(id, value , name , type = 'text', placeholder = '') {
    const input = document.createElement('input')
    input.id = id
    input.value = value
    input.name = name
    input.type = type
    input.placeholder = placeholder
    return input
}

const addBotao = document.getElementById('addBotao')
const formulario = document.getElementById('formulario')
const desenvolvedores = []
let inputLinhas = 0

addBotao.addEventListener('click' , function (ev) {
    const listaNaoOrdenada = document.getElementById('listaNaoOrdenada')

    const novaLinha = document.createElement('li')
    const numeroLinha = inputLinhas++
    novaLinha.id = 'inputLinha-' + numeroLinha
    novaLinha.className = 'inputLinha'

    const techNomeLabel = createLabel('Nome: ', 'techNome- ' + numeroLinha)
    const techNomeInput = createInput('techNome -' + numeroLinha, null, 'techNome')

    //------------------------------------------------------------------------------------------------- PRIMEIRA PARTE DO CÓDIGO - ANTES DO CLIQUE DO BOTAO OCORRER

    const expLabel = createLabel('Experiência: ')
    const id1 = 'expRadio-' + numeroLinha + '.1' //1.1
    const expRadio1 = createInput(id1 , '0-2 anos' , 'techExp-' + numeroLinha, 'radio')
    const expLabel1 = createLabel('0-2 anos', id1)

    const id2 = 'expRadio-' + numeroLinha + '.2'//1.2
    const expRadio2 = createInput(id2 , '3-4 anos' , 'techExp-' + numeroLinha, 'radio')
    const expLabel2 = createLabel('3-4 anos', id2)

    const id3 = 'expRadio-' + numeroLinha + '.3'//1.3
    const expRadio3 = createInput(id3 , '+5 anos' , 'techExp-' + numeroLinha, 'radio')
    const expLabel3 = createLabel('+5 anos', id3)
    
    //-------------------------------------------------------------------------------------------------- COMPORTAMENTO DOS RADIOS

    const removeLinha = document.createElement('button')
    removeLinha.type = 'button'
    removeLinha.innerText = 'Remover'
    removeLinha.addEventListener('click' , function () {
        listaNaoOrdenada.removeChild(novaLinha)
    })


    novaLinha.append(
        techNomeLabel , techNomeInput, expLabel, expRadio1, expLabel1, expRadio2, expLabel2, expRadio3, expLabel3, removeLinha
    )

    listaNaoOrdenada.appendChild(novaLinha)
})

    //------------------------------------------------------------------------------------------------- 

form.addEventListener('submit', function (ev) {
    ev.preventDefault()
  
    const nomeCompleto = document.getElementById('nomeCompleto')
    const inputLinhas = document.querySelectorAll('.inputLinha')
  
    let tecnologias = []
    inputLinhas.forEach(function (Linha) {
      // #expRadio- input[name="techNome"]
      const techNome = document.querySelector('#' + Linha.id + ' input[name="techNome"]').value
      const techExp = document.querySelector('#' + Linha.id + ' input[type="radio"]:checked').value
      tecnologias.push({ name: techNome, exp: techExp })
    })
  
    const novoDev = { nomeCompleto: nomeCompleto.value, tecnologias: tecnologias }
    developers.push(novoDev)
    alert('Dev cadastrado com sucesso!')
  
    nomeCompleto.value = ''
    inputLinhas.forEach(function (Linha) {
      Linha.remove()
    })
  
    console.log(developers)
  })