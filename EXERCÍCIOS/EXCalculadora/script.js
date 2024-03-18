function areaTriangulo(b, altura) { //opcao 01
    return (b * altura) / 2
}

function areaRetangulo(base , altura) { //opcao 2
    return base * altura
}

function areaQuadrado (lado) { // opcao 3
    return lado ** 2 
}

function areaTrapezio (bma, bme, altura) {// opcao 4
    return (bma + bme) * altura / 2
}

function areaCirculo (pi = 3.14, raio) {// opcao 5
    return pi * (raio ** 2) 
}

let opcao = ""


do {
    opcao = prompt("Escolha uma das formas de cálculo para prosseguir: \n1.Calcular Área de um Triângulo\n2.Calcular Área Retângulo\n3.Calcular Área Quadrado\n4.Calcular Área Trapézio\n5.Calcular Ráio de Círculo\n6.Sair")

    switch(opcao) {
        case "1":
            var altura = parseFloat(prompt("Digite o valor da altura:"))
            var b = parseFloat(prompt("Digite o valor da base:"))
            var resTriangulo = areaTriangulo(b, altura)
            console.log("A área do triângulo é: " + resTriangulo);
            alert("A Área do triângulo é: " + resTriangulo)
            break
        case "2":
            var altura = parseFloat(prompt("Digite o valor da altura:"))
            var base = parseFloat(prompt("Digite o valor da base:"))
            var resRetangulo = areaRetangulo(base, altura)
            alert("A Área do Retangulo é: " + resRetangulo)
            break
        case "3":
            var lado = parseFloat(prompt("Digite o valor do lado:"))
            var resQuadrado = areaQuadrado(lado)
            alert("A Área do Quadrado é: " + resQuadrado)
            break
        case "4":
            var bma = parseFloat(prompt("Digite o valor da base maior:"))
            var bme = parseFloat(prompt("Digite o valor da base menor:"))
            var altura = parseFloat(prompt("Digite o valor da altura:"))
            var resTrapezio = areaTrapezio(bma, bme, altura)
            console.log("A área do triângulo é: " + resTrapezio);
            alert("A Área do Trapezio é: " + resTrapezio)
            break
        case "5":
            var raio = parseFloat(prompt("Digite o valor do raio do círculo:"))
            var resCirculo = areaCirculo(pi = 3.14, raio)
            alert("A Área do Círculo é: " + resCirculo)
            break
        case "6":
            alert("Saindo...")
        
    }
} while (opcao !== "6")

