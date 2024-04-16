module.exports = class Loan {
    #date = new Date()
    constructor(value , portion = 0) {
        this.value = value
        this.date = new Date()
        this.portion = portion * Loan.#baseFee
    }

    static #baseFee = 0.5

    get readyStatic() {
        return this.baseFee
    }
}