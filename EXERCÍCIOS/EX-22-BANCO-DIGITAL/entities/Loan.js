const Installment = require("./Installment")

module.exports = class Loan {
    constructor(value , installments) {
        this.value = value
        this.createAt = new Date()
        this.installments = []
        for (let i = 1; i <= installments; i++) {
            this.installments.push(new Installment((value * Loan.#fee) / installments) , i)
        }
    }

    static #fee = 1.05

    static set fee(newFeePercentage) {
        Loan.#fee = 1 + (newFeePercentage / 100)
    }

    get fee() {
        return Loan.#fee
    }
}
