carro01 = prompt("Digite o nome do primeiro carro: ")
vel01 = prompt("Agora, digite a velocidade do carro informado anteriormente: ")

carro02 = prompt("Digite o nome do segundo carro: ")
vel02 = prompt("Agora, digite a velocidade do carro informado anteriormente: ")


if(vel01 === vel02) {
    alert(`Tanto o carro de modelo ${carro01} quanto o do modelo ${carro02} estão andando na mesma velocidade`)

} else {
    if (vel01 > vel02) {
        alert(`O carro do modelo ${carro01} está ligeiramente mais rápido do que o carro do modelo ${carro02}`)
    } else{
        alert(`O carro do modelo ${carro02} está ligeiramente mais rápido do que o carro do modelo ${carro01}`)
    }
}


