module.exports = class Loan {
    static #juros
    constructor(value , date , portion) {
        this.value = value
        this.date = date
        this.portion = portion
    }

    get readyStatic() {
        
    }
}