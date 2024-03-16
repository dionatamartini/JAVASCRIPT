const inicio = document.getElementById('inicio')
const comand = document.getElementById('button')

comand.addEventListener('click', function (ev) {
    ev.preventDefault()
    const yourname = document.querySelector("input[name='name']").value
    if (yourname) {
        
        const setorOne = document.createElement('div')
        setorOne.id = 'div01'
    
        const labelTech = document.createElement('label')
        labelTech.setAttribute('for', 'tech')
        labelTech.innerText = 'Informe a tecnologia:'
        
        const inputTech = document.createElement('input');
        inputTech.type = 'text'
        inputTech.name = 'tech'
        inputTech.id = 'tech' // Este ID deve ser único
        
        inicio.appendChild(setorOne)
        setorOne.appendChild(labelTech)
        setorOne.appendChild(inputTech)
        //-----------------------------------------------------------------------------------------------------------------------------

        const setorTwo = document.createElement('div')
        setorTwo.id = 'div02'

        const inputRadio02 = document.createElement('input')
        inputRadio02.type = 'radio'
        inputRadio02.name = 'grupo02'
        inputRadio02.id = 'radio2anos'

        const labelRadio02 = document.createElement('label')
        labelRadio02.setAttribute('for' , 'radio-2anos')
        labelRadio02.innerText = '0 a 2 anos'

        inputRadio02.addEventListener('change', function () {
            if (this.checked) {
                if (radio2anos) {
                    document.getElementById(radio2anos).checked = false;
                }
                radio2anos = this.id;
            }
        });

        inicio.appendChild(setorTwo)
        setorTwo.appendChild(inputRadio02)
        setorTwo.appendChild(labelRadio02)

        //--------------------------------------------------------------------------------------------------

        const setorthree = document.createElement('div')
        setorthree.id = 'div03'

        const inputRadio03 = document.createElement('input')
        inputRadio03.type = 'radio'
        inputRadio03.name = 'grupo03'
        inputRadio03.id = 'radio3anos'
        const labelRadio03 = document.createElement('label')
        labelRadio03.setAttribute('for' , 'radio-3anos')
        labelRadio03.innerText = '3 a 5 anos'

        inputRadio03.addEventListener('change', function () {
            if (this.checked) {
                if (radio3anos) {
                    document.getElementById(radio3anos).checked = false;
                }
                radio3anos = this.id;
            }
        });

        inicio.appendChild(setorthree)
        setorthree.appendChild(inputRadio03)
        setorthree.appendChild(labelRadio03)

        //--------------------------------------------------------------------------------------------------------

        const setorFour = document.createElement('div')
        setorFour.id = 'div04'

        const inputRadio04 = document.createElement('input')
        inputRadio04.type = 'radio'
        inputRadio04.name = 'grupo04'
        inputRadio04.id = 'radio4anos'
        const labelRadio04 = document.createElement('label')
        labelRadio04.setAttribute('for' , 'radio-4anos')
        labelRadio04.innerText = 'Mais de 5 anos'

        inputRadio04.addEventListener('change', function () {
            if (this.checked) {
                if (radio4anos) {
                    document.getElementById(radio4anos).checked = false;
                }
                radio4anos = this.id;
            }
        });

        inicio.appendChild(setorFour)
        setorFour.appendChild(inputRadio04)
        setorFour.appendChild(labelRadio04)

    } else {
        alert('ATENÇÃO! Antes de informar a tecnologia, deve preencher seu nome!')
    }
});