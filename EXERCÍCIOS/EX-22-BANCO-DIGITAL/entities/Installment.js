module.exports = class Installment {
    constructor(value, numberportion, situation){
        this.value = value
        this.numberportion = numberportion
        this.situation = situation
    }

}

const portion = new Installment(20 , 2 , "ativa")