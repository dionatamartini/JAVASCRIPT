function register(ev) {
    console.log(ev)
    const sectionElement = ev.currentTarget.parentNode //currentTarget faz o mesmo que (this) no html/ ev.currentTarget.parentNode = this.parentNode
    const username = sectionElement.children.username.value
    const password = sectionElement.children.password.value
    const passwordConfirmation = sectionElement.children.passwordConfirmation.velue

    if (password === passwordConfirmation) {
        alert(`Usuário ${username} registrado!`)
    } else {
        alert('As senhas não conferem!')
    }
}

const button = document.getElementById('register-button')

button.addEventListener('click' , register) //o 'ev' como parâmetro faz com que o addEventListener seja validado como um evento. 