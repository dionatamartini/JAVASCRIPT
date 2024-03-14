let dadosUsuario = []
function register(element) {
    const username = element.children.username.value
    const password = element.children.password.value
    const passwordConfirmation = element.children.passwordConfirmation.value

    // Verifica se as senhas correspondem
    if (password === passwordConfirmation) {
        alert(`Usuário ${username} registrado!`);
        dadosUsuario = {username , password , passwordConfirmation}
        console.log(dadosUsuario)
    } else {
        alert('As senhas não conferem!');
    }
}
