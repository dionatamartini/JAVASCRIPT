module.exports = class Account {
    #balance
    constructor(balance , deposit , loan , transfers , user ) {
        this.#balance = balance
        this.deposit = new deposit()
        this.loan = new loan()
        this.transfers = new transfers()
        this.user = user
    }

    newDeposit(deposit) {
        const currBalance = deposit + this.#balance

    }

    newLoan(loan) {
        const currLoan = loan.forEach(value => {
            value += this.balance
        })
    }

    
}