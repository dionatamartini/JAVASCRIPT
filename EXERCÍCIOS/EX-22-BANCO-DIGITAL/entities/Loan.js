module.exports = class Loan {
    constructor(value , date , portion) {
        this.value = value
        this.date = date
        this.portion = portion * Loan.baseFee
    }

    static baseFee = 150

    get readyStatic() {
        
    }
}