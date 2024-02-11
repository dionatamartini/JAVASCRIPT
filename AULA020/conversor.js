m = parseFloat(prompt("Digite um valor em metros"))
transf = prompt("Para qual unidade de medida deseja fazer a conversão?\nOpção 1: mm\nOpção 2: cm\nOpção 3: dm\nOpção 4: dam\nOpção 5: hm\nOpção 6: km\n\nATENÇÃO: DIGITE APENAS O NÚMERO DA OPÇÃO!")

switch(transf) {
    case "1":
        alert(`O resultado é: ${m * 1000} milímetros`)
        break

    case "2": 
        alert(`O resultado é: ${m * 100} centímetros`)
        break

    case "3": 
        alert(`O resultado é: ${m * 10} decímitros`)
        break

    case "4":
        alert(`O resultado é: ${m / 10} decâmetros`)
        break

    case "5": 
        alert(`O resultado é: ${m / 100} hectômetros`)
        break

    case "6": 
        alert(`O resultado é: ${m / 1000} kilômetros`)
        break
}
   